import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Star, Home as HomeIcon, User, Briefcase, Mail } from "lucide-react";

export default function Home() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6], 
    ["#FCE4D6", "#D69F8E"] 
  );

  const heroImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1200&auto=format&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Bras Robotique",
      summary: "Tri autonome par couleur",
      tech: ["C++", "SolidWorks", "Arduino"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Dashboard IoT",
      summary: "Monitoring solaire temps réel",
      tech: ["React", "D3.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Drone Inspection",
      summary: "Structure optimisée 3D",
      tech: ["Fusion 360", "Aéro"],
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Simulateur CFD",
      summary: "Analyse de flux laminaire",
      tech: ["Matlab", "Ansys"],
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f138?q=80&w=600&auto=format&fit=crop"
    }
  ];

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
            animate={{ x: ["-20%", "40%", "-20%"], y: ["-20%", "10%", "-20%"], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
            className="absolute top-[-20%] left-[-20%] w-[90vw] h-[90vw] bg-[#C08B7B] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"
          />
          <motion.div 
            animate={{ x: ["20%", "-30%", "20%"], y: ["20%", "-20%", "20%"], scale: [1.2, 0.8, 1.2] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-[#FF9A8B] rounded-full mix-blend-multiply filter blur-[90px] opacity-25"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: ["-10%", "10%", "-10%"], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-white rounded-full mix-blend-overlay filter blur-[80px]"
          />
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
      </div>

      <div className="relative z-10">
        {/* Hero Section - Passage en 16/9 sur Desktop */}
        <section className="px-4 pt-0 pb-8 md:px-6">
          <div className="container mx-auto max-w-4xl relative"> 
            <div className="relative aspect-[4/5] md:aspect-[16/9] rounded-b-[2rem] md:rounded-b-[3.5rem] rounded-t-none overflow-hidden bg-black shadow-2xl">
              <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.img 
                      key={currentImageIndex}
                      src={heroImages[currentImageIndex]}
                      alt="Saad Assabar"
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 0 }}
                  />
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    key={`flash-${currentImageIndex}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-white z-10 pointer-events-none"
                  />
                </AnimatePresence>
              </div>

              <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-14 z-20 pointer-events-none">
                <div className="flex flex-col relative w-full px-8 md:px-20">
                  <motion.h1 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[15vw] md:text-[8.5rem] font-bold leading-[0.8] text-[#FCE4D5] tracking-tighter text-right self-end"
                  >
                    Saad
                  </motion.h1>
                  <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-[15vw] md:text-[8.5rem] font-bold leading-[0.8] text-[#FCE4D5] tracking-tighter text-left self-start mt-2 md:mt-3"
                  >
                    Assabar
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio & CTA - Largeur max 3xl pour le confort de lecture */}
        <section className="px-6 container mx-auto max-w-3xl mt-4"> 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-black font-bold text-center md:text-justify">
              Futur ingénieur passionné par la convergence entre mécanique et logiciel. 
              Je conçois des systèmes complexes en les rendant simples et humains.
              Basé à Québec, spécialisé en robotique et IoT.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1.15, 
              transition: { type: "spring", stiffness: 600, damping: 20, delay: 0 }
            }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            className="text-center mt-[4rem]"
          >
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="relative overflow-hidden group border-none bg-transparent rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_10px_30px_-10px_rgba(255,111,97,0.8)] border border-white/20 px-12 py-6 text-lg md:px-24 md:py-8 md:text-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_20px_40px_-10px_rgba(255,111,97,1)]"
              >
                <div className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[#FF6F61] via-[#D65D52] to-[#FF9A8B]"
                    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "blur(40px)" }}
                  />
                </div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out skew-x-12" />
                <span className="relative z-10 text-white font-bold tracking-widest uppercase text-sm md:text-lg drop-shadow-md">
                  Découvrir mes projets
                </span>
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="pl-6 overflow-hidden mt-32">
          <div className="container mx-auto mb-6 max-w-4xl">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-black">Projets Récents</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 pr-6 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <motion.div 
                  className="relative shrink-0 w-[300px] h-[500px] md:w-[350px] md:h-[550px] rounded-[2rem] overflow-hidden cursor-pointer group snap-center shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 font-serif text-sm mb-4 leading-relaxed line-clamp-2">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-sm text-xs">{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-xl drop-shadow-md">{project.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto max-w-4xl px-6 pb-24 mt-32">
          <div className="flex flex-row items-end justify-between w-full">
            <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black lowercase tracking-wide" style={{ fontFamily: '"Fraunces", serif' }}>
                    pour me contacter
                </h2>
                <svg width="80" height="24" viewBox="0 0 80 24" className="text-black fill-none stroke-current stroke-[2] ml-1">
                    <line x1="0" y1="12" x2="78" y2="12" />
                    <polyline points="70 4 78 12 70 20" />
                </svg>
            </div>
            <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-black flex items-center justify-center cursor-pointer transition-colors hover:bg-black group"
                >
                    <Star className="w-8 h-8 md:w-10 md:h-10 text-black fill-black group-hover:text-white group-hover:fill-white transition-colors" />
                </motion.button>
            </Link>
          </div>
        </section>

        {/* NAV FLOTTANTE */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="flex items-center gap-1 p-2 rounded-full bg-black/20 backdrop-blur-2xl border border-white/10 shadow-2xl"
          >
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <div className="relative px-5 py-3 cursor-pointer group rounded-full">
                    {isActive && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 font-medium text-sm md:text-base ${isActive ? 'text-black' : 'text-white'}`}>
                      {item.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}