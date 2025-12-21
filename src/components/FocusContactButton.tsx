import { Link } from "react-router-dom";

const FocusContactButton = () => {
  return (
    <div className="relative py-2">
      {/* Aura pulsante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[180%] rounded-[40px] bg-[radial-gradient(circle,rgba(255,20,147,0.25)_0%,rgba(138,43,226,0.15)_50%,transparent_70%)] animate-auraPulse blur-[10px]" />
      
      <Link
        to="/contact"
        className="group relative block cursor-pointer transition-all duration-400 hover:-translate-y-[3px] filter drop-shadow-[0_6px_20px_rgba(255,20,147,0.3)] hover:drop-shadow-[0_10px_30px_rgba(255,20,147,0.5)] active:-translate-y-[1px]"
      >
        {/* Corps du bouton */}
        <div 
          className="relative px-6 py-2.5 rounded-full border-2 border-white/30 overflow-hidden animate-gradientShift"
          style={{
            background: "linear-gradient(135deg, hsl(330, 87%, 52%) 0%, hsl(270, 80%, 45%) 50%, hsl(330, 87%, 52%) 100%)",
            backgroundSize: "200% 200%",
            boxShadow: "0 0 0 2px rgba(255, 20, 147, 0.2), inset 0 1px 6px rgba(255, 255, 255, 0.2), inset 0 -1px 6px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* Effet de brillance */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] animate-shine" />

          {/* Texte et icône */}
          <span className="relative z-10 flex items-center gap-2 font-montserrat text-xs font-bold tracking-[1px] uppercase text-white group-hover:tracking-[1.5px] transition-all duration-300"
            style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }}
          >
            Nous Contacter
            {/* Icône target/focus */}
            <span className="relative w-4 h-4 inline-block">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full border border-white animate-targetPulse" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border border-white animate-targetPulse" style={{ animationDelay: "0.2s" }} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white animate-targetPulse" style={{ animationDelay: "0.4s" }} />
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FocusContactButton;
