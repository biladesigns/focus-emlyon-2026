import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import { Button } from "./ui/button";

type FooterStyle = "magenta" | "orange" | "blue";

const Footer = () => {
  const [activeStyle, setActiveStyle] = useState<FooterStyle>("magenta");

  const styleConfig = {
    magenta: {
      gradient: "from-magenta via-orange to-blue",
      accent: "bg-magenta",
      hover: "hover:bg-magenta/20 hover:text-magenta",
      button: "border-magenta text-magenta hover:bg-magenta hover:text-white",
    },
    orange: {
      gradient: "from-orange via-magenta to-blue",
      accent: "bg-orange",
      hover: "hover:bg-orange/20 hover:text-orange",
      button: "border-orange text-orange hover:bg-orange hover:text-white",
    },
    blue: {
      gradient: "from-blue via-magenta to-orange",
      accent: "bg-blue",
      hover: "hover:bg-blue/20 hover:text-blue",
      button: "border-blue text-blue hover:bg-blue hover:text-white",
    },
  };

  const currentStyle = styleConfig[activeStyle];

  return (
    <footer className="relative z-10 px-4 md:px-8 pb-4 md:pb-8">
      <div className="bg-card/95 backdrop-blur-md rounded-3xl border border-border/30 overflow-hidden transition-all duration-500">
        {/* Gradient accent top */}
        <div className={`h-1 w-full bg-gradient-to-r ${currentStyle.gradient} transition-all duration-500`}></div>
        
        <div className="container mx-auto px-6 lg:px-12 py-12 relative">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img
                  src={focusLogoWave}
                  alt="FOCUS Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-display text-xl tracking-wider gradient-text">
                  FOCUS
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                L'association audiovisuelle d'emlyon business school.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
                <Link to="/prestations" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Prestations
                </Link>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Suivez-nous</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/focus_music_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center ${currentStyle.hover} transition-all`}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@focusemlyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center ${currentStyle.hover} transition-all`}
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="mailto:focus@em-lyon.com"
                  className={`w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center ${currentStyle.hover} transition-all`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Style Switcher */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Amusez-vous avec notre créativité</h4>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStyle("magenta")}
                  className={`${activeStyle === "magenta" ? "bg-magenta text-white border-magenta" : "border-magenta text-magenta hover:bg-magenta hover:text-white"} transition-all duration-300`}
                >
                  Style 1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStyle("orange")}
                  className={`${activeStyle === "orange" ? "bg-orange text-white border-orange" : "border-orange text-orange hover:bg-orange hover:text-white"} transition-all duration-300`}
                >
                  Style 2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStyle("blue")}
                  className={`${activeStyle === "blue" ? "bg-blue text-white border-blue" : "border-blue text-blue hover:bg-blue hover:text-white"} transition-all duration-300`}
                >
                  Style 3
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © 2025 FOCUS - Association audiovisuelle d'emlyon business school
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
