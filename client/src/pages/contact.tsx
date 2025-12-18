import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send, Home as HomeIcon, User, Briefcase } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
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

      {/* ============================================================== */}
      {/* FOND LIQUID GLASS                                              */}
      {/* ============================================================== */}
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

      {/* ============================================================== */}
      {/* CONTENU PRINCIPAL                                              */}
      {/* ============================================================== */}
      <div className="relative z-10 pt-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Info Side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-black">Parlons de votre projet</h1>
                <p className="text-black/70 font-serif text-lg font-medium">
                  Que ce soit pour une opportunité professionnelle, une collaboration technique ou simplement pour discuter d'ingénierie autour d'un café.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Email</h3>
                    <p className="text-black/60 font-medium">saadassabar1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black">Localisation</h3>
                    <p className="text-black/60 font-medium">Quebec, Canada & À distance</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-sm border border-white/20">
                <p className="text-sm text-black/80 font-serif italic">
                  Je réponds généralement en moins de 24 heures, sauf si je suis en train de debugger une boucle infinie.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <Card className="border border-white/40 shadow-2xl bg-white/70 backdrop-blur-xl rounded-[2rem]">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-black/80">Nom</label>
                    <Input id="name" placeholder="Votre nom" className="bg-white/50 border-white/30 focus:bg-white/80 transition-all rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-black/80">Email</label>
                    <Input id="email" type="email" placeholder="votre@email.com" className="bg-white/50 border-white/30 focus:bg-white/80 transition-all rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-black/80">Message</label>
                    <Textarea id="message" placeholder="Comment puis-je vous aider ?" className="min-h-[150px] bg-white/50 border-white/30 focus:bg-white/80 transition-all rounded-xl" />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-base font-bold bg-black text-white hover:bg-black/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Envoyer le message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* BARRE DE NAVIGATION FLOTTANTE                                  */}
      {/* ============================================================== */}
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