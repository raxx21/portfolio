import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Experience />
      <Projects />
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rohit Raj Uppala
      </footer>
    </main>
  );
}
