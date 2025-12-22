import { useRef } from 'react';

interface AnimatedRealisationsButtonProps {
  onClick?: () => void;
}

const AnimatedRealisationsButton = ({ onClick }: AnimatedRealisationsButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple-effect';
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
    
    onClick?.();
  };

  return (
    <div className="relative inline-block">
      {/* Glow effect behind button */}
      <div className="absolute -inset-1 bg-[linear-gradient(90deg,#3b5bdb,#e64980,#fd7e14,#3b5bdb)] bg-[length:300%_100%] rounded-[60px] blur-[20px] opacity-60 animate-glow-move" />
      
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="btn-realisations relative z-[1] px-[52px] py-5 text-[17px] font-semibold tracking-[0.5px] text-foreground bg-[#12121f] border-none rounded-[56px] cursor-pointer overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] active:scale-[0.98] group"
      >
        {/* Particles on hover */}
        <div className="absolute inset-0 rounded-[56px] overflow-hidden pointer-events-none">
          <span className="particle absolute w-1 h-1 rounded-full bg-[#3b5bdb] left-[10%] top-[30%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '0s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#e64980] left-[25%] top-[60%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '0.4s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#fd7e14] left-[50%] top-[20%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '0.8s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#7048e8] left-[75%] top-[70%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '1.2s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#fab005] left-[90%] top-[40%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '1.6s' }} />
        </div>
        
        {/* Focus ring animation */}
        <span className="absolute -inset-2 rounded-[64px] border-2 border-[rgba(230,73,128,0.6)] opacity-0 pointer-events-none group-hover:animate-focus-expand" />
        
        {/* Inner light effect */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
        
        {/* Button text */}
        <span className="relative z-[2] text-foreground">
          Découvrir
        </span>
      </button>
    </div>
  );
};

export default AnimatedRealisationsButton;
