"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Nasiwak Studio",
            tech: "Python • FastAPI • YOLOv5 • React • SQLite • Multi-Model Integration",
            desc: "AI-powered blueprint analysis platform integrating Heimenzu (floor plan) and Denkizu (electrical) modules. Features canvas annotation, automatic area calculation, real-time sync, and CSV export for 30+ architectural components.",
            link: "/projects/nasiwak-studio",
            isInternal: true,
            featured: true,
            color: "from-emerald-500/20 to-teal-500/20",
            hoverColor: "group-hover:from-emerald-500/40 group-hover:to-teal-500/40"
        },
        {
            title: "Custom Chatbot",
            tech: "Django • FastAPI • React • PostgreSQL • OpenAI • RakutenAI • Chroma",
            desc: "Enterprise knowledge base system with multi-tenant architecture, dual-LLM integration, and semantic search. Supports 5-level role-based access control and multi-language support.",
            link: "/projects/language-learning-ai",
            isInternal: true,
            featured: true,
            color: "from-purple-500/20 to-fuchsia-500/20",
            hoverColor: "group-hover:from-purple-500/40 group-hover:to-fuchsia-500/40"
        },
        {
            title: "Nasiwak-ATS",
            tech: "Python • FastAPI • spaCy • sentence-transformers • PostgreSQL • React",
            desc: "Intelligent resume matching platform with advanced NLP scoring, AI-powered semantic analysis, duplicate detection, and bulk CSV export. Processes multi-format resumes with smart parsing, contact extraction, and score persistence for consistent candidate ranking.",
            link: "/projects/nasiwak-ats",
            isInternal: true,
            featured: true,
            color: "from-blue-500/20 to-indigo-500/20",
            hoverColor: "group-hover:from-blue-500/40 group-hover:to-indigo-500/40"
        },
        {
            title: "OCR RPA Suite",
            tech: "OpenCV • Tesseract • Python-pptx • Selenium • xlwings • Automation",
            desc: "Enterprise-grade document processing and workflow automation platform. Intelligent OCR for multi-format documents, intelligent data extraction with validation, cross-system RPA orchestration, and enterprise integration patterns for seamless data pipeline automation.",
            link: "/projects/ocr-rpa-suite",
            isInternal: true,
            featured: true,
            color: "from-orange-500/20 to-rose-500/20",
            hoverColor: "group-hover:from-orange-500/40 group-hover:to-rose-500/40"
        }
    ];

    return (
        <section className="relative z-50 bg-[#0a0a0a] flex flex-col items-center justify-center py-32 px-4 md:px-8 pointer-events-auto overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

            <div className="max-w-7xl w-full relative z-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-16 px-4 tracking-tight">
                        Projects.
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-50">
                    {projects.map((p, i) => {
                        const CardContent = () => (
                            <>
                                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} ${p.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]`} />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <p className="text-zinc-400 text-xs md:text-sm tracking-widest uppercase mb-4 font-mono font-semibold">{p.tech}</p>
                                        <h4 className={`font-bold text-white mb-6 tracking-tight ${p.featured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>{p.title}</h4>
                                        <p className={`text-zinc-300 leading-relaxed ${p.featured ? 'text-xl max-w-2xl' : 'text-lg max-w-md'}`}>{p.desc}</p>
                                    </div>

                                    <div className="mt-12 flex justify-start">
                                        <div className="inline-flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300 font-medium cursor-pointer overflow-hidden relative">
                                            <span className="relative z-10">View Case Study</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className={`group relative z-50 p-8 md:p-14 rounded-[2rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden shadow-2xl ${p.featured ? 'md:col-span-2' : ''}`}
                            >
                                {p.isInternal ? (
                                    <Link href={p.link} className="absolute inset-0 z-50">
                                        <span className="sr-only">View Case Study for {p.title}</span>
                                    </Link>
                                ) : (
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-50">
                                        <span className="sr-only">View {p.title} on GitHub</span>
                                    </a>
                                )}
                                <CardContent />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Footer Links */}
            <div className="mt-32 w-full max-w-7xl border-t border-white/10 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between text-zinc-500">
                <p>© {new Date().getFullYear()} Rajesh S H.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="https://github.com/Github-Rajesh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/shrajesh-cmd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </section >
    );
}
