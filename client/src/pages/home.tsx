import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Star, Home as HomeIcon, User, Briefcase, Mail } from "lucide-react";

export default function Home() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();

  // --- TRANSITION DE COULEUR CORRIGÉE ---
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6], // La couleur change complètement une fois arrivé à 60% de la page
    ["#FCE4D6", "#D69F8E"] // Départ : Pêche Pâle -> Arrivée : Terre Cuite plus sombre (VISIBLE)
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

      {/* ============================================================== */}
      {/* FOND LIQUID GLASS                                              */}
      {/* ============================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none">

          {/* Forme 1 : L'OMBRE */}
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

          {/* Forme 2 : LA CHALEUR */}
          <motion.div 
            animate={{
              x: ["20%", "-30%", "20%"],
              y: ["20%", "-20%", "20%"],
              scale: [1.2, 0.8, 1.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-[#FF9A8B] rounded-full mix-blend-multiply filter blur-[90px] opacity-25"
          />

          {/* Forme 3 : LE REFLET BLANC */}
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

      <div className="relative z-10">

        {/* Hero Section */}
        <section className="px-4 pt-0 pb-8 md:px-6">
          <div className="container mx-auto max-w-2xl relative">

            <div className="relative aspect-[4/5] md:aspect-[3/2] rounded-b-[2rem] md:rounded-b-[3rem] rounded-t-none overflow-hidden bg-black shadow-2xl">

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

              <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 z-20 pointer-events-none">
                <div className="flex flex-col relative w-full px-8 md:px-16">
                  <motion.h1 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[15vw] md:text-[8rem] font-bold leading-[0.8] text-[#FCE4D5] mix-blend-normal tracking-tighter text-right self-end"
                  >
                    Saad
                  </motion.h1>
                  <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-[15vw] md:text-[8rem] font-bold leading-[0.8] text-[#FCE4D5] mix-blend-normal tracking-tighter text-left self-start mt-2 md:mt-4"
                  >
                    Assabar
                  </motion.h1>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bio & CTA */}
        <section className="px-6 container mx-auto max-w-2xl mt-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-black font-bold text-justify">
              Futur ingénieur passionné par la convergence entre mécanique et logiciel. 
              Je conçois des systèmes complexes en les rendant simples et humains.
              Basé à Québec, citoyen du monde.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1.15, 
              transition: { 
                type: "spring", 
                stiffness: 200, 
                damping: 10,
                delay: 0.2 
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-[3.125rem]"
          >
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="relative overflow-hidden group border-none bg-transparent rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_10px_30px_-10px_rgba(255,111,97,0.8)] border border-white/20 px-12 py-6 text-lg md:px-[8.5rem] md:py-8 md:text-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_20px_40px_-10px_rgba(255,111,97,1)]"
              >
                {/* COUCHE 1 : LE FLUIDE ORGANIQUE (Aurora Mesh) */}
                <div className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[#FF6F61] via-[#D65D52] to-[#FF9A8B]"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ filter: "blur(40px)" }}
                  />

                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-b from-white/20 to-transparent rounded-[40%]"
                    animate={{
                      rotate: [360, 0],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ mixBlendMode: "overlay" }}
                  />
                </div>

                {/* COUCHE 2 : SURFACE VERRE */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

                {/* COUCHE 3 : REFLET */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 rounded-t-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out skew-x-12" />

                {/* COUCHE 4 : TEXTE */}
                <span className="relative z-10 text-white font-bold tracking-widest uppercase text-sm md:text-lg drop-shadow-sm mix-blend-overlay opacity-90">
                  Découvrir mes projets
                </span>
                <span className="absolute inset-0 flex items-center justify-center z-10 text-white font-bold tracking-widest uppercase text-sm md:text-lg drop-shadow-md">
                  Découvrir mes projets
                </span>
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Spacer */}
        <div className="h-24" />

        {/* Projects Pastilles */}
        <section className="pl-6 overflow-hidden">
          <div className="container mx-auto mb-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-black">Projets Récents</h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 pr-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <motion.div 
                  className="relative shrink-0 w-[300px] h-[500px] md:w-[350px] md:h-[550px] rounded-[2rem] overflow-hidden cursor-pointer group snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-[0.8]"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 font-serif text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-sm text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-primary-foreground font-medium text-sm">
                      Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-xl drop-shadow-md">{project.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}

            <Link href="/portfolio">
              <motion.div 
                  className="relative shrink-0 w-[200px] h-[360px] md:w-[240px] md:h-[420px] rounded-[2rem] bg-secondary/30 flex items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <div className="text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-primary">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-foreground">Voir tout le portfolio</span>
                  </div>
                </motion.div>
            </Link>
          </div>
        </section>

        {/* Grand Espaceur */}
        <div className="h-32 md:h-48" />

        {/* Contact CTA */}
        <section className="container mx-auto max-w-5xl px-6 pb-24">
          <div className="flex flex-row items-end justify-between w-full">

            <div className="flex flex-col items-start gap-4">
                <h2 
                  className="text-3xl md:text-4xl font-bold text-black lowercase tracking-wide"
                  style={{ fontFamily: '"Fraunces", serif' }}
                >
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
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-black bg-transparent flex items-center justify-center cursor-pointer transition-colors hover:bg-black group"
                >
                    <Star className="w-8 h-8 md:w-10 md:h-10 text-black fill-black group-hover:text-white group-hover:fill-white transition-colors" />
                </motion.button>
            </Link>
          </div>
        </section>

        {/* NAV FLOTTANTE */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
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

      </div>
    </motion.div>
  );
}