import { useRef } from 'react';

interface AnimatedRealisationsButtonProps {
  onClick?: () => void;
}

const AnimatedRealisationsButton = ({ onClick }: AnimatedRealisationsButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Create ripple effect
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
      <div className="absolute -inset-1 bg-[conic-gradient(from_0deg,#3b5bdb,#e64980,#fd7e14,#3b5bdb)] rounded-[60px] blur-[20px] opacity-60 animate-glow-pulse" />
      
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="relative z-[1] px-12 py-[18px] text-[17px] font-semibold tracking-[0.5px] text-foreground bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border-none rounded-[56px] cursor-pointer overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] active:scale-[0.98] group"
      >
        {/* Animated gradient border */}
        <span className="absolute inset-0 rounded-[56px] p-[2px] bg-[conic-gradient(from_var(--border-angle,0deg),#3b5bdb,#7048e8,#e64980,#fd7e14,#fab005,#3b5bdb)] animate-rotate-border [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
        
        {/* Button text with gradient */}
        <span className="relative z-[2] bg-[linear-gradient(90deg,#fff_0%,#fff_40%,#e64980_50%,#fd7e14_60%,#fff_70%,#fff_100%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
          Nos Réalisations
        </span>
        
        {/* Particles on hover */}
        <div className="absolute inset-0 rounded-[56px] overflow-hidden pointer-events-none">
          <span className="particle absolute w-1 h-1 rounded-full bg-[#3b5bdb] left-[10%] top-[30%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '0s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#e64980] left-[25%] top-[60%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '0.4s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#fd7e14] left-[50%] top-[20%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '0.8s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#7048e8] left-[75%] top-[70%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '1.2s' }} />
          <span className="particle absolute w-1 h-1 rounded-full bg-[#fab005] left-[90%] top-[40%] opacity-0 group-hover:opacity-100 group-hover:animate-particle-float" style={{ animationDelay: '1.6s' }} />
        </div>
        
        {/* Focus ring animation */}
        <span className="absolute -inset-2 rounded-[64px] border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:animate-focus-expand" />
        
        {/* Inner light effect */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </button>
    </div>
  );
};

export default AnimatedRealisationsButton;
