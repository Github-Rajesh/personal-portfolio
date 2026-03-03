"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function OCRRPASuiteCaseStudy() {
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white/90 selection:bg-orange-500/30 font-sans pb-32">
            {/* Ambient Background */}
            <div className="fixed top-0 inset-x-0 h-screen pointer-events-none opacity-50 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-600/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-rose-600/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 p-6 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-orange-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Portfolio
                </Link>
            </nav>

            <article className="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-48">
                {/* Header */}
                <motion.header
                    style={{ opacity: headerOpacity, y: headerY }}
                    className="mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-orange-400 font-mono tracking-widest text-sm uppercase mb-6">Case Study</p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">OCR RPA Suite</h1>
                        <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                            Enterprise Document Processing & Workflow Automation Platform
                        </p>
                    </motion.div>
                </motion.header>

                <div className="space-y-32">
                    {/* Project Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Project Overview</h2>
                        <p className="text-lg leading-relaxed text-zinc-300">
                            An enterprise-grade automation platform designed to extract data from complex, unstructured documents using advanced optical character recognition (OCR) and automate multi-system workflows. Handles invoice processing, form extraction, document classification, and intelligent data routing across enterprise systems.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-300 mt-6">
                            <span className="text-orange-300 font-semibold">Key Innovation:</span> Intelligent OCR with computer vision preprocessing, advanced document understanding, multi-system RPA orchestration, and production-grade error recovery—transforming manual document processing into fully automated data pipelines.
                        </p>
                    </motion.section>

                    {/* Your Role */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Your Role & Responsibilities</h2>
                        <p className="text-lg leading-relaxed text-zinc-300 mb-6">
                            You architected and implemented the <span className="text-orange-300 font-semibold">OCR Processing Engine &amp; Intelligent Document Analysis System</span>—the foundation that enables automated data extraction from complex, unstructured documents with variable layouts and quality.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-orange-300 mb-6">OCR & Document Processing (Primary Contribution - 100%)</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Advanced Image Preprocessing</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Implemented <strong>computer vision preprocessing pipeline</strong> using OpenCV for image normalization</li>
                                    <li>Built <strong>intelligent deskewing detection</strong> to correct rotated and skewed documents</li>
                                    <li>Engineered <strong>contrast and brightness optimization</strong> (CLAHE, histogram equalization) for high-fidelity OCR</li>
                                    <li>Implemented <strong>noise reduction and binarization</strong> for consistent text extraction</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Tesseract OCR Integration</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Integrated <strong>Tesseract 5.x with multiple language support</strong> for global document processing</li>
                                    <li>Implemented <strong>confidence scoring and character verification</strong> to flag unreliable extractions</li>
                                    <li>Built <strong>region-based text extraction</strong> for structured form processing (invoices, receipts)</li>
                                    <li>Engineered <strong>layout analysis</strong> to preserve document structure and table recognition</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Document Classification & Understanding</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Built <strong>document type classification</strong> (Invoice, PO, Receipt, Form, etc.) using feature analysis</li>
                                    <li>Implemented <strong>field extraction templates</strong> for structured data (amounts, dates, vendor names)</li>
                                    <li>Engineered <strong>intelligent field mapping</strong> that adapts to document variations</li>
                                    <li>Created <strong>validation rules</strong> for data quality assurance (amount formats, date patterns)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">RPA Orchestration & System Integration</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Implemented <strong>Selenium-based web automation</strong> for legacy system data entry</li>
                                    <li>Built <strong>xlwings Excel RPA</strong> for spreadsheet population and formula execution</li>
                                    <li>Orchestrated <strong>multi-system workflows</strong> (extract → validate → route → input)</li>
                                    <li>Engineered <strong>error recovery and retry logic</strong> with intelligent fallback handling</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Advanced Features</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Built <strong>batch processing pipelines</strong> for high-volume document automation</li>
                                    <li>Implemented <strong>comprehensive logging and audit trails</strong> for compliance</li>
                                    <li>Created <strong>monitoring dashboards</strong> for processing metrics and error rates</li>
                                    <li>Engineered <strong>graceful degradation</strong> when OCR confidence is low</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Quick Stats Grid */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { label: "Document Types", value: "Multi-Format" },
                            { label: "Vision Processing", value: "OpenCV" },
                            { label: "OCR Engine", value: "Tesseract" },
                            { label: "RPA Coverage", value: "Multi-System" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <p className="text-orange-400 font-bold text-xl md:text-2xl mb-2">{stat.value}</p>
                                <p className="text-sm text-zinc-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.section>

                    {/* Processing Pipeline */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Document Processing Pipeline</h2>
                        <div className="space-y-6 text-zinc-300">
                            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-3xl border border-orange-500/20">
                                <h3 className="text-lg font-medium text-orange-300 mb-4">Stage 1: Image Acquisition & Preprocessing</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>Document uploaded or scanned into processing queue</li>
                                    <li>OpenCV loads image and detects format/resolution</li>
                                    <li>Deskew algorithm corrects rotated documents</li>
                                    <li>Contrast and brightness optimized using CLAHE</li>
                                    <li>Noise reduction applied (bilateral filtering or morphological operations)</li>
                                    <li>Image binarized for optimal text clarity</li>
                                    <li>Preprocessed image cached for subsequent processing stages</li>
                                </ol>
                            </div>

                            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-8 rounded-3xl border border-red-500/20">
                                <h3 className="text-lg font-medium text-red-300 mb-4">Stage 2: OCR & Text Extraction</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>Tesseract 5.x performs optical character recognition</li>
                                    <li>Confidence scoring applied to each character/word</li>
                                    <li>Layout analysis preserves document structure (tables, columns)</li>
                                    <li>Unreliable regions flagged for manual review</li>
                                    <li>Text combined with positional metadata (coordinates on document)</li>
                                </ol>
                            </div>

                            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-8 rounded-3xl border border-pink-500/20">
                                <h3 className="text-lg font-medium text-pink-300 mb-4">Stage 3: Document Classification & Field Extraction</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>Document features extracted (header patterns, keywords, layout)</li>
                                    <li>Document type identified (Invoice, PO, Receipt, Form, etc.)</li>
                                    <li>Appropriate extraction template applied automatically</li>
                                    <li>Key fields located and extracted (amounts, dates, names, addresses)</li>
                                    <li>Values validated against expected formats and ranges</li>
                                    <li>Confidence scores persist with extracted data</li>
                                </ol>
                            </div>

                            <div className="bg-gradient-to-br from-rose-500/10 to-orange-500/10 p-8 rounded-3xl border border-rose-500/20">
                                <h3 className="text-lg font-medium text-rose-300 mb-4">Stage 4: Validation & RPA Execution</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>Data quality checks performed and missing/invalid fields flagged</li>
                                    <li>Workflow rules determine destination system (ERP, accounting, CRM)</li>
                                    <li>Selenium / xlwings bots execute automated data entry</li>
                                    <li>Confirmation screenshots taken for audit trail</li>
                                    <li>Error recovery triggered if automation fails</li>
                                    <li>Results logged with completion status and timestamps</li>
                                </ol>
                            </div>
                        </div>
                    </motion.section>

                    {/* Technical Implementation */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
                    >
                        <h2 className="text-3xl font-semibold mb-8">Technical Implementation</h2>

                        <div className="space-y-8 text-zinc-300">
                            <div>
                                <h3 className="text-lg font-semibold text-orange-300 mb-4">1. Computer Vision Preprocessing</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>OpenCV library:</strong> Image loading, manipulation, and geometric transformations</li>
                                    <li><strong>Deskewing:</strong> Hough transform for line detection and rotation correction</li>
                                    <li><strong>Contrast enhancement:</strong> CLAHE (Contrast Limited Adaptive Histogram Equalization)</li>
                                    <li><strong>Noise reduction:</strong> Bilateral filtering, Gaussian blur, morphological operations</li>
                                    <li><strong>Binarization:</strong> Otsu's method for optimal threshold selection</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-rose-300 mb-4">2. Tesseract OCR Integration</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>pytesseract wrapper:</strong> Python interface to Tesseract 5.x engine</li>
                                    <li><strong>Language packs:</strong> Multi-language support (English, Spanish, French, German, Japanese, etc.)</li>
                                    <li><strong>Confidence scoring:</strong> Character-level confidence metrics for reliability assessment</li>
                                    <li><strong>Layout preservation:</strong> Page Segmentation Mode (PSM) tuning for structured documents</li>
                                    <li><strong>Output formats:</strong> HOCR, TSV, and custom structured formats</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-red-300 mb-4">3. Document Analysis & Field Extraction</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Feature extraction:</strong> Keywords, headers, structure patterns for classification</li>
                                    <li><strong>Template matching:</strong> Regex patterns and positional rules for field location</li>
                                    <li><strong>Fuzzy matching:</strong> Handles OCR errors in field names and values</li>
                                    <li><strong>Format validation:</strong> Currency amounts, dates, phone numbers, addresses</li>
                                    <li><strong>Confidence aggregation:</strong> Combined scores from OCR + field extraction</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-pink-300 mb-4">4. RPA Automation Infrastructure</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Selenium WebDriver:</strong> Browser automation for web-based systems and forms</li>
                                    <li><strong>xlwings:</strong> Excel RPA for spreadsheet data entry and formula execution</li>
                                    <li><strong>Workflow orchestration:</strong> State machine managing multi-step automation sequences</li>
                                    <li><strong>Error handling:</strong> Retry logic, screenshots for debugging, fallback procedures</li>
                                    <li><strong>Audit logging:</strong> Complete trail of all automated actions for compliance</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-orange-300 mb-4">5. Production Deployment & Monitoring</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Batch processing:</strong> Queue management for bulk document processing</li>
                                    <li><strong>Distributed execution:</strong> Multi-threading for parallel document processing</li>
                                    <li><strong>Performance monitoring:</strong> Processing time, success rates, error tracking</li>
                                    <li><strong>Database persistence:</strong> Results, audit trails, and historical data storage</li>
                                    <li><strong>Alerting:</strong> Notifications for critical failures and anomalies</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Technology Stack */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
                    >
                        <h2 className="text-3xl font-semibold mb-8">Technology Stack</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-lg text-orange-300 mb-4 font-semibold">Document Processing (Your Work)</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["OpenCV", "Tesseract", "pytesseract", "Python-pptx", "Pillow", "scikit-image", "NumPy", "Regex", "PIL"].map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-orange-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg text-zinc-300 mb-4 font-semibold">RPA & Integration</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Selenium", "xlwings", "PyAutoGUI", "Python", "PostgreSQL", "Dashboard", "Scheduling"].map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-zinc-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Key Accomplishments */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Key Accomplishments</h2>
                        <div className="space-y-6 text-zinc-300">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-orange-300 mb-3">1. Advanced Image Preprocessing Pipeline</h3>
                                <p>Comprehensive computer vision preprocessing using OpenCV with deskewing, contrast enhancement, noise reduction, and binarization—critical for OCR accuracy on low-quality scans.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-red-300 mb-3">2. Multi-Language OCR Integration</h3>
                                <p>Tesseract 5.x integration with multi-language support, confidence scoring, layout analysis, and intelligent field extraction across diverse document types.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-pink-300 mb-3">3. Intelligent Document Classification</h3>
                                <p>Automatic document type detection and adaptive field extraction templates that handle document variations, validation rules, and quality assurance.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-rose-300 mb-3">4. Multi-System RPA Orchestration</h3>
                                <p>Selenium and xlwings automation for complex workflows across web systems and Excel, with error recovery, audit trails, and human-in-the-loop fallbacks.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-orange-300 mb-3">5. Enterprise-Grade Reliability</h3>
                                <p>Comprehensive logging, monitoring dashboards, batch processing, distributed execution, and alerting systems for production document automation at scale.</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Why This Matters */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Why This Role Was Critical</h2>
                        <div className="space-y-6 text-zinc-300">
                            <p className="text-lg leading-relaxed">
                                The OCR processing engine is the <span className="text-orange-300 font-semibold">foundation of the entire automation platform</span>—garbage in means garbage automation:
                            </p>
                            <ul className="space-y-4 list-disc list-inside">
                                <li><strong className="text-white">Computer Vision Expertise:</strong> You engineered image preprocessing pipelines using OpenCV—non-trivial computer vision work requiring understanding of image processing theory.</li>
                                <li><strong className="text-white">OCR Systems Knowledge:</strong> Deep integration with Tesseract including confidence scoring, multi-language support, and layout analysis—shows expertise in optical character recognition systems.</li>
                                <li><strong className="text-white">Data Quality at Scale:</strong> Confidence scoring, validation rules, error flagging—production systems fail without robust data quality checks.</li>
                                <li><strong className="text-white">Complex Integration:</strong> Successfully bridged OpenCV, Tesseract, Selenium, xlwings, and custom business logic—non-trivial systems integration challenge.</li>
                                <li><strong className="text-white">RPA Automation:</strong> Building intelligent automation across web systems and Excel demonstrates end-to-end process automation capability.</li>
                                <li><strong className="text-white">Enterprise Systems Thinking:</strong> Audit trails, error recovery, monitoring dashboards—shows consideration for production deployment and operational requirements.</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Portfolio Highlights */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Portfolio Highlights for Hiring Managers</h2>
                        <div className="space-y-3 text-zinc-300">
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Engineered advanced image preprocessing using OpenCV (deskewing, contrast enhancement, noise reduction)</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Integrated multi-language Tesseract OCR with confidence scoring and layout analysis</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Built intelligent document classification system with adaptive field extraction templates</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Implemented fuzzy matching and validation for OCR error correction</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Designed multi-system RPA orchestration (Selenium + xlwings) for enterprise automation</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Built error recovery and fallback mechanisms for reliable automation at scale</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Created comprehensive audit trails and logging for compliance and debugging</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Implemented batch processing pipelines for high-volume document automation</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Engineered monitoring dashboards and alerting systems for operational visibility</p>
                            <p className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> Handled complex challenges in unstructured data extraction and process automation</p>
                        </div>
                    </motion.section>

                    {/* Impact Statement */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto pt-16"
                    >
                        <h2 className="text-3xl font-bold mb-8">Project Impact</h2>
                        <p className="text-lg leading-relaxed text-zinc-300 mb-6">
                            Your OCR and RPA platform demonstrates expertise in computer vision, data extraction, process automation, and enterprise systems integration. You transformed unstructured, variable-quality documents into structured, actionable data flowing seamlessly through automated business processes.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
                            <p className="text-base text-zinc-400 italic">
                                <span className="text-orange-300 font-semibold">"</span>I engineered an enterprise document processing and RPA platform that combines computer vision with optical character recognition. The system preprocesses images using OpenCV with intelligent deskewing and contrast enhancement, integrates Tesseract for multi-language OCR with confidence scoring, and intelligently extracts structured data from variable document layouts. I implemented Selenium and xlwings automation for cross-system workflows, built robust error recovery with audit trails, and created comprehensive monitoring for production operations. The result is a fully automated pipeline that processes complex documents at scale with minimal human intervention.<span className="text-orange-300 font-semibold">"</span>
                            </p>
                        </div>
                    </motion.section>
                </div>
            </article>
        </main>
    );
}
