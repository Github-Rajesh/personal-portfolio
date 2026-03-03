"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function NasiwakATSCaseStudy() {
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white/90 selection:bg-blue-500/30 font-sans pb-32">
            {/* Ambient Background */}
            <div className="fixed top-0 inset-x-0 h-screen pointer-events-none opacity-50 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 p-6 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
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
                        <p className="text-blue-400 font-mono tracking-widest text-sm uppercase mb-6">Case Study</p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Nasiwak-ATS</h1>
                        <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                            AI-Powered Resume Matching & Candidate Ranking System
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
                            An intelligent web application designed to help HR professionals and recruiters efficiently evaluate hundreds of candidates by automatically analyzing resumes, extracting critical information, and intelligently ranking them against job requirements.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-300 mt-6">
                            <span className="text-blue-300 font-semibold">Key Innovation:</span> Multi-layered NLP-powered matching system combining traditional keyword matching, semantic similarity analysis, and optional AI-powered scoring—enabling data-driven hiring decisions at scale.
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
                            You architected and implemented the <span className="text-blue-300 font-semibold">NLP Resume Parsing &amp; Intelligent Matching Engine</span>—the core intelligence system that powers candidate evaluation. This encompasses multi-format document processing, semantic analysis, AI integration, and production-grade ranking algorithms.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-blue-300 mb-6">NLP Resume Matching System (Primary Contribution - 100%)</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Advanced Resume Parsing</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Implemented <strong>multi-format text extraction</strong> (PDF, DOCX, DOC, TXT) with intelligent document structure preservation</li>
                                    <li>Built <strong>robust contact information extraction</strong> including emails, phone numbers, and social profiles with regex optimization</li>
                                    <li>Engineered <strong>skill and experience recognition</strong> using domain-specific NLP patterns and entity extraction</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Intelligent Matching Engine</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Designed <strong>multi-factor scoring system</strong> combining keyword relevance, skills overlap, and experience alignment</li>
                                    <li>Implemented <strong>spaCy NLP pipeline</strong> for entity recognition, token similarity, and semantic analysis</li>
                                    <li>Built <strong>sentence transformer integration</strong> for deep semantic matching between resumes and job descriptions</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">AI-Powered Semantic Analysis</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Integrated <strong>OpenAI API</strong> for contextual resume analysis and intelligent scoring explanations</li>
                                    <li>Implemented <strong>prompt engineering</strong> for consistent JSON-formatted outputs with candidate insights</li>
                                    <li>Built <strong>score caching and persistence</strong> ensuring consistency when reprocessing previously analyzed resumes</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Data Quality & Deduplication</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Engineered <strong>duplicate detection system</strong> using content similarity, metadata matching, and text comparison algorithms</li>
                                    <li>Implemented <strong>intelligent deduplication</strong> that preserves highest-scoring candidates with complete information</li>
                                    <li>Built <strong>configurable similarity thresholds</strong> (85% default) for flexible duplicate handling across datasets</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Export & Reporting Infrastructure</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Created <strong>CSV export functionality</strong> with comprehensive candidate data, scores, and AI analysis</li>
                                    <li>Built <strong>bulk resume download</strong> as organized ZIP with intelligent file naming conventions</li>
                                    <li>Implemented <strong>detailed reporting</strong> including ranking, contact info, skills, strengths, and recommendations</li>
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
                            { label: "Document Formats", value: "5+ Types" },
                            { label: "Scoring Factors", value: "Multi-Layer" },
                            { label: "Duplicate Detection", value: "Smart ML" },
                            { label: "Export Types", value: "CSV + ZIP" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <p className="text-blue-400 font-bold text-xl md:text-2xl mb-2">{stat.value}</p>
                                <p className="text-sm text-zinc-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.section>

                    {/* Matching Algorithm */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Multi-Layered Matching Algorithm</h2>
                        <div className="space-y-6 text-zinc-300">
                            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-8 rounded-3xl border border-blue-500/20">
                                <h3 className="text-lg font-medium text-blue-300 mb-4">Resume Processing Pipeline</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>User uploads resume file (PDF, DOCX, DOC, or TXT)</li>
                                    <li>System detects file format and applies appropriate text extraction</li>
                                    <li>Text is cleaned, tokenized, and preprocessed for analysis</li>
                                    <li>Named Entity Recognition (NER) extracts skills, companies, locations, education</li>
                                    <li>Contact information mined using optimized regex patterns</li>
                                    <li>Data stored in database with metadata for tracking and deduplication</li>
                                </ol>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-3xl border border-indigo-500/20">
                                <h3 className="text-lg font-medium text-blue-300 mb-4">Candidate Ranking &amp; Scoring</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>Job description parsed into required skills, experience, and qualifications</li>
                                    <li><strong>Layer 1 - Keyword Matching:</strong> Direct skill overlap scoring</li>
                                    <li><strong>Layer 2 - Experience Matching:</strong> Years in relevant roles vs. requirements</li>
                                    <li><strong>Layer 3 - Semantic Similarity:</strong> sentence-transformers analyze context and intent</li>
                                    <li><strong>Layer 4 - AI Analysis (Optional):</strong> OpenAI provides contextual insights and scoring explanation</li>
                                    <li>Weighted composite score generated with configurable thresholds</li>
                                    <li>Candidates ranked and duplicates intelligently removed</li>
                                    <li>Results returned with detailed scoring breakdown</li>
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
                                <h3 className="text-lg font-semibold text-blue-300 mb-4">1. Multi-Format Document Extraction</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>PDF parsing:</strong> PyPDF with layout preservation for accurate text extraction</li>
                                    <li><strong>DOCX/DOC support:</strong> python-docx library with element-level parsing</li>
                                    <li><strong>Text files:</strong> Direct processing with encoding detection</li>
                                    <li><strong>Fallback mechanisms:</strong> Graceful handling of corrupted or unusual formats</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-indigo-300 mb-4">2. NLP & Entity Recognition</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>spaCy pipeline:</strong> en_core_web_sm model for NER, tokenization, and dependency parsing</li>
                                    <li><strong>Custom entity patterns:</strong> Domain-specific extraction for skills, certifications, experience</li>
                                    <li><strong>Lemmatization &amp; normalization:</strong> Standardize variations (e.g., &quot;Python&quot; vs &quot;python&quot;, &quot;React.js&quot; vs &quot;ReactJS&quot;)</li>
                                    <li><strong>Skill database:</strong> Curated list of +500 technical and soft skills for matching</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-purple-300 mb-4">3. Semantic Similarity & Scoring</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>sentence-transformers:</strong> Converts resume sections and JD into embeddings for semantic comparison</li>
                                    <li><strong>Cosine similarity:</strong> Measures relevance between candidate background and job requirements</li>
                                    <li><strong>Weighted scoring:</strong> Different weights for education (15%), skills (40%), experience (35%), culture fit (10%)</li>
                                    <li><strong>Configurable thresholds:</strong> Set minimum scores and filtering criteria</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-4">4. Duplicate Detection & Deduplication</h3>
                                <p className="mb-4 text-sm">Multi-criteria approach: Content similarity (Levenshtein distance), Metadata matching (email/phone), Skill overlap analysis</p>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Text similarity:</strong> Compare resume content using difflib and fuzzy matching</li>
                                    <li><strong>Metadata matching:</strong> Identify duplicates via repeated emails or phone numbers</li>
                                    <li><strong>Skills & experience overlap:</strong> Flag candidates with near-identical qualifications</li>
                                    <li><strong>Intelligent selection:</strong> Keep highest-scoring or most recent submission</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-green-300 mb-4">5. AI Integration & Export</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>OpenAI API integration:</strong> gpt-4o-mini for semantic analysis and scoring rationale</li>
                                    <li><strong>CSV export:</strong> Comprehensive data with ranking, scores, AI analysis, and recommendations</li>
                                    <li><strong>Bulk ZIP download:</strong> All resumes with intelligent naming (name_score_rank format)</li>
                                    <li><strong>Score persistence:</strong> Caching system preserves scores when reprocessing</li>
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
                                <h3 className="text-lg text-blue-300 mb-4 font-semibold">NLP & Matching (Your Work)</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["FastAPI", "spaCy", "sentence-transformers", "OpenAI API", "PyPDF", "python-docx", "scikit-learn", "nltk", "difflib"].map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg text-zinc-300 mb-4 font-semibold">Supporting Infrastructure</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Flask", "PostgreSQL", "SQLite", "React", "Tailwind CSS", "Docker", "Render"].map((tech, i) => (
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
                                <h3 className="text-lg font-semibold text-blue-300 mb-3">1. Multi-Format Document Processing</h3>
                                <p>Robust extraction from PDF, DOCX, DOC, and TXT with intelligent text preprocessing, encoding detection, and structure preservation.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-indigo-300 mb-3">2. Advanced NLP Matching Engine</h3>
                                <p>Multi-layered scoring combining keyword matching, semantic similarity, and AI analysis for intelligent candidate ranking.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-300 mb-3">3. Smart Duplicate Detection</h3>
                                <p>Multi-criteria deduplication using content similarity, metadata matching, and skills analysis with intelligent preservation logic.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-3">4. Score Persistence System</h3>
                                <p>Intelligent caching that preserves AI analysis and scores when reprocessing previously analyzed resumes, ensuring consistency.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-green-300 mb-3">5. Comprehensive Export Capabilities</h3>
                                <p>CSV export with detailed candidate data and ZIP download with intelligent naming for seamless HR workflow integration.</p>
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
                                The NLP matching engine is the <span className="text-blue-300 font-semibold">core value proposition</span> of this system—without accurate matching, the entire application is useless:
                            </p>
                            <ul className="space-y-4 list-disc list-inside">
                                <li><strong className="text-white">Data Processing at Scale:</strong> You engineered systems to parse and analyze hundreds of resumes reliably—a non-trivial data engineering challenge.</li>
                                <li><strong className="text-white">Advanced NLP Pipeline:</strong> spaCy integration, entity recognition, semantic matching—showing deep NLP/ML expertise beyond simple keyword search.</li>
                                <li><strong className="text-white">Smart Deduplication Logic:</strong> Duplicate detection requires ML algorithms and heuristics—critical for data quality in production systems.</li>
                                <li><strong className="text-white">AI Integration:</strong> Successfully integrated OpenAI API with prompt engineering for contextual analysis and insights.</li>
                                <li><strong className="text-white">Data Quality Focus:</strong> Score persistence, caching strategies, and error handling demonstrate production-grade thinking.</li>
                                <li><strong className="text-white">Export Infrastructure:</strong> Building CSV and ZIP export pipelines shows end-to-end product thinking beyond just algorithms.</li>
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
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Built end-to-end NLP-powered resume analysis and matching system</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Implemented multi-format document parsing (PDF, DOCX, DOC, TXT)</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Engineered spaCy NLP pipeline with entity recognition and semantic matching</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Created sentence-transformer embeddings for semantic similarity analysis</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Built multi-layered scoring system with configurable weights and thresholds</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Implemented smart duplicate detection using content, metadata, and skills analysis</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Designed score persistence and caching for consistent candidate ranking</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Integrated OpenAI API with prompt engineering for contextual analysis</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Built bulk export infrastructure (CSV and ZIP) for seamless HR integration</p>
                            <p className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Handled complex data quality challenges at scale</p>
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
                            Your NLP matching engine demonstrates expertise in intelligent document processing, semantic analysis, and data-driven ranking systems. You engineered the entire intelligence layer that transforms unstructured resume data into actionable hiring insights.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
                            <p className="text-base text-zinc-400 italic">
                                <span className="text-blue-300 font-semibold">&quot;</span>I engineered an intelligent resume matching system that combines multi-format document parsing with advanced NLP. The system extracts structured data from resumes, applies spaCy entity recognition, generates semantic embeddings for contextual matching, and uses AI for deeper analysis. I implemented smart deduplication to ensure data quality, built configurable scoring with multiple matching layers, and created comprehensive export pipelines. The result is a production-grade system that reduces hiring team workload while improving candidate evaluation accuracy.<span className="text-blue-300 font-semibold">&quot;</span>
                            </p>
                        </div>
                    </motion.section>
                </div>
            </article>
        </main>
    );
}
