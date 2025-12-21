import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Sparkles } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import focusLogoHP from "@/assets/focus-logo-hp.jpeg";
import fondHP from "@/assets/fond-hp.jpg";
import { Button } from "./ui/button";

type FooterStyle = "magenta" | "harrypotter" | "blue";

const Footer = () => {
  const [activeStyle, setActiveStyle] = useState<FooterStyle>("magenta");

  const isHarryPotter = activeStyle === "harrypotter";

  const styleConfig = {
    magenta: {
      gradient: "from-magenta via-orange to-blue",
      accent: "bg-magenta",
      buttonActive: "bg-magenta text-white border-magenta",
      buttonInactive: "border-magenta text-magenta hover:bg-magenta hover:text-white",
    },
    harrypotter: {
      gradient: "from-amber-600 via-yellow-500 to-amber-800",
      accent: "bg-amber-500",
      buttonActive: "bg-amber-600 text-white border-amber-600",
      buttonInactive: "border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white",
    },
    blue: {
      gradient: "from-blue via-magenta to-orange",
      accent: "bg-blue",
      buttonActive: "bg-blue text-white border-blue",
      buttonInactive: "border-blue text-blue hover:bg-blue hover:text-white",
    },
  };

  const currentStyle = styleConfig[activeStyle];

  return (
    <footer className="relative z-10 px-4 md:px-8 pb-4 md:pb-8">
      <div 
        className={`backdrop-blur-md rounded-3xl border overflow-hidden transition-all duration-700 relative ${
          isHarryPotter 
            ? "border-amber-700/50 shadow-[0_0_30px_rgba(217,119,6,0.3)]" 
            : "bg-card/95 border-border/30"
        }`}
      >
        {/* Harry Potter background */}
        {isHarryPotter && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fondHP})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        )}

        {/* Gradient accent top */}
        <div className={`h-1 w-full bg-gradient-to-r ${currentStyle.gradient} transition-all duration-500 relative z-10`}></div>
        
        {/* Harry Potter decorative elements */}
        {isHarryPotter && (
          <>
            <div className="absolute top-4 left-8 opacity-30 z-10">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
            <div className="absolute top-6 right-12 opacity-40 z-10">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="absolute bottom-16 left-16 opacity-30 z-10">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </>
        )}
        
        <div className="container mx-auto px-6 lg:px-12 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                {isHarryPotter ? (
                  <img
                    src={focusLogoHP}
                    alt="FOCUS Logo"
                    className="w-48 h-16 object-contain transition-all duration-500"
                  />
                ) : (
                  <>
                    <img
                      src={focusLogoWave}
                      alt="FOCUS Logo"
                      className="w-10 h-10 object-contain transition-all duration-500"
                    />
                    <span className="font-display text-xl tracking-wider gradient-text">
                      FOCUS
                    </span>
                  </>
                )}
              </Link>
              <p className={`text-sm leading-relaxed ${isHarryPotter ? "text-amber-200/80" : "text-muted-foreground"}`}>
                L'association audiovisuelle d'emlyon business school.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? "text-amber-400" : "text-foreground"}`}>
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/70 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  Accueil
                </Link>
                <Link to="/prestations" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/70 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  Prestations
                </Link>
                <Link to="/portfolio" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/70 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  Portfolio
                </Link>
                <Link to="/contact" className={`text-sm transition-colors ${isHarryPotter ? "text-amber-200/70 hover:text-amber-300" : "text-muted-foreground hover:text-primary"}`}>
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? "text-amber-400" : "text-foreground"}`}>
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
              <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? "text-amber-400" : "text-foreground"}`}>
                Amusez-vous avec notre créativité
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
            <p className={`text-xs ${isHarryPotter ? "text-amber-200/60" : "text-muted-foreground"}`}>
              © 2025 FOCUS - Association audiovisuelle d'emlyon business school
            </p>
            <div className={`flex items-center gap-2 text-xs ${isHarryPotter ? "text-amber-400/70" : "text-muted-foreground"}`}>
              <span className={`w-2 h-2 rounded-full ${currentStyle.accent} animate-pulse transition-all duration-500`}></span>
              Lyon, France
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
