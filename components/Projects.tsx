"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Customer Churn Prediction",
        category: "Machine Learning",
        description: "Architected customer financial behavior models using Python, PySpark, and GCP Vertex AI to predict user churn and optimize retention strategies, improving customer retention by 18%.",
        tech: "Python, PySpark, GCP Vertex AI",
        image: "/projects/ml.png"
    },
    {
        title: "ML Pipeline Automation",
        category: "Data Engineering",
        description: "Engineered scalable ML pipelines using Airflow, GCP Cloud Storage, and Snowflake to automate data ingestion and feature engineering, reducing model deployment time by 35%.",
        tech: "Airflow, GCP, Snowflake",
        image: "/projects/data.png"
    },
    {
        title: "GenAI Financial Assistant",
        category: "Generative AI",
        description: "Developed GenAI-powered financial insights assistant using OpenAI APIs and LangChain to generate personalized tax-saving recommendations, enhancing user engagement by 22%.",
        tech: "OpenAI, LangChain, LLM",
        image: "/projects/ai.png"
    },
    {
        title: "RAG-Based Financial Query System",
        category: "LLM / RAG",
        description: "Designed and implemented RAG pipelines using LangChain, vector databases, and OpenAI embeddings to enable context-aware financial query resolution and document retrieval, improving response accuracy by 30%.",
        tech: "RAG, Embeddings, Vector DB",
        image: "/projects/rag.png"
    },
    {
        title: "Real-Time Fraud Detection",
        category: "Streaming ML",
        description: "Implemented real-time fraud detection models using XGBoost and Kafka streaming to identify anomalous transactions, reducing fraud losses by 25%.",
        tech: "XGBoost, Kafka, Streaming",
        image: "/projects/fraud.png"
    },
    {
        title: "LLM Document Processing",
        category: "AI Automation",
        description: "Designed LLM-based document processing pipelines using Transformers and OCR to extract insights from financial documents, reducing manual effort by 40%.",
        tech: "Transformers, OCR, LLM",
        image: "/projects/ocr.png"
    },
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                            </div>

                            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">
                                    {project.title}
                                </h3>
                                <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
