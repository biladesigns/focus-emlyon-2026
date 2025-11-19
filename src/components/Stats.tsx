import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 4, suffix: "ᵉ", label: "école de commerce en France" },
  { number: 2, suffix: "ᵉ", label: "au classement Digital" },
  { number: 45000, suffix: "", label: "alumni" },
  { number: 9260, suffix: "", label: "étudiants" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
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
    <div ref={elementRef} className="text-5xl md:text-7xl font-bold text-primary glitch" data-text={`${count}${suffix}`}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 scanlines"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre École en <span className="text-primary">Chiffres</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-4 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Red accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default Stats;
