import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, PenTool, Cpu, Code2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5 rounded-full">
              Bienvenue sur mon portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Ingénierie, Curiosité et <br className="hidden md:block" />
              <span className="text-primary italic font-serif">Résolution de Problèmes.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-serif leading-relaxed">
              Je suis <span className="font-semibold text-foreground">Ingénieur Mécanique & Logiciel</span>. 
              Je construis des ponts entre le monde physique et le numérique avec une approche humaine.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/portfolio">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-primary/25 hover:translate-y-[-2px] transition-all">
                  Explorer mes projets <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-2 hover:bg-secondary/20">
                  Me contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 space-y-4">
              <h2 className="text-3xl font-bold text-foreground">En Action</h2>
              <p className="text-muted-foreground font-serif">
                Un aperçu de mon quotidien : du prototypage en laboratoire au code en pleine nuit. 
                L'ingénierie n'est pas qu'une théorie, c'est une pratique vivante.
              </p>
              <div className="flex gap-2 pt-2">
                <div className="h-1.5 w-12 bg-primary rounded-full" />
                <div className="h-1.5 w-12 bg-border rounded-full" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <Carousel 
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {[1, 2, 3].map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/3 pl-6">
                      <div className="p-1">
                        <Card className="border-0 shadow-md overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer relative">
                          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                          <img 
                            src={`https://images.unsplash.com/photo-${index === 0 ? '1581091226825-a6a2a5aee158' : index === 1 ? '1537432376769-00f5c2f4c8d3' : '1517077304055-6e89abbec40b'}?q=80&w=800&auto=format&fit=crop`}
                            alt="Project" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                            <p className="text-white font-medium">Session de prototypage #{index + 1}</p>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4 mr-4">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mes Domaines d'Expertise</h2>
            <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
              Je ne me contente pas de concevoir ou de coder. Je cherche la synergie entre les systèmes physiques et l'intelligence numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/portfolio?filter=conception">
              <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm cursor-pointer overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Conception</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    De la CAO à l'impression 3D, je donne forme aux idées avec précision et esthétique fonctionnelle.
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Voir les projets <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/portfolio?filter=analyse">
              <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm cursor-pointer overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Analyse</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Simulation FEA, calculs structurels et optimisation thermique. Rien n'est laissé au hasard.
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Voir les projets <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/portfolio?filter=prototypage">
              <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm cursor-pointer overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">Software</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Développement embarqué, scripts d'automatisation et interfaces utilisateurs intuitives.
                  </p>
                  <span className="text-green-600 text-sm font-semibold flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Voir les projets <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
