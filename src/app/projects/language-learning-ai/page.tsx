"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function LanguageLearningAICaseStudy() {
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white/90 selection:bg-purple-500/30 font-sans pb-32">
            {/* Ambient Background */}
            <div className="fixed top-0 inset-x-0 h-screen pointer-events-none opacity-50 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 p-6 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors">
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
                        <p className="text-purple-400 font-mono tracking-widest text-sm uppercase mb-6">Case Study</p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Custom Chatbot</h1>
                        <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                            Enterprise Knowledge Base Chat System
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
                            A sophisticated multi-tenant enterprise chatbot application that serves as an intelligent knowledge base query system. Organizations can upload internal documents (PDFs, Excel, Word docs, and screenshots) and employees ask natural language questions to retrieve context-specific answers with visual references.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-300 mt-6">
                            <span className="text-purple-300 font-semibold">Key Innovation:</span> Dual-model LLM architecture combining OpenAI&apos;s GPT-4o-mini for reasoning with RakutenAI 2.0 (Ollama) for natural Japanese language refinement—making it particularly valuable for Japanese-speaking organizations.
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
                            You architected and implemented the <span className="text-purple-300 font-semibold">FastAPI RAG Service &amp; LLM Integration</span> - the core intelligence engine of the system. This is the most technically complex component that powers the entire chatbot&apos;s ability to understand questions and generate accurate, contextually-aware responses.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-purple-300 mb-6">FastAPI RAG Service (Primary Contribution - 100%)</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Document Processing Pipeline</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Implemented <strong>multi-format text extraction</strong> (PDF, DOCX, XLSX) with intelligent parsing</li>
                                    <li>Built <strong>intelligent chunking system</strong> that respects document structure and semantic boundaries</li>
                                    <li>Engineered <strong>screenshot detection &amp; management</strong> from folder hierarchies</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Vectorization &amp; Semantic Search</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Implemented <strong>OpenAI embedding generation</strong> with fallback to deterministic mock embeddings</li>
                                    <li>Designed <strong>Chroma vector database integration</strong> for semantic similarity search</li>
                                    <li>Built <strong>hybrid search capabilities</strong> combining semantic and BM25 matching</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Large Language Model Integration</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Engineered <strong>dual-model LLM pipeline</strong>: OpenAI GPT-4o-mini + RakutenAI 2.0 (Ollama)</li>
                                    <li>Implemented <strong>GPT-4o-mini integration</strong> with context-aware prompt engineering</li>
                                    <li>Built <strong>RakutenAI 2.0 refinement layer</strong> for natural Japanese language output</li>
                                    <li>Added <strong>conversation memory management</strong> for multi-turn context-aware responses</li>
                                    <li>Implemented <strong>graceful fallback mechanisms</strong> when APIs are unavailable</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">API Development</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Created <strong>FastAPI endpoints</strong> for document indexing (<code className="text-purple-400">/download</code>, <code className="text-purple-400">/index</code>)</li>
                                    <li>Built <strong>chat API</strong> with streaming responses for real-time user experience</li>
                                    <li>Implemented <strong>session management</strong> and conversation tracking</li>
                                    <li>Added <strong>internal service authentication</strong> for secure Django↔FastAPI communication</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Advanced Features</h4>
                                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                                    <li>Token counting and cost optimization for API usage</li>
                                    <li>Cache layer for LLM responses (TTL-based)</li>
                                    <li>Document-only mode (rejects queries outside KB scope)</li>
                                    <li>Metadata tracking for audit and debugging</li>
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
                            { label: "Your Focus", value: "FastAPI RAG" },
                            { label: "Core Components", value: "5 Layers" },
                            { label: "LLM Models", value: "Dual Integration" },
                            { label: "Embedding Dims", value: "1536-D Vectors" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <p className="text-purple-400 font-bold text-xl md:text-2xl mb-2">{stat.value}</p>
                                <p className="text-sm text-zinc-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.section>

                    {/* RAG Pipeline Workflow */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">RAG Pipeline Workflow</h2>
                        <div className="space-y-6 text-zinc-300">
                            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-3xl border border-purple-500/20">
                                <h3 className="text-lg font-medium text-purple-300 mb-4">Document Indexing Process</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>Users upload documents (PDF, DOCX, XLSX, PNG, JPG) to S3</li>
                                    <li>Django marks files as &quot;PROCESSING&quot; → &quot;INDEXING&quot;</li>
                                    <li>FastAPI extracts text (PyPDF, python-docx, openpyxl)</li>
                                    <li>Intelligent chunking respecting document structure</li>
                                    <li>Each chunk receives semantic embeddings via OpenAI API</li>
                                    <li>Chroma vector database stores embeddings with metadata</li>
                                    <li>Screenshots detected and indexed separately for retrieval</li>
                                </ol>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-3xl border border-blue-500/20">
                                <h3 className="text-lg font-medium text-blue-300 mb-4">Query Resolution Pipeline</h3>
                                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                                    <li>User asks question in chat (English or Japanese)</li>
                                    <li>Query converted to embedding vector (1536-dim)</li>
                                    <li>Chroma performs semantic similarity search across KB</li>
                                    <li>Top-K relevant chunks retrieved with relevance scores</li>
                                    <li>Chunks packaged with conversation history</li>
                                    <li>Sent to <strong>GPT-4o-mini</strong> for context-aware response generation</li>
                                    <li>Response optionally refined by <strong>RakutenAI 2.0</strong> for naturalness</li>
                                    <li>Screenshots referenced in answer auto-fetched with presigned URLs</li>
                                    <li>Full response streamed back to frontend in real-time</li>
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
                                <h3 className="text-lg font-semibold text-purple-300 mb-4">1. Document Processing Pipeline</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Multi-format extraction:</strong> PyPDF, python-docx, openpyxl for PDF, Word, Excel</li>
                                    <li><strong>Intelligent chunking:</strong> Respects document structure, maintains semantic boundaries</li>
                                    <li><strong>Metadata tracking:</strong> File sources, chunk indices, relevance scores</li>
                                    <li><strong>Screenshot detection:</strong> Automatically identifies and manages visual references</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-blue-300 mb-4">2. Vectorization &amp; Semantic Search</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>OpenAI embeddings:</strong> Converts text to 1536-dimensional semantic vectors</li>
                                    <li><strong>Chroma vector database:</strong> Stores and searches embeddings for similarity matching</li>
                                    <li><strong>Fallback embeddings:</strong> Deterministic mock embeddings when OpenAI API unavailable</li>
                                    <li><strong>Hybrid search:</strong> Combines semantic similarity with BM25 keyword matching</li>
                                    <li><strong>Top-K retrieval:</strong> Ranks and filters results by relevance score</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-4">3. Large Language Model Integration</h3>
                                <p className="mb-4 text-sm">Flow: User Query → Embeddings → Vector DB Search → OpenAI GPT-4o-mini → RakutenAI 2.0 Refinement → Response Streaming</p>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Prompt engineering</strong> for consistent JSON/formatted outputs</li>
                                    <li><strong>Token counting</strong> and context window management</li>
                                    <li><strong>Conversation history</strong> for multi-turn context awareness</li>
                                    <li><strong>Response caching</strong> with TTL (time-to-live)</li>
                                    <li><strong>Automatic fallback</strong> to template-based responses when APIs unavailable</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-4">4. FastAPI Service Architecture</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Async endpoints</strong> for non-blocking I/O</li>
                                    <li><strong>Streaming responses</strong> for real-time chat</li>
                                    <li><strong>Session management</strong> with Django integration</li>
                                    <li><strong>Internal authentication</strong> via X-INTERNAL-KEY headers</li>
                                    <li><strong>Error handling</strong> with detailed logging</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-semibold text-yellow-300 mb-4">5. Advanced Features</h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li><strong>Japanese Language Refinement:</strong> RakutenAI 2.0 ensures business-appropriate, natural Japanese output</li>
                                    <li><strong>Conversation Memory:</strong> Maintains context across multiple turns</li>
                                    <li><strong>Document-Only Mode:</strong> Option to reject answers not found in KB</li>
                                    <li><strong>Cost Optimization:</strong> Token counting, response caching, smart fallbacks</li>
                                    <li><strong>Monitoring:</strong> Logging of all critical operations for debugging</li>
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
                                <h3 className="text-lg text-purple-300 mb-4 font-semibold">AI/ML &amp; RAG (Your Work)</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["FastAPI", "OpenAI API", "RakutenAI 2.0", "Chroma", "sentence-transformers", "LangChain", "PyPDF", "python-docx", "openpyxl"].map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-purple-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg text-zinc-300 mb-4 font-semibold">Supporting Infrastructure</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Django", "PostgreSQL", "boto3 + S3", "Docker", "React 19", "Vite", "Tailwind CSS"].map((tech, i) => (
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
                                <h3 className="text-lg font-semibold text-purple-300 mb-3">1. End-to-End RAG Pipeline</h3>
                                <p>Complete semantic search system from document ingestion to answer generation. Multi-format extraction with intelligent text parsing and automatic screenshot detection.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-blue-300 mb-3">2. Dual-Model LLM Architecture</h3>
                                <p>OpenAI GPT-4o-mini for reasoning, RakutenAI 2.0 (Ollama) for Japanese refinement. Seamless fallback when unavailable with cost-optimized token usage.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-3">3. Semantic Search Engine</h3>
                                <p>OpenAI 1536-dimensional embeddings with Chroma vector DB. Hybrid search combining semantic + BM25 with deterministic fallback embeddings.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-3">4. Conversation Intelligence</h3>
                                <p>Multi-turn context awareness with conversation history, token counting, prompt engineering for consistent outputs, and document-only mode.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold text-yellow-300 mb-3">5. Production-Grade Robustness</h3>
                                <p>Graceful error handling with fallback mechanisms, streaming responses for real-time UX, session management, and comprehensive logging.</p>
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
                                The FastAPI RAG service is the <span className="text-purple-300 font-semibold">core intellectual property</span> and most technically complex component of this system:
                            </p>
                            <ul className="space-y-4 list-disc list-inside">
                                <li><strong className="text-white">Complex ML/AI Pipeline:</strong> You engineered the entire semantic search and LLM integration—the hardest part to build correctly. Most projects fail at this layer.</li>
                                <li><strong className="text-white">Dual-Model Architecture:</strong> Combining OpenAI GPT-4o-mini with local RakutenAI 2.0 shows sophisticated understanding of multi-model orchestration and cost optimization.</li>
                                <li><strong className="text-white">Production-Grade Robustness:</strong> Implemented graceful fallbacks, error handling, and mock embeddings—production systems fail without this.</li>
                                <li><strong className="text-white">Advanced NLP Concepts:</strong> Deep understanding of semantic embeddings, RAG architecture, conversation memory, prompt engineering, and token optimization.</li>
                                <li><strong className="text-white">Integration Complexity:</strong> Successfully bridged OpenAI API, Ollama local models, Chroma vector DB, document extractors, and Django backend.</li>
                                <li><strong className="text-white">Real-World Problem Solving:</strong> Multi-format document extraction, screenshot detection, semantic chunking, and Japanese language refinement.</li>
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
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Built end-to-end RAG pipeline with semantic search and AI reasoning</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Engineered dual-model LLM architecture (OpenAI + local Ollama RakutenAI 2.0)</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Implemented multi-format document processing (PDF, Word, Excel, Images)</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Created semantic search at scale using OpenAI embeddings and Chroma</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Built conversation memory system for context-aware multi-turn responses</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Integrated OpenAI API with prompt engineering and token optimization</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Designed screenshot detection &amp; management from folder hierarchies</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Implemented graceful fallbacks for production robustness</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Built FastAPI service with streaming responses and session management</p>
                            <p className="flex gap-3"><span className="text-purple-500 font-bold">✓</span> Handled complex NLP challenges including Japanese language refinement</p>
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
                            Your FastAPI RAG service demonstrates expertise in modern AI/ML architecture, LLM integration, semantic search, and production engineering. You're not implementing boilerplate auth or UI—you're building the core AI engine that powers every query.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
                            <p className="text-base text-zinc-400 italic">
                                <span className="text-purple-300 font-semibold">&quot;</span>I engineered a production-grade RAG system that combines OpenAI&apos;s GPT-4o-mini with local language models (RakutenAI 2.0) for Japanese refinement. The system extracts text from multiple document formats, creates semantic embeddings, performs vector similarity search, and generates context-aware responses with conversation memory. I implemented graceful fallbacks, caching, and token optimization to ensure reliability and cost-efficiency.<span className="text-purple-300 font-semibold">&quot;</span>
                            </p>
                        </div>
                    </motion.section>
                </div>
            </article>
        </main>
    );
}
