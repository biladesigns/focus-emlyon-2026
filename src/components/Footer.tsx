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
                {/* Harry Potter Magic Button */}
                <button 
                  onClick={() => setActiveStyle("harrypotter")} 
                  className={`group/hp relative px-8 py-4 rounded-full font-cinzel text-base font-bold tracking-[3px] uppercase transition-all duration-300 cursor-pointer animate-magicGlow
                    bg-gradient-to-br from-[#d4d4d4] to-[#a8a8a8]
                    text-[#2c2c2c]
                    shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-2px_5px_rgba(0,0,0,0.2)]
                    hover:translate-y-[-2px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-2px_5px_rgba(0,0,0,0.3),0_0_20px_rgba(255,215,0,0.3)]
                    active:translate-y-[1px] active:shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_2px_8px_rgba(0,0,0,0.4)]
                    ${activeStyle === "harrypotter" ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent" : ""}`}
                  style={{
                    textShadow: "1px 1px 0px rgba(255,255,255,0.5), 2px 2px 3px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Outer border glow on hover */}
                  <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#5a5a5a] via-[#8a8a8a] to-[#5a5a5a] opacity-0 group-hover/hp:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Ink splatter effect */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 pointer-events-none animate-inkFloat">
                    <div className="absolute w-2 h-2 bg-[rgba(30,30,30,0.6)] rounded-full top-2 right-3 blur-[1px]"></div>
                    <div className="absolute w-1.5 h-1.5 bg-[rgba(30,30,30,0.5)] rounded-full top-4 right-1 blur-[1px]"></div>
                    <div className="absolute w-1.5 h-1.5 bg-[rgba(30,30,30,0.5)] rounded-full top-1 right-5 blur-[1px]"></div>
                  </div>
                  
                  {/* Runes container */}
                  <div className="absolute inset-0 pointer-events-none overflow-visible">
                    {/* Top runes */}
                    <span className="absolute -top-1 left-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80">ᚺ</span>
                    <span className="absolute -top-1 left-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.2s"}}>ᛁ</span>
                    <span className="absolute -top-1 left-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.4s"}}>ᛉ</span>
                    <span className="absolute -top-1 right-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.6s"}}>ᚱ</span>
                    <span className="absolute -top-1 right-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.8s"}}>ᚦ</span>
                    <span className="absolute -top-1 right-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1s"}}>ᚲ</span>
                    
                    {/* Bottom runes */}
                    <span className="absolute -bottom-1 left-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.2s"}}>ᚦ</span>
                    <span className="absolute -bottom-1 left-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.4s"}}>ᚾ</span>
                    <span className="absolute -bottom-1 left-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.6s"}}>ᛊ</span>
                    <span className="absolute -bottom-1 right-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.8s"}}>ᛉ</span>
                    <span className="absolute -bottom-1 right-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "2s"}}>ᚱ</span>
                    <span className="absolute -bottom-1 right-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "2.2s"}}>ᛖ</span>
                  </div>
                  
                  <span className="relative z-10">⚡ Magie</span>
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