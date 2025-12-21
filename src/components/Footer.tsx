import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import focusLogoHP from "@/assets/focus-logo-hp.png";
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
      buttonInactive: "border-magenta text-magenta hover:bg-magenta hover:text-white"
    },
    harrypotter: {
      gradient: "from-amber-600 via-yellow-500 to-amber-800",
      accent: "bg-amber-500",
      buttonActive: "bg-amber-600 text-white border-amber-600",
      buttonInactive: "border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white"
    },
    blue: {
      gradient: "from-blue via-magenta to-orange",
      accent: "bg-blue",
      buttonActive: "bg-blue text-white border-blue",
      buttonInactive: "border-blue text-blue hover:bg-blue hover:text-white"
    }
  };
  const currentStyle = styleConfig[activeStyle];

  // Harry Potter metallic gold text style - matching the logo colors
  const hpMetallic = "text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-100 to-amber-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]";
  return <footer className="relative z-10 px-4 md:px-8 pb-4 md:pb-8">
      <div className={`group backdrop-blur-md rounded-3xl border overflow-hidden transition-all duration-700 relative ${isHarryPotter ? "border-amber-700/50 shadow-[0_0_30px_rgba(217,119,6,0.3)]" : "bg-card/95 border-border/30"}`}>
        {/* Harry Potter background */}
        {isHarryPotter && <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${fondHP})`
      }}>
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Lightning effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/0 via-yellow-100/0 to-amber-200/0 opacity-0 group-hover:animate-[lightning_0.15s_ease-out] pointer-events-none"></div>
          </div>}

        {/* Gradient accent top */}
        <div className={`h-1 w-full bg-gradient-to-r ${currentStyle.gradient} transition-all duration-500 relative z-10`}></div>
        
        
        <div className="container mx-auto px-6 lg:px-12 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                {isHarryPotter ? <img src={focusLogoHP} alt="FOCUS Logo" className="w-64 h-24 object-contain transition-all duration-500" /> : <>
                    <img src={focusLogoWave} alt="FOCUS Logo" className="w-10 h-10 object-contain transition-all duration-500" />
                    <span className="font-display text-xl tracking-wider gradient-text">
                      FOCUS
                    </span>
                  </>}
              </Link>
              <p className={`text-sm leading-relaxed font-medium ${isHarryPotter ? hpMetallic : "text-muted-foreground"}`}>
                L'association audiovisuelle d'emlyon business school.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className={`font-bold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? hpMetallic : "text-foreground"}`}>
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : "text-muted-foreground hover:text-primary"}`}>
                  Accueil
                </Link>
                <Link to="/prestations" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : "text-muted-foreground hover:text-primary"}`}>
                  Prestations
                </Link>
                <Link to="/portfolio" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : "text-muted-foreground hover:text-primary"}`}>
                  Portfolio
                </Link>
                <Link to="/contact" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : "text-muted-foreground hover:text-primary"}`}>
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className={`font-bold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? hpMetallic : "text-foreground"}`}>
                Suivez-nous
              </h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/focus_music_club/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isHarryPotter ? "bg-gradient-to-b from-amber-200/20 to-amber-600/20 text-amber-200 hover:from-amber-200/30 hover:to-amber-600/30 border border-amber-400/40" : "bg-foreground/10 hover:bg-magenta/20 hover:text-magenta"}`}>
                  <Instagram size={18} />
                </a>
                <a href="https://www.youtube.com/@focusemlyon" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isHarryPotter ? "bg-gradient-to-b from-amber-200/20 to-amber-600/20 text-amber-200 hover:from-amber-200/30 hover:to-amber-600/30 border border-amber-400/40" : "bg-foreground/10 hover:bg-orange/20 hover:text-orange"}`}>
                  <Youtube size={18} />
                </a>
                
              </div>
            </div>

            {/* Style Switcher */}
            <div>
              <h4 className={`font-bold mb-4 text-sm uppercase tracking-wider ${isHarryPotter ? hpMetallic : "text-foreground"}`}>
                Amusez-vous avec notre créativité
              </h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" onClick={() => setActiveStyle("magenta")} className={`${activeStyle === "magenta" ? styleConfig.magenta.buttonActive : styleConfig.magenta.buttonInactive} transition-all duration-300`}>
                  Style Focus
                </Button>
                <button 
                  onClick={() => setActiveStyle("harrypotter")} 
                  className={`relative px-6 py-2.5 rounded-full font-display text-sm tracking-wider transition-all duration-300 overflow-hidden
                    ${activeStyle === "harrypotter" 
                      ? "bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300 text-gray-700 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.3)] border-2 border-gray-400" 
                      : "bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 text-gray-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_2px_6px_rgba(0,0,0,0.2)] border border-gray-400 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.3)]"
                    }`}
                >
                  {/* Metallic shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                  {/* Inner bevel effect */}
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-b from-gray-100/50 via-transparent to-gray-400/30 pointer-events-none"></div>
                  <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">⚡ Harry Potter</span>
                </button>
                <Button variant="outline" size="sm" onClick={() => setActiveStyle("blue")} className={`${activeStyle === "blue" ? styleConfig.blue.buttonActive : styleConfig.blue.buttonInactive} transition-all duration-300`}>
                  Style 3
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${isHarryPotter ? "border-amber-400/30" : "border-border/30"}`}>
            <p className={`text-xs font-medium ${isHarryPotter ? hpMetallic : "text-muted-foreground"}`}>
              © 2025 FOCUS - Association audiovisuelle d'emlyon business school
            </p>
            <div className={`flex items-center gap-2 text-xs font-medium ${isHarryPotter ? hpMetallic : "text-muted-foreground"}`}>
              <span className={`w-2 h-2 rounded-full ${currentStyle.accent} animate-pulse transition-all duration-500`}></span>
              Lyon, France
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;