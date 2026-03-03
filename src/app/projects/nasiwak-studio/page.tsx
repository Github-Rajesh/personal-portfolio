"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function NasiwakCaseStudy() {
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white/90 selection:bg-emerald-500/30 font-sans pb-32">
            {/* Ambient Background */}
            <div className="fixed top-0 inset-x-0 h-screen pointer-events-none opacity-50 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-600/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 p-6 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-emerald-400 transition-colors">
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
                        <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-6">Case Study</p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Nasiwak Studio</h1>
                        <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                            AI-Powered Blueprint Analysis Platform
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
                            A full-stack web application that leverages computer vision and machine learning to automatically analyze architectural blueprints. The system identifies and labels various elements including areas, electrical components, structural features, and spatial measurements.
                        </p>
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
                            { label: "Multi-Model System", value: "2 Major ML Pipelines" },
                            { label: "Detection Categories", value: "30+ Component Types" },
                            { label: "Database Operations", value: "Full CRUD" },
                            { label: "Real-time Interface", value: "Canvas Annotation" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <p className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">{stat.value}</p>
                                <p className="text-sm text-zinc-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.section>

                    {/* My Role & Contributions */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-12 border-b border-white/10 pb-4">My Role & Contributions</h2>

                        <div className="space-y-16">
                            <div>
                                <h3 className="text-2xl font-medium text-emerald-300 mb-6">Core Backend Development</h3>
                                <ul className="space-y-4 text-zinc-300 list-disc list-inside leading-relaxed marker:text-emerald-500">
                                    <li><strong className="text-white font-medium">Heimenzu Module (Floor Plan Analysis):</strong> Developed the complete floor plan detection system capable of identifying room areas with automatic square meter calculations.</li>
                                    <li>Detected objects including doors, toilets, sinks, bathtubs, sliding doors, stairs, and outer walls with perimeter measurements.</li>
                                    <li>Integrated three separate YOLOv5 models trained for different detection categories.</li>
                                    <li><strong className="text-white font-medium">Frontend Components:</strong> Built the annotation and visualization interface for blueprint markup and predictions.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-medium text-blue-300 mb-6">System Integration & Architecture</h3>
                                <ul className="space-y-4 text-zinc-300 list-disc list-inside leading-relaxed marker:text-blue-500">
                                    <li><strong className="text-white font-medium">Multi-Model Integration:</strong> Successfully integrated Heimenzu and Denkizu ML systems with a robust model-switching mechanism.</li>
                                    <li>Managed prediction caching, session state across contexts, and coordinated API endpoints.</li>
                                    <li><strong className="text-white font-medium">API Development:</strong> Designed RESTful endpoints for image processing, data persistence, and prediction management.</li>
                                    <li><strong className="text-white font-medium">Data Management:</strong> Built persistence layers, multi-user session storage, and core frontend/backend real-time sync.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-medium text-purple-300 mb-6">Production Support & Optimization</h3>
                                <ul className="space-y-4 text-zinc-300 list-disc list-inside leading-relaxed marker:text-purple-500">
                                    <li>Identified and resolved complex integration conflicts between the independent ML modules.</li>
                                    <li>Debugged data flow issues in caching, state management, and API communications.</li>
                                    <li>Optimized prediction filtering thresholds and data transformation pipelines for speed.</li>
                                </ul>
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
                        <h2 className="text-3xl font-semibold mb-8">Technical Implementation Details</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl text-zinc-400 mb-4 font-mono text-sm uppercase tracking-wider">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Python", "FastAPI", "SQLite", "React (JSX)", "Konva Canvas", "YOLOv5", "OpenCV", "REST API"].map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-emerald-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl text-zinc-400 mb-4 font-mono text-sm uppercase tracking-wider">Key Features</h3>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex gap-3"><span className="text-emerald-500">✓</span> Bounding box canvas creation/editing</li>
                                    <li className="flex gap-3"><span className="text-emerald-500">✓</span> Pixel-to-meter automatic calibration</li>
                                    <li className="flex gap-3"><span className="text-emerald-500">✓</span> Multi-model toggle switching</li>
                                    <li className="flex gap-3"><span className="text-emerald-500">✓</span> Batch CSV export of all predictions</li>
                                    <li className="flex gap-3"><span className="text-emerald-500">✓</span> Cross-image prediction history tracking</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Challenges Solved */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Technical Challenges Solved</h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-red-500/10 to-transparent p-8 rounded-3xl border border-red-500/20">
                                <h3 className="text-xl font-medium text-white mb-3">Model Context Consistency</h3>
                                <p className="text-zinc-400 leading-relaxed">Ensured predictions from different models don't interfere with each other during live session switching between floor plan and electrical modes.</p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-8 rounded-3xl border border-orange-500/20">
                                <h3 className="text-xl font-medium text-white mb-3">Coordinate System Mapping</h3>
                                <p className="text-zinc-400 leading-relaxed">Engineered robust pixel-to-world-coordinates conversion logic to allow for accurate square-meter and perimeter measurements dynamically.</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Impact Statement */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-2xl mx-auto pt-16"
                    >
                        <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
                        <p className="text-xl leading-relaxed text-zinc-400">
                            This system significantly reduces manual blueprint analysis time by automating detection of architectural and electrical components, enabling faster project assessment and rigorous layout documentation.
                        </p>
                    </motion.section>
                </div>
            </article>
        </main>
    );
}
