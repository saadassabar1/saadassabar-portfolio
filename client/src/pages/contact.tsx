import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send, Home as HomeIcon, User, Briefcase, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();

  // Formspree Hook
  const [state, handleSubmit] = useForm("mjgbvaqn");

  // Transition de couleur de fond au scroll
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

  // Écran de succès après l'envoi
  if (state.succeeded) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center p-6"
        style={{ backgroundColor: "#FCE4D6" }}
      >
        <Card className="max-w-md w-full bg-white/40 backdrop-blur-xl border-white/20 shadow-2xl rounded-[2.5rem] p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-black mb-4">Message envoyé !</h2>
          <p className="text-black/70 mb-8">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
          <Link href="/">
            <Button className="w-full bg-black text-white rounded-xl py-6">Retour à l'accueil</Button>
          </Link>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen pb-32 relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Background Animations (Liquid Glass) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: ["-10%", "20%", "-10%"], y: ["-10%", "10%", "-10%"], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#C08B7B] rounded-full mix-blend-multiply filter blur-[80px] opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-6 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Section Texte */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-black tracking-tighter mb-8"
            >
              Contact
            </motion.h1>
            <p className="text-xl text-black/80 font-serif leading-relaxed mb-12">
              Une idée de projet, une question ou simplement envie de discuter ingénierie ? 
              Je suis toujours ouvert à de nouvelles opportunités.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-white" />
                </div>
                <span className="font-bold text-lg">saadassabar1@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Québec, QC</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <Card className="bg-white/40 backdrop-blur-xl border-white/20 shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-black/80">Votre Email</label>
                  <Input 
                    id="email" type="email" name="email" required 
                    placeholder="exemple@mail.com" 
                    className="bg-white/50 border-white/30 rounded-xl py-6"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-black/80">Message</label>
                  <Textarea 
                    id="message" name="message" required 
                    placeholder="Comment puis-je vous aider ?" 
                    className="min-h-[150px] bg-white/50 border-white/30 rounded-xl"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <Button 
                  type="submit" 
                  disabled={state.submitting} 
                  className="w-full bg-black text-white hover:bg-black/80 rounded-xl py-6 font-bold transition-all shadow-lg"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"} 
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ============================================================== */}
      {/* BARRE DE NAVIGATION FLOTTANTE (AJOUTÉE)                         */}
      {/* ============================================================== */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          className="
            flex items-center gap-1 p-2 rounded-full 
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