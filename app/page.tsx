import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      
      {/* HERO ANIMATION */}
      <ScrollyCanvas />

      {/* PROFESSIONAL SUMMARY */}
      <section className="px-6 md:px-12 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Professional Summary
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Data Scientist with 5+ years of experience turning complex data into meaningful insights and scalable solutions across fintech and enterprise domains. Skilled in Python, SQL, PySpark, and machine learning techniques including NLP, LLMs, and Retrieval-Augmented Generation (RAG), with hands-on experience building end-to-end data pipelines and deploying models on GCP and Azure. Passionate about applying AI and data-driven thinking to solve real-world problems, improve customer experiences, and support business growth.
        </p>
      </section>

      {/* EXPERIENCE */}
      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rohit Raj Uppala
      </footer>
    </main>
  );
}
