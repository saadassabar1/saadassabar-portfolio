import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/portfolio", label: "Projets" },
    { href: "/about", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/">
          <a className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-serif text-lg">
              IK
            </span>
            <span>Ingénieur Humain</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left transition-transform duration-300",
                  location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </a>
            </Link>
          ))}
          <div className="h-6 w-px bg-border mx-2" />
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full px-6 py-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <div className="flex gap-4 mt-2">
            <Button variant="outline" size="sm" className="w-full gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
            <Button variant="outline" size="sm" className="w-full gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
