"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Intuit",
        role: "Data Scientist",
        period: "May 2025 – Present",
        description:
            "Architected customer financial behavior models using Python, PySpark, and GCP Vertex AI to predict user churn and optimize retention strategies, improving customer retention by 18%. Developed GenAI-powered financial insights assistant using OpenAI APIs and LangChain, enhancing user engagement by 22%. Implemented real-time fraud detection models using XGBoost and Kafka streaming, reducing fraud losses by 25%."
    },
    {
        company: "Tata Consultancy Services",
        role: "Data Scientist",
        period: "Aug 2021 – Aug 2023",
        description:
            "Designed predictive models using Scikit-learn and Python to forecast customer demand and optimize inventory planning, improving forecast accuracy by 20%. Built end-to-end ETL pipelines using Apache Spark, Hive, and SQL, reducing data latency by 30%. Deployed machine learning models using Docker, Kubernetes, and Azure ML for scalable and reliable inference."
    },
    {
        company: "Zoho",
        role: "Data Analyst",
        period: "Jun 2019 – Jul 2021",
        description:
            "Analyzed user behavior data using SQL and Excel to generate actionable insights, increasing feature adoption by 15%. Developed interactive dashboards using Tableau and Zoho Analytics, improving reporting efficiency by 25%. Automated reporting workflows, reducing manual effort by 40%."
    }
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Career Timeline
                </motion.h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                            <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">
                                {exp.period}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">
                                {exp.company}
                            </h3>
                            <h4 className="text-xl text-gray-400 mb-4">
                                {exp.role}
                            </h4>
                            <p className="text-gray-300 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
