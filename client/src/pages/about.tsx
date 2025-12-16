import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Bike, Camera, Coffee, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-4xl font-bold text-foreground">
              Plus qu'un Ingénieur. <br/>
              <span className="text-primary font-serif italic">Un Humain Curieux.</span>
            </h1>
            <div className="prose prose-lg text-muted-foreground font-serif">
              <p>
                Pourquoi le génie ? Parce que j'ai toujours voulu comprendre "comment ça marche". 
                Enfant, je démontais mes jouets. Aujourd'hui, je démonte des problèmes complexes pour construire des solutions durables.
              </p>
              <p>
                Je crois fermement que la technologie sans empathie est inutile. C'est pourquoi je m'efforce de concevoir des systèmes non seulement performants, mais aussi intuitifs et agréables à utiliser.
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Hors du Labo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <Music className="w-8 h-8 text-secondary-foreground" />
                <span className="font-medium">Piano Jazz</span>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <Bike className="w-8 h-8 text-primary" />
                <span className="font-medium">VTT Enduro</span>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <Camera className="w-8 h-8 text-slate-600" />
                <span className="font-medium">Argentique</span>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <Coffee className="w-8 h-8 text-amber-700" />
                <span className="font-medium">Torréfaction</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-secondary/20 p-10 rounded-3xl relative overflow-hidden">
          <Heart className="absolute -right-10 -bottom-10 w-64 h-64 text-secondary/30 rotate-12" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Ma Philosophie</h3>
            <blockquote className="text-2xl font-serif italic leading-relaxed text-secondary-foreground">
              "La simplicité est la sophistication suprême. Un bon design est invisible ; il fonctionne, tout simplement."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
