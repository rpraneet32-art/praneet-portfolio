"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Database, ShieldAlert, Cpu, ArrowRight, 
  Search, Trophy, Globe, Activity, Smartphone, 
  WifiOff, Calculator, Film, Zap, BrainCircuit
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Project Data Object for cleaner mapping
const projects = [
  {
    title: "Vshuttle",
    tech: ["Kotlin", "Firebase", "Firestore", "RTDB"],
    desc: "Full-scale campus transit system. Features dual Student/Driver dashboards, real-time location streaming, occupancy status, and crowd-sourced 'Waiting' hotspots.",
    color: "#00E5FF",
    icon: <Smartphone size={32} />,
    large: true
  },
  {
    title: "Dino Data",
    tech: ["Python", "DuckDB", "React", "Parquet"],
    desc: "Industry-grade Approx Query Engine. Processes millions of rows using DuckDB, trading accuracy for extreme speed. Includes benchmarking charts against exact engines.",
    color: "#CCFF00",
    icon: <Database size={32} />,
    large: true
  },
  {
    title: "Probity",
    tech: ["TypeScript", "AI", "Vercel"],
    link: "https://probity-lb-9vr3.vercel.app/",
    desc: "AI Venture Capitalist. Analyzes business models, target markets, and competitors to provide critical feedback and market size estimations.",
    color: "#FF00E6",
    icon: <BrainCircuit size={28} />,
  },
  {
    title: "Calc Vault",
    tech: ["Kotlin", "Security Logic"],
    desc: "Security-focused app. Appears as a standard calculator but unlocks a hidden encrypted notes vault via secret sequences (67/69).",
    color: "#FF3E00",
    icon: <ShieldAlert size={28} />,
  },
  {
    title: "Clipboard Sync",
    tech: ["Kotlin", "Firebase", "Web"],
    desc: "Cross-platform data pipeline. Real-time synchronization of local Android clipboards to a live web dashboard.",
    color: "#FFFFFF",
    icon: <Zap size={28} />,
  },
  {
    title: "Offline Notes",
    tech: ["Java", "Firebase", "Sync"],
    desc: "Reliable note-taking system with intelligent offline-first persistence and automatic cloud-syncing on re-connection.",
    color: "#00FF41",
    icon: <WifiOff size={28} />,
  },
  {
    title: "Sylvan Ear",
    tech: ["Acoustic Drone Logic"],
    desc: "3rd Place Ideathon Winner. Concept for acoustic surveillance drones to detect and battle illegal deforestation in real-time.",
    color: "#000000",
    textColor: "#white",
    icon: <Trophy size={28} className="text-[#FF00E6]" />,
  },
  {
    title: "Movie App",
    tech: ["Kotlin", "TMDB API", "UI/UX"],
    desc: "Feature-rich movie discovery engine with dynamic theming and categorized searches via TMDB integration.",
    color: "#white",
    icon: <Film size={28} />,
  },
  {
    title: "HyperLoop UI",
    tech: ["HTML", "UI Design"],
    link: "https://rpraneet32-art.github.io/Hyper_loop_interface/",
    desc: "High-fidelity interface mock-up for high-speed transit monitoring and control systems.",
    color: "#f0f0f0",
    icon: <Globe size={28} />,
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] text-black selection:bg-black selection:text-[#CCFF00] font-mono pb-24">
      
      {/* Top Raw Data Bar */}
      <div className="border-b-4 border-black bg-[#CCFF00] px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest flex justify-between items-center fixed top-0 w-full z-50">
        <span>SYS.STAT: ONLINE</span>
        <span className="hidden sm:inline text-center">CORE_ENGINE: PRANEET_RAJ.EXE</span>
        <span>LOC: VELLORE_VIT</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Photo ID Block */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3 border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col relative h-fit"
          >
             <div className="absolute -top-4 -right-4 bg-[#CCFF00] text-black px-2 py-1 border-4 border-black font-black uppercase text-xs rotate-[10deg] z-10">
              STATUS: ACTIVE
            </div>
            {/* Replace /profile.jpg with your actual photo in public folder */}
            <div className="w-full aspect-[4/5] bg-gray-200 border-4 border-black mb-4 overflow-hidden relative flex items-center justify-center">
              <img src="/2.jpeg" alt="Praneet Raj" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="border-t-4 border-black pt-2">
              <p className="font-black text-xl uppercase">PRANEET RAJ</p>
              <p className="font-bold text-xs uppercase text-gray-500">ID: RPRANEET32_ART</p>
            </div>
          </motion.div>

          {/* Main Title Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-6 border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative flex flex-col justify-center"
          >
            <div className="absolute -top-4 -left-4 bg-[#FF00E6] text-white px-3 py-1 border-4 border-black font-bold uppercase rotate-[-5deg]">
              [ DEVELOPER_ENTITY ]
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Praneet<br />Raj.
            </h1>
            <p className="text-lg md:text-xl font-bold uppercase border-l-8 border-[#FF00E6] pl-4 leading-relaxed">
              I don't build "experiences". <br/>
              I engineer high-performance systems in Kotlin, Python, Java, JavaScript, TypeScript, and C++.
            </p>
          </motion.div>

          {/* Terminal / Context Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-3 border-4 border-black bg-black text-[#00FF00] p-6 shadow-[12px_12px_0px_0px_rgba(204,255,0,1)] flex flex-col justify-between h-fit md:h-full"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-[#00FF00]/30 pb-2">
                <Terminal size={18} />
                <span className="text-sm uppercase tracking-widest font-bold">system.log</span>
              </div>
              <ul className="text-xs space-y-2 font-mono opacity-90">
                <li>&gt; KOTLIN: PRODUCTION_READY</li>
                <li>&gt; FIREBASE: INTEGRATED</li>
                <li>&gt; DUCKDB: OPTIMIZED</li>
                <li>&gt; PYTHON_BACKEND: STABLE</li>
                <li>&gt; UI_COMPONENTS: BRUTALIST</li>
                <li className="animate-pulse pt-4 text-[#CCFF00] font-black">&gt; READY_FOR_RECRUITERS_ macha_</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 mb-24">
          <a href="#work" className="border-4 border-black bg-[#CCFF00] text-black px-8 py-4 font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3">
            Execute Work <ArrowRight strokeWidth={3} />
          </a>
          <a href="https://github.com/rpraneet32-art" target="_blank" rel="noopener noreferrer" className="border-4 border-black bg-white text-black px-8 py-4 font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/praneet-raj-b93a6a3aa/" target="_blank" rel="noopener noreferrer" className="border-4 border-black bg-[#0077B5] text-white px-8 py-4 font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3">
            <FaLinkedin size={24} /> LinkedIn
          </a>
        </div>

        {/* Brutalist Project Grid */}
        <h2 id="work" className="text-4xl md:text-6xl font-black uppercase mb-12 flex items-center gap-4">
          <Database size={48} className="text-[#FF00E6]" /> Deployed Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4, x: -4 }}
              className={`group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col ${project.large ? 'md:col-span-2' : 'col-span-1'}`}
              style={{ backgroundColor: project.color === 'white' ? '#fff' : project.color }}
            >
              <div className={`border-b-4 border-black p-4 flex justify-between items-center ${project.textColor === 'white' ? 'text-white' : 'text-black'}`}>
                <h3 className={`font-black uppercase ${project.large ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>
                {project.icon}
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className={`font-bold mb-6 ${project.large ? 'text-xl' : 'text-md'} ${project.title === 'Sylvan Ear' ? 'text-white' : 'text-black'}`}>
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="border-2 border-black bg-white/50 px-2 py-1 text-xs font-black uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="mt-6 border-4 border-black bg-black text-white p-3 font-black uppercase text-center hover:bg-[#FF00E6] transition-colors"
                  >
                    View Live System
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}