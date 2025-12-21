import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Sparkles } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import focusLogoHP from "@/assets/focus-logo-hp.jpeg";
import { Button } from "./ui/button";

type FooterStyle = "magenta" | "harrypotter" | "blue";

const Footer = () => {
  const [activeStyle, setActiveStyle] = useState<FooterStyle>("magenta");

  const styleConfig = {
    magenta: {
      gradient: "from-magenta via-orange to-blue",
      accent: "bg-magenta",
      bgClass: "bg-card/95",
      borderClass: "border-border/30",
      logo: focusLogoWave,
      logoSize: "w-10 h-10",
      textGradient: "gradient-text",
      buttonActive: "bg-magenta text-white border-magenta",
      buttonInactive: "border-magenta text-magenta hover:bg-magenta hover:text-white",
    },
    harrypotter: {
      gradient: "from-amber-600 via-yellow-500 to-amber-800",
      accent: "bg-amber-500",
      bgClass: "bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900",
      borderClass: "border-amber-700/50 shadow-[0_0_30px_rgba(217,119,6,0.3)]",
      logo: focusLogoHP,
      logoSize: "w-32 h-12",
      textGradient: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500",
      buttonActive: "bg-amber-600 text-white border-amber-600",
      buttonInactive: "border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white",
    },
    blue: {
      gradient: "from-blue via-magenta to-orange",
      accent: "bg-blue",
      bgClass: "bg-card/95",
      borderClass: "border-border/30",
      logo: focusLogoWave,
      logoSize: "w-10 h-10",
      textGradient: "gradient-text",
      buttonActive: "bg-blue text-white border-blue",
      buttonInactive: "border-blue text-blue hover:bg-blue hover:text-white",
    },
  };

  const currentStyle = styleConfig[activeStyle];
  const isHarryPotter = activeStyle === "harrypotter";

  return (
    <footer className="relative z-10 px-4 md:px-8 pb-4 md:pb-8">
      <div className={`${currentStyle.bgClass} backdrop-blur-md rounded-3xl border ${currentStyle.borderClass} overflow-hidden transition-all duration-700`}>
        {/* Gradient accent top */}
        <div className={`h-1 w-full bg-gradient-to-r ${currentStyle.gradient} transition-all duration-500`}></div>
        
        {/* Harry Potter decorative elements */}
        {isHarryPotter && (
          <>
            <div className="absolute top-4 left-8 opacity-20">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
            <div className="absolute top-6 right-12 opacity-30">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="absolute bottom-16 left-16 opacity-20">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </>
        )}
        
        <div className="container mx-auto px-6 lg:px-12 py-12 relative">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img
                  src={currentStyle.logo}
                  alt="FOCUS Logo"
                  className={`${currentStyle.logoSize} object-contain transition-all duration-500`}
                />
                {!isHarryPotter && (
                  <span className={`font-display text-xl tracking-wider ${currentStyle.textGradient}`}>
                    FOCUS
                  </span>
                )}
              </Link>
              <p className={`text-sm leading-relaxed ${isHarryPotter ? "text-amber-200/70 font-serif italic" : "text-muted-foreground"}`}>
                {isHarryPotter 
                  ? "L'association audiovisuelle magique d'emlyon business school."
                  : "L'association audiovisuelle d'emlyon business school."
                }
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? "text-amber-400 font-serif" : "text-foreground"}`}>
                {isHarryPotter ? "Carte du Maraudeur" : "Navigation"}
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/60 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  {isHarryPotter ? "Grande Salle" : "Accueil"}
                </Link>
                <Link to="/prestations" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/60 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  {isHarryPotter ? "Sortilèges" : "Prestations"}
                </Link>
                <Link to="/portfolio" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/60 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  {isHarryPotter ? "Pensine" : "Portfolio"}
                </Link>
                <Link to="/contact" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/60 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  {isHarryPotter ? "Hibou Express" : "Contact"}
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? "text-amber-400 font-serif" : "text-foreground"}`}>
                Suivez-nous
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/focus_music_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isHarryPotter 
                      ? "bg-amber-900/50 text-amber-400 hover:bg-amber-700/50 hover:text-amber-300 border border-amber-700/30" 
                      : "bg-foreground/10 hover:bg-magenta/20 hover:text-magenta"
                  }`}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@focusemlyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isHarryPotter 
                      ? "bg-amber-900/50 text-amber-400 hover:bg-amber-700/50 hover:text-amber-300 border border-amber-700/30" 
                      : "bg-foreground/10 hover:bg-orange/20 hover:text-orange"
                  }`}
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="mailto:focus@em-lyon.com"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isHarryPotter 
                      ? "bg-amber-900/50 text-amber-400 hover:bg-amber-700/50 hover:text-amber-300 border border-amber-700/30" 
                      : "bg-foreground/10 hover:bg-blue/20 hover:text-blue"
                  }`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Style Switcher */}
            <div>
              <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? "text-amber-400 font-serif" : "text-foreground"}`}>
                {isHarryPotter ? "Choisis ta maison" : "Amusez-vous avec notre créativité"}
              </h4>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStyle("magenta")}
                  className={`${activeStyle === "magenta" ? styleConfig.magenta.buttonActive : styleConfig.magenta.buttonInactive} transition-all duration-300`}
                >
                  Style Focus
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStyle("harrypotter")}
                  className={`${activeStyle === "harrypotter" ? styleConfig.harrypotter.buttonActive : styleConfig.harrypotter.buttonInactive} transition-all duration-300`}
                >
                  ⚡ Harry Potter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStyle("blue")}
                  className={`${activeStyle === "blue" ? styleConfig.blue.buttonActive : styleConfig.blue.buttonInactive} transition-all duration-300`}
                >
                  Style 3
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${isHarryPotter ? "border-amber-700/30" : "border-border/30"}`}>
            <p className={`text-xs ${isHarryPotter ? "text-amber-200/50 font-serif italic" : "text-muted-foreground"}`}>
              {isHarryPotter 
                ? "© 2025 FOCUS - \"Je jure solennellement que mes intentions sont bonnes\""
                : "© 2025 FOCUS - Association audiovisuelle d'emlyon business school"
              }
            </p>
            <div className={`flex items-center gap-2 text-xs ${isHarryPotter ? "text-amber-400/70" : "text-muted-foreground"}`}>
              <span className={`w-2 h-2 rounded-full ${currentStyle.accent} animate-pulse transition-all duration-500`}></span>
              {isHarryPotter ? "Poudlard, Écosse" : "Lyon, France"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
