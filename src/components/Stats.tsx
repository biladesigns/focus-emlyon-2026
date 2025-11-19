import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 4, suffix: "ᵉ", label: "école de commerce en France", color: "magenta" },
  { number: 2, suffix: "ᵉ", label: "au classement Digital", color: "blue" },
  { number: 45000, suffix: "", label: "diplômés (alumnis)", color: "orange" },
  { number: 9260, suffix: "", label: "étudiants", color: "purple" },
];

const AnimatedNumber = ({ value, suffix, color }: { value: number; suffix: string; color: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={elementRef} className={`text-4xl md:text-6xl lg:text-7xl font-bold text-${color} neon-glow break-words`}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden scanlines film-grain">
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Notre École en <span className="gradient-text glitch italic" data-text="Chiffres">Chiffres</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-primary transition-all duration-500 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} color={stat.color} />
              </div>
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base group-hover:text-foreground transition-colors duration-300 leading-tight">
                {stat.label}
              </p>
              
              {/* Bottom accent */}
              <div className={`mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-transparent via-${stat.color} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
