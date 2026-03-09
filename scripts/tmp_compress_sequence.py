#!/usr/bin/env python3
"""
Temporary utility to compress image frames in public/sequence.

Examples:
  python scripts/tmp_compress_sequence.py
  python scripts/tmp_compress_sequence.py --in-place
  python scripts/tmp_compress_sequence.py --colors 160 --in-place
  python scripts/tmp_compress_sequence.py --format webp --webp-lossless --output public/sequence-webp
  python scripts/tmp_compress_sequence.py --format webp --quality 72 --output public/sequence-webp
  python scripts/tmp_compress_sequence.py --max-dimension 1280
"""

from __future__ import annotations

import argparse
import shutil
import sys
import tempfile
from pathlib import Path

try:
    from PIL import Image
except ImportError as exc:  # pragma: no cover
    raise SystemExit("Pillow is required. Install with: pip install pillow") from exc


Image.MAX_IMAGE_PIXELS = None

SUPPORTED_INPUT_SUFFIXES = {".png", ".jpg", ".jpeg"}


def human_size(num_bytes: int) -> str:
    size = float(num_bytes)
    for unit in ("B", "KB", "MB", "GB"):
        if size < 1024 or unit == "GB":
            return f"{size:.2f} {unit}"
        size /= 1024
    return f"{size:.2f} GB"


def sorted_images(input_dir: Path) -> list[Path]:
    return sorted(
        [
            path
            for path in input_dir.iterdir()
            if path.is_file() and path.suffix.lower() in SUPPORTED_INPUT_SUFFIXES
        ]
    )


def build_output_path(source_path: Path, output_dir: Path, output_format: str) -> Path:
    extension = ".png" if output_format == "png" else ".webp"
    return output_dir / f"{source_path.stem}{extension}"


def maybe_resize(image: Image.Image, max_dimension: int | None) -> Image.Image:
    if not max_dimension:
        return image

    image = image.copy()
    image.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
    return image


def compress_to_png(image: Image.Image, output_path: Path, colors: int | None) -> None:
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")

    # Default path is lossless PNG recompression.
    if colors is None:
        image.save(output_path, format="PNG", optimize=True, compress_level=9)
        return

    # Optional quantization (lossy) for stronger size reduction.
    quantized = image.quantize(colors=colors)
    quantized.save(output_path, format="PNG", optimize=True, compress_level=9)


def compress_to_webp(image: Image.Image, output_path: Path, quality: int, lossless: bool) -> None:
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
    if lossless:
        image.save(output_path, format="WEBP", method=6, lossless=True)
    else:
        image.save(output_path, format="WEBP", quality=quality, method=6)


def compress_file(
    source_path: Path,
    output_path: Path,
    output_format: str,
    colors: int | None,
    quality: int,
    webp_lossless: bool,
    max_dimension: int | None,
) -> tuple[int, int]:
    with Image.open(source_path) as img:
        working = maybe_resize(img, max_dimension)
        if output_format == "png":
            compress_to_png(working, output_path, colors)
        else:
            compress_to_webp(working, output_path, quality, webp_lossless)

    return source_path.stat().st_size, output_path.stat().st_size


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Compress images in public/sequence.")
    parser.add_argument("--input", default="public/sequence", help="Input directory of frames.")
    parser.add_argument(
        "--output",
        default="public/sequence-compressed",
        help="Output directory (ignored with --in-place).",
    )
    parser.add_argument(
        "--format",
        choices=("png", "webp"),
        default="png",
        help="Output format. PNG keeps current file extension compatibility.",
    )
    parser.add_argument(
        "--colors",
        type=int,
        default=None,
        help="Optional PNG palette color count (1-256). Omit to preserve quality.",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=72,
        help="WEBP quality (1-100) when not using --webp-lossless.",
    )
    parser.add_argument(
        "--webp-lossless",
        action="store_true",
        help="Encode WEBP in lossless mode (pixel-exact).",
    )
    parser.add_argument(
        "--max-dimension",
        type=int,
        default=None,
        help="Resize so max(width, height) <= this value.",
    )
    parser.add_argument(
        "--in-place",
        action="store_true",
        help="Overwrite original files (only allowed with --format png).",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    input_dir = Path(args.input).resolve()
    if not input_dir.exists() or not input_dir.is_dir():
        print(f"Input directory not found: {input_dir}")
        return 1

    if args.in_place and args.format != "png":
        print("--in-place is only supported with --format png")
        return 1

    if args.colors is not None and not (1 <= args.colors <= 256):
        print("--colors must be between 1 and 256")
        return 1

    if not (1 <= args.quality <= 100):
        print("--quality must be between 1 and 100")
        return 1

    files = sorted_images(input_dir)
    if not files:
        print(f"No supported images found in: {input_dir}")
        return 1

    output_dir = Path(args.output).resolve()
    temp_dir: Path | None = None

    if args.in_place:
        temp_dir = Path(tempfile.mkdtemp(prefix="sequence_compress_"))
        work_dir = temp_dir
    else:
        work_dir = output_dir
        work_dir.mkdir(parents=True, exist_ok=True)

    print(f"Processing {len(files)} files from: {input_dir}")
    print(f"Output format: {args.format}")
    if args.format == "png":
        mode = "lossy quantized PNG" if args.colors is not None else "lossless PNG recompression"
        print(f"Mode: {mode}")
    elif args.webp_lossless:
        print("Mode: lossless WEBP")
    else:
        print(f"Mode: lossy WEBP (quality={args.quality})")
    if args.max_dimension:
        print(f"Max dimension: {args.max_dimension}px")

    total_before = 0
    total_after = 0

    try:
        for index, source_path in enumerate(files, start=1):
            output_path = build_output_path(source_path, work_dir, args.format)
            before, after = compress_file(
                source_path=source_path,
                output_path=output_path,
                output_format=args.format,
                colors=args.colors,
                quality=args.quality,
                webp_lossless=args.webp_lossless,
                max_dimension=args.max_dimension,
            )
            total_before += before
            total_after += after

            if index % 20 == 0 or index == len(files):
                print(
                    f"[{index:>3}/{len(files)}] "
                    f"{source_path.name} -> {output_path.name} | "
                    f"{human_size(before)} -> {human_size(after)}"
                )

        if args.in_place:
            for source_path in files:
                replacement = build_output_path(source_path, work_dir, "png")
                shutil.move(str(replacement), str(source_path))
    finally:
        if temp_dir and temp_dir.exists():
            shutil.rmtree(temp_dir, ignore_errors=True)

    saved = total_before - total_after
    reduction = (saved / total_before * 100) if total_before else 0
    destination = "in-place originals" if args.in_place else str(work_dir)

    print("\nDone.")
    print(f"Destination: {destination}")
    print(f"Total before: {human_size(total_before)}")
    print(f"Total after : {human_size(total_after)}")
    print(f"Saved       : {human_size(saved)} ({reduction:.2f}%)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
