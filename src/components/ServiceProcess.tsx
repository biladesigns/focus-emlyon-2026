import { Camera, Video, Radio } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "PRODUCTION & TOURNAGE",
    description: "Captation d'événements (séminaires, salons) et prises de vues drone. Utilisation de matériel 4K haute fidélité pour des images premium.",
  },
  {
    number: "02",
    icon: Video,
    title: "POST-PRODUCTION",
    description: "Montage dynamique, étalonnage et motion design. Nous transformons vos images brutes en un récit visuel percutant et cohérent.",
  },
  {
    number: "03",
    icon: Radio,
    title: "LIVE & RÉACTIVITÉ",
    description: "Streaming multi-caméras et production de \"JT Express\" (montage en temps réel) pour une diffusion immédiate pendant vos événements.",
  },
];

const ServiceProcess = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magenta/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm tracking-[0.3em] text-primary font-bold uppercase">Notre Processus</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
            <span className="gradient-text">COMMENT NOUS TRAVAILLONS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche structurée pour transformer votre vision en contenu audiovisuel d'exception.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-4 w-8 h-px bg-gradient-to-r from-border to-transparent z-10" />
              )}
              
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-xl hover:bg-card/50 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-magenta/20 via-primary/20 to-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                
                {/* Step Number */}
                <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-magenta/20 to-orange/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl tracking-wide mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta via-primary to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile vertical connector */}
        <div className="md:hidden absolute left-1/2 top-[200px] bottom-[200px] w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />
      </div>
    </section>
  );
};

export default ServiceProcess;
