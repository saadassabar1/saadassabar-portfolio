import { useParams, Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, FileText, Code, Settings, Home as HomeIcon, Grid, Mail } from "lucide-react";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Mock data
const projectData = {
  1: {
    title: "Bras Robotique Autonome",
    category: "Mécanique & Électronique",
    context: "Projet de Fin d'Études",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    summary: "Conception, impression et programmation d'un bras robotique 6 axes capable de trier des objets par couleur.",
    learnings: [
      "Gestion de la cinématique inverse en temps réel",
      "Optimisation topologique pour l'impression 3D",
      "Asservissement PID des moteurs pas-à-pas"
    ],
    tech: ["SolidWorks", "C++", "Arduino", "Python"],
    story: {
      challenge: "Le défi principal était de créer un bras robotique précis (<1mm) avec un budget étudiant (<200€), tout en gardant une charge utile de 500g.",
      solution: "J'ai opté pour une structure hybride : des pièces imprimées en 3D (PLA renforcé) pour la géométrie complexe, et des tubes d'aluminium standard pour la rigidité. La transmission utilise des courroies crantées pour réduire le jeu (backlash).",
      obstacles: "Les premiers prototypes vibraient énormément lors des arrêts brusques. J'ai dû réécrire le profil d'accélération dans le firmware (courbe en S) et ajouter des contrepoids mécaniques invisibles dans la structure."
    },
    nextId: 2,
    prevId: 4
  },
  2: {
    title: "Dashboard Énergétique",
    category: "Logiciel",
    context: "Stage R&D",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    summary: "Interface de visualisation temps réel pour monitoring de panneaux solaires industriels.",
    learnings: ["Traitement de données massives (Big Data)", "UX Design pour opérateurs industriels", "Optimisation des rendus graphiques"],
    tech: ["React", "D3.js", "Node.js", "InfluxDB"],
    story: {
      challenge: "Les opérateurs devaient surveiller 5000+ capteurs simultanément sans latence.",
      solution: "Architecture WebSocket pour le streaming de données et agrégation dynamique côté serveur.",
      obstacles: "Le navigateur crashait avec trop de points. J'ai implémenté une virtualisation des listes et un downsampling intelligent des graphiques."
    },
    nextId: 3,
    prevId: 1
  },
  3: {
     title: "Drone d'Inspection",
     category: "Mécanique",
     context: "Projet Personnel",
     image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1200&auto=format&fit=crop",
     summary: "Optimisation structurelle pour un drone léger.",
     learnings: ["Aérodynamisme", "Fusion 360", "Impression 3D"],
     tech: ["Fusion 360", "Betaflight"],
     story: { challenge: "...", solution: "...", obstacles: "..." },
     nextId: 4, prevId: 2
  },
  4: {
     title: "Simulateur de Flux",
     category: "Académique",
     context: "Projet de Recherche",
     image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f138?q=80&w=1200&auto=format&fit=crop",
     summary: "Étude CFD sur les écoulements laminaires.",
     learnings: ["Matlab", "Simulation Numérique", "Physique des fluides"],
     tech: ["Matlab", "Ansys"],
     story: { challenge: "...", solution: "...", obstacles: "..." },
     nextId: 1, prevId: 3
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "1");
  // @ts-ignore
  const project = projectData[id] || projectData[1];
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();

  // --- TRANSITION DE COULEUR ---
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6], 
    ["#FCE4D6", "#D69F8E"] 
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      {/* CONTENU PRINCIPAL (Z-10)                                       */}
      {/* ============================================================== */}
      <div className="relative z-10 pt-24">

        {/* Breadcrumbs */}
        <div className="px-6 container mx-auto mb-8">
          <div className="flex items-center gap-2 text-base text-black/60 font-serif font-medium bg-white/30 backdrop-blur-sm w-fit px-5 py-2.5 rounded-full border border-white/20">
            <Link href="/">Accueil</Link>
            <ChevronRight className="w-5 h-5" />
            <Link href="/portfolio">Portfolio</Link>
            <ChevronRight className="w-5 h-5" />
            <span className="text-black font-bold">{project.title}</span>
          </div>
        </div>

        {/* Level 1: Executive Summary */}
        {/* MODIFICATION ICI : mb-18 -> mb-19 */}
        <section className="container mx-auto px-6 mb-19">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Visual (Left) */}
            <div className="w-full lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video relative group border-4 border-white/30"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Content (Right) */}
            <div className="w-full lg:w-2/5 space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 text-sm text-black border-black/20 bg-white/40 px-3 py-1.5 backdrop-blur-sm">
                  {project.context}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 leading-tight">
                  {project.title}
                </h1>
                <p className="text-2xl text-black/70 font-serif italic">
                  {project.category}
                </p>
              </div>

              <div className="prose prose-lg prose-slate text-foreground">
                <p className="font-medium text-xl border-l-4 border-[#C08B7B] pl-6 py-3 bg-white/30 rounded-r-lg backdrop-blur-sm">
                  {project.summary}
                </p>
              </div>

              <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-sm">
                <h3 className="text-base font-bold uppercase tracking-wider text-black/80 mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Ce que j'ai appris
                </h3>
                <ul className="space-y-4">
                  {project.learnings.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-base text-black/80">
                      <span className="w-2 h-2 rounded-full bg-[#C08B7B] mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-black/60 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <Badge key={t} variant="secondary" className="px-4 py-1.5 text-sm bg-white/50 text-black border border-white/20 shadow-sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Level 2: Technical Deep Dive */}
        <section className="pt-12 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-white/40 shadow-sm border-white/20 text-black backdrop-blur-sm text-sm px-4 py-1.5">
                Niveau 2 : Approfondissement Technique
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Comment j'ai construit ça</h2>
            </div>

            <div className="grid gap-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] md:left-[27px] top-6 bottom-6 w-0.5 bg-black/10 block" />

              {/* Step 1: Challenge */}
              <div className="flex gap-3 md:gap-8 relative group">
                <div className="flex w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 border-4 border-[#C08B7B] items-center justify-center shrink-0 shadow-lg z-10 text-black font-bold text-sm md:text-lg">
                  1
                </div>
                <div className="space-y-4 bg-white/60 backdrop-blur-md p-5 md:p-10 rounded-[2.5rem] shadow-lg border border-white/40 flex-1 w-0 hover:bg-white/80 transition-colors duration-300">
                  <div className="flex items-center gap-3 md:gap-4 mb-2">
                    <div className="p-2 md:p-3 bg-red-100/50 text-red-600 rounded-xl">
                      <FileText className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">Le Défi Initial</h3>
                  </div>
                  <p className="text-black/70 font-serif leading-relaxed text-base md:text-lg break-words">
                    {project.story.challenge}
                  </p>
                </div>
              </div>

              {/* Step 2: Solution */}
              <div className="flex gap-3 md:gap-8 relative group">
                <div className="flex w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 border-4 border-black items-center justify-center shrink-0 shadow-lg z-10 text-black font-bold text-sm md:text-lg">
                  2
                </div>
                <div className="space-y-4 bg-white/60 backdrop-blur-md p-5 md:p-10 rounded-[2.5rem] shadow-lg border border-white/40 flex-1 w-0 hover:bg-white/80 transition-colors duration-300">
                  <div className="flex items-center gap-3 md:gap-4 mb-2">
                    <div className="p-2 md:p-3 bg-blue-100/50 text-blue-600 rounded-xl">
                      <Settings className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">La Solution Technique</h3>
                  </div>
                  <p className="text-black/70 font-serif leading-relaxed text-base md:text-lg break-words">
                    {project.story.solution}
                  </p>
                  <div className="mt-6 p-4 md:p-6 bg-black/90 rounded-2xl overflow-x-auto shadow-inner border border-white/10 max-w-full">
                    <pre className="text-xs md:text-sm text-green-400 font-mono">
  {`// Exemple de logique
void calculateKinematics(float x, float y, float z) {
  float theta1 = atan2(y, x);
  // ... calculs complexes
  float D = (pow(x,2) + pow(y,2));
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Step 3: Obstacles */}
              <div className="flex gap-3 md:gap-8 relative group">
                <div className="flex w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 border-4 border-[#FF9A8B] items-center justify-center shrink-0 shadow-lg z-10 text-black font-bold text-sm md:text-lg">
                  3
                </div>
                <div className="space-y-4 bg-white/60 backdrop-blur-md p-5 md:p-10 rounded-[2.5rem] shadow-lg border border-white/40 flex-1 w-0 hover:bg-white/80 transition-colors duration-300">
                  <div className="flex items-center gap-3 md:gap-4 mb-2">
                    <div className="p-2 md:p-3 bg-orange-100/50 text-orange-600 rounded-xl">
                      <Code className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">Les Obstacles & Résilience</h3>
                  </div>
                  <p className="text-black/70 font-serif leading-relaxed text-base md:text-lg break-words">
                    {project.story.obstacles}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================== */}
      {/* BARRE DE NAVIGATION FLOTTANTE (Standardisée + Mobile Tweaks)   */}
      {/* ============================================================== */}
      <div className="fixed bottom-6 left-2 right-2 z-50 md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-auto">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="
            flex items-center justify-between md:justify-center p-2 
            rounded-full
            bg-black/20 backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.3),_inset_0_0_0_1px_rgba(255,255,255,0.1)]
            w-full md:w-auto
          "
        >
          {/* BOUTON ACCUEIL */}
          <Link href="/">
            <div className="relative px-3 py-3 md:px-5 md:py-3 cursor-pointer transition-all duration-300 group rounded-full text-white hover:text-white hover:bg-white/10">
              <span className="relative z-10 font-medium text-sm md:text-base flex items-center gap-2">
                Accueil
              </span>
            </div>
          </Link>

          {/* ESPACE */}
          <div className="w-px h-6 bg-white/10 mx-1 md:mx-2" />

          {/* GROUPE NAVIGATION PROJETS */}
          <div className="flex items-center gap-0 md:gap-1">
            {/* Précédent */}
            <Link href={`/project/${project.prevId}`}>
              <div className="relative p-3 md:p-3 cursor-pointer transition-all duration-300 group rounded-full text-white hover:text-white hover:bg-white/10" title="Projet Précédent">
                 <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </Link>

            {/* Portfolio */}
            <Link href="/portfolio">
              <div className="relative px-3 py-3 md:px-5 md:py-3 cursor-pointer transition-all duration-300 group rounded-full text-white hover:text-white hover:bg-white/10">
                <span className="relative z-10 font-medium text-sm md:text-base flex items-center gap-2">
                  Portfolio
                </span>
              </div>
            </Link>

            {/* Suivant */}
            <Link href={`/project/${project.nextId}`}>
              <div className="relative p-3 md:p-3 cursor-pointer transition-all duration-300 group rounded-full text-white hover:text-white hover:bg-white/10" title="Projet Suivant">
                 <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </Link>
          </div>

          {/* ESPACE */}
          <div className="w-px h-6 bg-white/10 mx-1 md:mx-4" />

          {/* BOUTON CONTACT */}
          <Link href="/contact">
            <div className="relative px-3 py-3 md:px-5 md:py-3 cursor-pointer transition-all duration-300 group rounded-full text-white hover:text-white hover:bg-white/10">
              <span className="relative z-10 font-medium text-sm md:text-base flex items-center gap-2">
                Contact
              </span>
            </div>
          </Link>

        </motion.div>
      </div>

    </motion.div>
  );
}