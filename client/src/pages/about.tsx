import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Bike, Camera, Coffee, Home as HomeIcon, User, Briefcase, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function About() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();

  // --- TRANSITION DE COULEUR ---
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6], 
    ["#FCE4D6", "#D69F8E"] 
  );

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
      <div className="relative z-10 pt-22">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* Intro */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h1 className="text-4xl font-bold text-black">
                Plus qu'un ingénieur. <br/>
                <span className="text-[#C08B7B] font-serif italic">Un humain curieux.</span>
              </h1>
              <div className="prose prose-lg text-black/70 font-serif font-medium leading-relaxed">
                <p>
                  Pourquoi le génie ? Parce que j'ai toujours voulu comprendre "comment ça marche". 
                  Enfant, je démontais mes jouets. Aujourd'hui, je démonte des problèmes complexes. 
                </p>
                <p> </p> 
                <p>
                  Je crois fermement que la technologie sans empathie est inutile. C'est pourquoi je m'efforce de concevoir des systèmes non seulement performants, mais aussi intuitifs et agréables à utiliser.
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center text-black">Hors du Labo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/60 backdrop-blur-md border-none shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <Music className="w-8 h-8 text-black/80" />
                  <span className="font-medium text-black">Piano Jazz</span>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-md border-none shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <Bike className="w-8 h-8 text-[#C08B7B]" />
                  <span className="font-medium text-black">VTT Enduro</span>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-md border-none shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <Camera className="w-8 h-8 text-black/80" />
                  <span className="font-medium text-black">Argentique</span>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-md border-none shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <Coffee className="w-8 h-8 text-[#a87b6a]" />
                  <span className="font-medium text-black">Torréfaction</span>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-white/40 backdrop-blur-md p-10 rounded-3xl relative overflow-hidden shadow-lg border border-white/20">

            {/* --- SVG CUSTOM STYLE PCB (Circuit Board Traces) --- */}
            {/* Ce SVG dessine des points et des lignes diagonales comme sur votre image de référence */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="absolute -right-10 -bottom-10 w-64 h-64 text-white/40 rotate-12 mix-blend-overlay"
            >
              {/* Piste 1 (Haut) */}
              <circle cx="5" cy="7" r="2" fill="currentColor" stroke="none" />
              <path d="M7 7h5l3 3h4" />
              <circle cx="20" cy="10" r="2" fill="currentColor" stroke="none" />

              {/* Piste 2 (Milieu) */}
              <circle cx="4" cy="14" r="2" fill="currentColor" stroke="none" />
              <path d="M6 14h8" />
              <circle cx="16" cy="14" r="2" fill="currentColor" stroke="none" />

              {/* Piste 3 (Bas) */}
              <circle cx="6" cy="20" r="2" fill="currentColor" stroke="none" />
              <path d="M8 20h4l3-3h3" />
              <circle cx="19" cy="17" r="2" fill="currentColor" stroke="none" />
            </svg>

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl font-bold mb-4 text-black">Ma Philosophie</h3>
              <blockquote className="text-2xl font-serif italic leading-relaxed text-black/80">
                "La simplicité est la sophistication suprême. Un bon design est invisible ; il fonctionne, tout simplement."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* BARRE DE NAVIGATION FLOTTANTE */}
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