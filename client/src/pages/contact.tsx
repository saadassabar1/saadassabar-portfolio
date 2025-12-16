import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Parlons de votre projet</h1>
              <p className="text-muted-foreground font-serif text-lg">
                Que ce soit pour une opportunité professionnelle, une collaboration technique ou simplement pour discuter d'ingénierie autour d'un café.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">hello@ingenieur-portfolio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-secondary-foreground shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Localisation</h3>
                  <p className="text-muted-foreground">Paris, France & Remote</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-border/50">
              <p className="text-sm text-muted-foreground font-serif italic">
                "Je réponds généralement en moins de 24 heures, sauf si je suis en train de debugger une boucle infinie."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom</label>
                  <Input id="name" placeholder="Votre nom" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="votre@email.com" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Comment puis-je vous aider ?" className="min-h-[150px] bg-background border-border" />
                </div>
                <Button type="submit" size="lg" className="w-full text-base font-medium">
                  Envoyer le message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
