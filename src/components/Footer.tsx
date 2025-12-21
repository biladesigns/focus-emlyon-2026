import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import focusLogoHP from "@/assets/focus-logo-hp.png";
import fondHP from "@/assets/fond-hp.jpg";
import fondParrain from "@/assets/fond-parrain.avif";
import { Button } from "./ui/button";

type FooterStyle = "magenta" | "harrypotter" | "godfather";

const Footer = () => {
  const [activeStyle, setActiveStyle] = useState<FooterStyle>("magenta");
  const isHarryPotter = activeStyle === "harrypotter";
  const isGodfather = activeStyle === "godfather";

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
    godfather: {
      gradient: "from-red-900 via-red-800 to-black",
      accent: "bg-red-900",
      buttonActive: "bg-red-900 text-white border-red-900",
      buttonInactive: "border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
    }
  };

  const currentStyle = styleConfig[activeStyle];

  // Harry Potter metallic gold text style
  const hpMetallic = "text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-100 to-amber-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]";

  // Godfather elegant text style
  const gfElegant = "text-gray-200 font-baskerville";

  const getTextStyle = () => {
    if (isHarryPotter) return hpMetallic;
    if (isGodfather) return gfElegant;
    return "text-muted-foreground";
  };

  const getTitleStyle = () => {
    if (isHarryPotter) return hpMetallic;
    if (isGodfather) return "text-gray-100 font-baskerville";
    return "text-foreground";
  };

  return (
    <footer className="relative z-10 px-4 md:px-8 pb-2 md:pb-4">
      <div className={`group backdrop-blur-md rounded-3xl border overflow-hidden transition-all duration-700 relative ${
        isHarryPotter 
          ? "border-amber-700/50 shadow-[0_0_30px_rgba(217,119,6,0.3)]" 
          : isGodfather 
            ? "border-red-900/30 bg-black" 
            : "bg-card/95 border-border/30"
      }`}>
        
        {/* Harry Potter background */}
        {isHarryPotter && (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fondHP})` }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/0 via-yellow-100/0 to-amber-200/0 opacity-0 group-hover:animate-[lightning_0.15s_ease-out] pointer-events-none"></div>
          </div>
        )}

        {/* Godfather background */}
        {isGodfather && (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fondParrain})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>
            {/* Film grain overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`
            }}></div>
          </div>
        )}

        {/* Gradient accent top */}
        <div className={`h-1 w-full bg-gradient-to-r ${currentStyle.gradient} transition-all duration-500 relative z-10`}></div>
        
        <div className="container mx-auto px-6 lg:px-12 py-6 relative z-10 min-h-[200px] flex flex-col justify-center">
          <div className="grid md:grid-cols-4 gap-6 items-start">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                {isHarryPotter ? (
                  <img src={focusLogoHP} alt="FOCUS Logo" className="w-64 h-24 object-contain transition-all duration-500" />
                ) : isGodfather ? (
                  <span 
                    className="font-cinzel text-4xl font-black text-gray-100 tracking-[4px] uppercase"
                    style={{
                      textShadow: "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 8px 3px rgba(0,0,0,.3), 0 12px 8px rgba(0,0,0,.3)"
                    }}
                  >
                    FOCUS
                  </span>
                ) : (
                  <>
                    <img src={focusLogoWave} alt="FOCUS Logo" className="w-10 h-10 object-contain transition-all duration-500" />
                    <span className="font-display text-xl tracking-wider gradient-text">FOCUS</span>
                  </>
                )}
              </Link>
              <p className={`text-sm leading-relaxed font-medium ${getTextStyle()}`}>
                {isGodfather 
                  ? "\"Je vais lui faire une offre qu'il ne pourra pas refuser.\""
                  : "L'association audiovisuelle d'emlyon business school."}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className={`font-bold mb-4 text-sm uppercase tracking-wider ${getTitleStyle()}`}>
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : isGodfather ? "text-gray-400 hover:text-gray-100" : "text-muted-foreground hover:text-primary"}`}>
                  Accueil
                </Link>
                <Link to="/prestations" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : isGodfather ? "text-gray-400 hover:text-gray-100" : "text-muted-foreground hover:text-primary"}`}>
                  Prestations
                </Link>
                <Link to="/portfolio" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : isGodfather ? "text-gray-400 hover:text-gray-100" : "text-muted-foreground hover:text-primary"}`}>
                  Portfolio
                </Link>
                <Link to="/contact" className={`text-sm font-medium transition-all ${isHarryPotter ? `${hpMetallic} hover:brightness-125` : isGodfather ? "text-gray-400 hover:text-gray-100" : "text-muted-foreground hover:text-primary"}`}>
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className={`font-bold mb-4 text-sm uppercase tracking-wider ${getTitleStyle()}`}>
                Suivez-nous
              </h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/focus_music_club/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isHarryPotter 
                      ? "bg-gradient-to-b from-amber-200/20 to-amber-600/20 text-amber-200 hover:from-amber-200/30 hover:to-amber-600/30 border border-amber-400/40" 
                      : isGodfather
                        ? "bg-gray-900 text-gray-400 hover:text-gray-100 border border-gray-700 hover:border-red-900/50"
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
                      ? "bg-gradient-to-b from-amber-200/20 to-amber-600/20 text-amber-200 hover:from-amber-200/30 hover:to-amber-600/30 border border-amber-400/40" 
                      : isGodfather
                        ? "bg-gray-900 text-gray-400 hover:text-gray-100 border border-gray-700 hover:border-red-900/50"
                        : "bg-foreground/10 hover:bg-orange/20 hover:text-orange"
                  }`}
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Style Switcher */}
            <div>
              <h4 className={`font-bold mb-4 text-sm uppercase tracking-wider ${getTitleStyle()}`}>
                Amusez-vous avec notre créativité
              </h4>
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setActiveStyle("magenta")} 
                  className={`${activeStyle === "magenta" ? styleConfig.magenta.buttonActive : styleConfig.magenta.buttonInactive} transition-all duration-300`}
                >
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
                  style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.5), 2px 2px 3px rgba(0,0,0,0.3)" }}
                >
                  <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#5a5a5a] via-[#8a8a8a] to-[#5a5a5a] opacity-0 group-hover/hp:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 pointer-events-none animate-inkFloat">
                    <div className="absolute w-2 h-2 bg-[rgba(30,30,30,0.6)] rounded-full top-2 right-3 blur-[1px]"></div>
                    <div className="absolute w-1.5 h-1.5 bg-[rgba(30,30,30,0.5)] rounded-full top-4 right-1 blur-[1px]"></div>
                    <div className="absolute w-1.5 h-1.5 bg-[rgba(30,30,30,0.5)] rounded-full top-1 right-5 blur-[1px]"></div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none overflow-visible">
                    <span className="absolute -top-1 left-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80">ᚺ</span>
                    <span className="absolute -top-1 left-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.2s"}}>ᛁ</span>
                    <span className="absolute -top-1 left-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.4s"}}>ᛉ</span>
                    <span className="absolute -top-1 right-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.6s"}}>ᚱ</span>
                    <span className="absolute -top-1 right-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "0.8s"}}>ᚦ</span>
                    <span className="absolute -top-1 right-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1s"}}>ᚲ</span>
                    <span className="absolute -bottom-1 left-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.2s"}}>ᚦ</span>
                    <span className="absolute -bottom-1 left-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.4s"}}>ᚾ</span>
                    <span className="absolute -bottom-1 left-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.6s"}}>ᛊ</span>
                    <span className="absolute -bottom-1 right-[41%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "1.8s"}}>ᛉ</span>
                    <span className="absolute -bottom-1 right-[28%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "2s"}}>ᚱ</span>
                    <span className="absolute -bottom-1 right-[15%] font-cinzel text-xs text-gray-500/60 animate-runeGlow group-hover/hp:text-amber-400/80" style={{animationDelay: "2.2s"}}>ᛖ</span>
                  </div>
                  <span className="relative z-10">Harry Potter</span>
                </button>

                {/* Le Parrain / Godfather Button */}
                <div className="relative">
                  <button 
                    onClick={() => setActiveStyle("godfather")} 
                    className="group/gf relative bg-transparent border-none cursor-pointer transition-all duration-400
                      hover:-translate-y-[3px] hover:scale-[1.02]
                      active:translate-y-0.5 active:scale-[0.98]"
                  >
                    {/* Quote on hover */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-baskerville text-[10px] italic text-white/40 whitespace-nowrap opacity-0 group-hover/gf:opacity-100 transition-opacity duration-500 pointer-events-none">
                      "Je vais lui faire une offre qu'il ne pourra pas refuser"
                    </span>

                    <span 
                      className={`font-cinzel text-lg font-black text-gray-100 tracking-[2px] uppercase block px-9 py-4 relative
                        bg-[rgba(20,20,20,0.8)] rounded-[30px] border-2 border-white/10
                        transition-all duration-300
                        group-hover/gf:bg-[rgba(30,30,30,0.9)] group-hover/gf:border-white/20
                        ${activeStyle === "godfather" ? "ring-2 ring-red-900/50 ring-offset-2 ring-offset-transparent" : ""}`}
                      style={{
                        textShadow: "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 1px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.3), 0 6px 6px rgba(0,0,0,.4)",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                      }}
                    >
                      Le Parrain
                    </span>

                    {/* Shadow beneath */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-5 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,transparent_70%)] blur-[10px] group-hover/gf:w-[95%] group-hover/gf:opacity-80 group-hover/gf:-bottom-12 transition-all duration-400"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`mt-6 pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-3 ${
            isHarryPotter 
              ? "border-amber-400/30" 
              : isGodfather 
                ? "border-gray-700/50" 
                : "border-border/30"
          }`}>
            <p className={`text-xs font-medium ${isHarryPotter ? hpMetallic : isGodfather ? "text-gray-500 font-baskerville" : "text-muted-foreground"}`}>
              © 2025 FOCUS - Association audiovisuelle d'emlyon business school
            </p>
            <div className={`flex items-center gap-2 text-xs font-medium ${isHarryPotter ? hpMetallic : isGodfather ? "text-gray-500 font-baskerville" : "text-muted-foreground"}`}>
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
