import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Portfolio</h1>
          <p className="text-muted-foreground font-serif text-lg max-w-2xl mx-auto">
            Une collection de problèmes résolus, de leçons apprises et de technologies maîtrisées.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-white text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <Link href={`/project/${project.id}`}>
                <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-white h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 duration-500 mix-blend-multiply" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-serif mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-1 bg-secondary/30 text-secondary-foreground rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
