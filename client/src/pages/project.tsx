import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, FileText, Code, Settings } from "lucide-react";
import { useEffect } from "react";

// Mock data - normally would come from a store or API
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
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "1");
  const project = projectData[id as keyof typeof projectData] || projectData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="pt-24 pb-4 px-6 container mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-serif">
          <Link href="/">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/portfolio">Portfolio</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">{project.title}</span>
        </div>
      </div>

      {/* Level 1: Executive Summary */}
      <section className="container mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Visual (Left) */}
          <div className="w-full lg:w-3/5">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-video relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
          </div>

          {/* Content (Right) */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-3 py-1">
                {project.context}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-2 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground font-serif italic">
                {project.category}
              </p>
            </div>

            <div className="prose prose-slate text-foreground">
              <p className="font-medium text-lg border-l-4 border-primary pl-4 py-1 bg-secondary/10">
                {project.summary}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Ce que j'ai appris
              </h3>
              <ul className="space-y-3">
                {project.learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 bg-white p-3 rounded-lg shadow-sm border border-border/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separation */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

      {/* Level 2: Technical Deep Dive */}
      <section className="bg-secondary/10 py-20 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-white shadow-sm border-0 text-foreground">
              Niveau 2 : Approfondissement Technique
            </Badge>
            <h2 className="text-3xl font-bold">Comment j'ai construit ça</h2>
          </div>

          <div className="grid gap-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-border hidden md:block" />

            {/* Step 1: Challenge */}
            <div className="flex gap-8 relative">
              <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-4 border-secondary items-center justify-center shrink-0 shadow-sm z-10 text-secondary-foreground font-bold">
                1
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Le Défi Initial</h3>
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  {project.story.challenge}
                </p>
              </div>
            </div>

            {/* Step 2: Solution */}
            <div className="flex gap-8 relative">
              <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-4 border-primary items-center justify-center shrink-0 shadow-sm z-10 text-primary font-bold">
                2
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">La Solution Technique</h3>
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  {project.story.solution}
                </p>
                <div className="mt-4 p-4 bg-slate-900 rounded-lg overflow-x-auto">
                  <pre className="text-xs text-green-400 font-mono">
{`// Exemple de logique de contrôle
void calculateKinematics(float x, float y, float z) {
  float theta1 = atan2(y, x);
  float D = (pow(x,2) + pow(y,2) + pow(z,2) - L1*L1 - L2*L2) / (2*L1*L2);
  // ... calculs complexes
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3: Obstacles */}
            <div className="flex gap-8 relative">
              <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-4 border-orange-300 items-center justify-center shrink-0 shadow-sm z-10 text-orange-600 font-bold">
                3
              </div>
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Les Obstacles & Résilience</h3>
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  {project.story.obstacles}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="border-t border-border bg-white">
        <div className="container mx-auto grid grid-cols-2">
          <Link href={`/project/${project.prevId}`}>
            <a className="group p-8 md:p-12 border-r border-border hover:bg-secondary/10 transition-colors flex flex-col items-start text-left">
              <span className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Projet Précédent
              </span>
              <span className="text-lg md:text-xl font-bold text-foreground">Simulateur CFD</span>
            </a>
          </Link>
          <Link href={`/project/${project.nextId}`}>
            <a className="group p-8 md:p-12 hover:bg-primary/5 transition-colors flex flex-col items-end text-right">
              <span className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                Projet Suivant <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-lg md:text-xl font-bold text-foreground">Dashboard IoT</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
