import { Link } from "react-router-dom";

const FocusContactButton = () => {
  return (
    <div className="relative py-8">
      {/* Aura pulsante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] rounded-[60px] bg-[radial-gradient(circle,rgba(255,20,147,0.3)_0%,rgba(0,102,255,0.2)_50%,transparent_70%)] animate-auraPulse blur-[15px]" />
      
      <Link
        to="/contact"
        className="group relative block cursor-pointer transition-all duration-400 hover:-translate-y-[5px] filter drop-shadow-[0_10px_30px_rgba(255,20,147,0.4)] hover:drop-shadow-[0_15px_40px_rgba(255,20,147,0.6)] active:-translate-y-[2px]"
      >
        {/* Corps du bouton */}
        <div 
          className="relative px-12 py-5 rounded-[50px] border-[3px] border-white/30 overflow-hidden animate-gradientShift"
          style={{
            background: "linear-gradient(135deg, #FF1493 0%, #0066FF 50%, #FF1493 100%)",
            backgroundSize: "200% 200%",
            boxShadow: "0 0 0 3px rgba(255, 20, 147, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2), inset 0 -2px 10px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.4)"
          }}
        >
          {/* Lignes fluides internes */}
          <div className="absolute inset-0 overflow-hidden rounded-[50px] pointer-events-none">
            <div className="absolute w-20 h-20 -top-5 -left-5 border-[1.5px] border-white/30 rounded-full animate-innerFlowMove" />
            <div className="absolute w-15 h-15 top-1/2 -right-4 border-[1.5px] border-white/30 rounded-full animate-innerFlowMove" style={{ animationDelay: "1s" }} />
            <div className="absolute w-[70px] h-[70px] -bottom-6 left-[30%] border-[1.5px] border-white/30 rounded-full animate-innerFlowMove" style={{ animationDelay: "2s" }} />
          </div>

          {/* Effet de brillance */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-[25deg] animate-shine" />

          {/* Texte et icône */}
          <span className="relative z-10 flex items-center gap-3 font-montserrat text-lg font-bold tracking-[1.5px] uppercase text-white group-hover:tracking-[2px] transition-all duration-300"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.4)" }}
          >
            Nous Contacter
            {/* Icône target/focus */}
            <span className="relative w-6 h-6 inline-block">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border-2 border-white animate-targetPulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white animate-targetPulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ animationDelay: "0.2s" }} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-white animate-targetPulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ animationDelay: "0.4s" }} />
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FocusContactButton;
