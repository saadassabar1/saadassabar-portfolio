import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home as HomeIcon, User, Briefcase, Mail, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bras Robotique Autonome",
    category: "Mécanique",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    tech: ["SolidWorks", "Arduino", "C++"],
    description: "Conception et programmation d'un bras 6 axes."
  },
  {
    id: 2,
    title: "Dashboard Énergétique",
    category: "Logiciel",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "D3.js", "Python"],
    description: "Visualisation temps réel de consommation électrique."
  },
  {
    id: 3,
    title: "Drone d'Inspection",
    category: "Mécanique",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800&auto=format&fit=crop",
    tech: ["Fusion 360", "3D Printing", "Aerodynamics"],
    description: "Optimisation structurelle pour un drone léger."
  },
  {
    id: 4,
    title: "Simulateur de Flux",
    category: "Académique",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f138?q=80&w=800&auto=format&fit=crop",
    tech: ["Matlab", "Ansys", "Fluid Dynamics"],
    description: "Étude CFD sur les écoulements laminaires."
  },
];

const filters = ["Tous", "Mécanique", "Logiciel", "Académique"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();

  // --- TRANSITION DE COULEUR ---
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6], 
    ["#FCE4D6", "#D69F8E"] 
  );

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const navItems = [
    { name: "Accueil", href: "/", icon: HomeIcon },
    { name: "Projets", href: "/portfolio", icon: Briefcase },
    { name: "Moi", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <motion.div 
      className="min-h-screen pb-32 relative overflow-hidden"
      style={{ backgroundColor }}
    >

      {/* FOND LIQUID GLASS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{
              x: ["-20%", "40%", "-20%"],
              y: ["-20%", "10%", "-20%"],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-20%] w-[90vw] h-[90vw] bg-[#C08B7B] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"
          />

          <motion.div 
            animate={{
              x: ["20%", "-30%", "20%"],
              y: ["20%", "-20%", "20%"],
              scale: [1.2, 0.8, 1.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-[#FF9A8B] rounded-full mix-blend-multiply filter blur-[90px] opacity-25"
          />

          <motion.div 
            animate={{
              scale: [1, 1.3, 1],
              x: ["-10%", "10%", "-10%"],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-white rounded-full mix-blend-overlay filter blur-[80px]"
          />

          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Portfolio</h1>
            <p className="text-black/70 font-serif text-lg max-w-2xl mx-auto font-medium">
              Une collection de problèmes résolus, de leçons apprises et de technologies maîtrisées.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-500 overflow-hidden group ${
                  activeFilter === filter
                    ? "text-white shadow-[0_10px_20px_-5px_rgba(192,139,123,0.5)]"
                    : "text-black/70 hover:text-black"
                }`}
              >
                <div className={`absolute inset-0 backdrop-blur-md transition-all duration-500 ${
                   activeFilter === filter ? 'bg-[#C08B7B] opacity-100' : 'bg-white/30 opacity-100 group-hover:bg-white/50'
                }`} />
                 <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none" />
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>

          {/* Grid des Projets */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} 
                  key={project.id}
                >
                  <Link href={`/project/${project.id}`}>
                    <Card className="group relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-transparent h-full flex flex-col rounded-[2.5rem]">

                      {/* COUCHES LIQUID GLASS */}
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-[20px] z-0 transition-all duration-500 group-hover:bg-white/40" />
                      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/60 via-white/10 to-transparent opacity-80 pointer-events-none z-0 rounded-t-[2.5rem]" />
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FF9A8B]/30 blur-[60px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125 group-hover:-translate-x-10 group-hover:-translate-y-10" />
                      <div className="absolute inset-0 rounded-[2.5rem] border border-white/40 pointer-events-none z-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]" />

                      {/* CONTENU */}
                      <div className="relative z-20 flex flex-col h-full">

                        {/* --- MODIFICATION ICI : m-2 --- */}
                        <div className="relative aspect-[16/9] overflow-hidden z-20 m-2 rounded-[2rem] shadow-sm">
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <Badge className="bg-white/70 text-black backdrop-blur-md border border-white/30 shadow-sm font-bold px-3 py-1 rounded-full">
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-8 flex-1 flex flex-col relative z-20">
                          <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-[#C08B7B] transition-colors flex items-center justify-between">
                            {project.title}
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C08B7B]" />
                          </h3>
                          <p className="text-black/70 font-serif mb-6 flex-1 font-medium leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                              <span key={t} className="text-xs font-bold px-3 py-1.5 bg-white/50 border border-white/20 text-black/80 rounded-full backdrop-blur-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* BARRE DE NAVIGATION */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="
            flex items-center gap-1 p-2 
            rounded-full
            bg-black/20 backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.3),_inset_0_0_0_1px_rgba(255,255,255,0.1)]
          "
        >
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div 
                  className={`
                    relative px-5 py-3 cursor-pointer transition-all duration-300 group
                    rounded-full
                    ${isActive ? 'text-black' : 'text-white hover:text-white'}
                  `}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 font-medium text-sm md:text-base tracking-wide flex items-center gap-2">
                    {item.name}
                  </span>

                  {!isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  )}
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>

    </motion.div>
  );
}