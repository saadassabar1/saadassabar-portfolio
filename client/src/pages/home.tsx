import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Cpu, PenTool } from "lucide-react";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Transition logic:
  // 0 - 0.2: Initial Beige
  // 0.25: Button is crossed roughly (based on visual layout estimation)
  // 0.25 - 0.5: Transition to Green Lily
  // 0.5 - 1.0: Stay Green Lily
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    ["#FCE4D5", "#FCE4D5", "#E3F2E1"]
  );

  const heroImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop", // Portrait 1
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop", // Working on laptop
    "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1200&auto=format&fit=crop", // In the lab
  ];

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

  return (
    <motion.div 
      className="min-h-screen pb-20"
      style={{ backgroundColor }}
    >
      
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-8 md:pt-28 md:px-6">
        <div className="container mx-auto max-w-2xl relative">
          
          {/* Rounded Image Container */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden">
            <Carousel 
              className="w-full h-full"
              plugins={[
                Autoplay({
                  delay: 3500,
                  stopOnInteraction: false,
                }),
              ]}
              opts={{
                loop: true,
                duration: 60, // Slow scroll
              }}
            >
              <CarouselContent className="h-full ml-0">
                {heroImages.map((src, index) => (
                  <CarouselItem key={index} className="h-full pl-0 basis-full">
                    <img 
                      src={src} 
                      alt="Saad Assabar" 
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Overlay Gradient for Text Readability (Subtle) */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Staggered Name Overlay */}
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
      <section className="px-6 container mx-auto max-w-2xl mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-serif leading-relaxed text-black font-bold text-justify">
            Ingénieur passionné par la convergence entre mécanique et logiciel. 
            Je conçois des systèmes complexes en les rendant simples et humains.
            Basé à Paris, citoyen du monde.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link href="/portfolio">
            <Button 
              size="lg" 
              className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-xl px-16 py-8 text-lg font-semibold shadow-lg shadow-[#FF6F61]/20 transition-all hover:scale-105 w-full md:w-auto"
            >
              Découvrir mes projets
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Spacer */}
      <div className="h-24" />

      {/* Projects Pastilles (Scrolling) */}
      <section className="pl-6 overflow-hidden">
        <div className="container mx-auto mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projets Récents</h2>
        </div>
        
        {/* Horizontal Scroll Area */}
        <div className="flex gap-6 overflow-x-auto pb-12 pr-6 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <motion.div 
                className="relative shrink-0 w-[300px] h-[500px] md:w-[350px] md:h-[550px] rounded-[2rem] overflow-hidden cursor-pointer group snap-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              >
                {/* Image Background */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-[0.8]"
                />
                
                {/* Default State: Just a subtle gradient or title maybe? 
                    User asked: "displays name, summary, skills ON HOVER".
                    So initially, let's keep it clean or just minimal info.
                */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Content Reveal on Hover */}
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

                {/* Non-hover indicator (optional) */}
                <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-xl drop-shadow-md">{project.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
          
          {/* "See All" Card */}
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

    </motion.div>
  );
}
