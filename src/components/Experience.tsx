"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Senior Machine Learning Engineer",
        company: "Nasiwak Services",
        period: "Oct 2025 - Present",
        description: "Leading machine learning engineering initiatives, driving the architecture and implementation of advanced machine learning solutions.",
        skills: ["Machine Learning", "Python", "Engineering"]
    },
    {
        role: "Machine Learning Engineer",
        company: "Nasiwak Services",
        period: "Jul 2024 - Oct 2025",
        description: "Developed and deployed scalable machine learning models and data pipelines for production systems.",
        skills: ["Machine Learning", "Python", "Data Pipelines"]
    },
    {
        role: "Data Scientist (Intern)",
        company: "Diggibyte Technologies",
        period: "Feb 2024 - May 2024",
        description: "Built Generative AI and LLM solutions using PySpark and Databricks. Developed deep learning models for object detection and tracking. Created a RAG-based chatbot to reduce manufacturing risks and built a Norwegian article summarization model. Performed extensive EDA and data profiling on Microsoft Azure.",
        skills: ["PySpark", "Databricks", "LLMs", "Generative AI", "Object Detection", "Azure"]
    },
    {
        role: "Machine Learning Engineer (Freelance)",
        company: "Freelance",
        period: "Jul 2023 - Feb 2024",
        description: "Analyzed medical domain data to predict protein abundance. Engineered a fine-tuned polynomial regression model, increasing efficiency from 67% to 92%. Conducted extensive data preprocessing, cleaning, and visual analysis for model performance evaluation.",
        skills: ["Polynomial Regression", "Data Cleaning", "Data Visualization", "Medical Data"]
    },
    {
        role: "Data Scientist (Intern)",
        company: "Soothsayer Analytics",
        period: "Feb 2023 - Apr 2023",
        description: "Applied statistical analysis and data science techniques to extract business insights, leveraging strong communication to report analytical findings.",
        skills: ["Statistical Analysis", "Data Science", "Written Communication"]
    },
    {
        role: "Data Scientist Trainee (Intern)",
        company: "TuringMinds.Ai",
        period: "Dec 2021 - Jan 2023",
        description: "Developed and implemented a deep learning segmentation model to classify images. Gained hands-on experience working on projects in Medical Diagnosis and Flight Delay Prediction.",
        skills: ["Deep Learning", "Image Segmentation", "Python", "Data Analysis"]
    }
];

export default function Experience() {
    return (
        <section className="py-24 bg-neutral-950 text-white" id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Experience</h2>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line and dot for mobile */}
                            <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-neutral-800">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>

                            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                                {/* Period for Desktop */}
                                <div className="hidden md:block text-neutral-400 font-mono text-sm tracking-widest uppercase mt-1">
                                    {exp.period}
                                </div>

                                {/* Content */}
                                <div className="md:col-span-3 group relative">
                                    {/* Timeline indicator for Desktop */}
                                    <div className="hidden md:block absolute -left-12 top-2 w-3 h-3 rounded-full bg-neutral-800 group-hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    <div className="hidden md:block absolute -left-[43px] top-6 bottom-[-3rem] w-px bg-neutral-800 group-last:bg-transparent" />

                                    <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-blue-400 transition-colors">
                                        {exp.role}
                                    </h3>

                                    {/* Period for Mobile */}
                                    <div className="md:hidden text-neutral-400 font-mono text-sm tracking-widest uppercase mt-2 mb-1">
                                        {exp.period}
                                    </div>

                                    <div className="text-lg text-emerald-400 mb-4">{exp.company}</div>
                                    <p className="text-neutral-400 leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, sIndex) => (
                                            <span
                                                key={sIndex}
                                                className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-medium text-neutral-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
