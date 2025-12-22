import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import { Mail, Phone } from "lucide-react";

const representatives = [
  {
    role: "Vice-Présidente",
    name: "Nom à définir",
    email: "laura.djaziri@edu.em-lyon.com",
    phone: "+33 6 00 00 00 00",
    image: "/placeholder.svg",
  },
  {
    role: "Président",
    name: "MATHIEU BILA",
    email: "mathieu.bila@edu.em-lyon.com",
    phone: "+33 6 00 00 00 00",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    role: "Responsable Entreprise",
    name: "Nom à définir",
    email: "jude.hands@edu.em-lyon.com",
    phone: "+33 6 42 95 84 45",
    image: "/placeholder.svg",
  },
];

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple"></div>
              <span className="text-sm tracking-[0.3em] text-purple font-bold uppercase">Parlons de votre projet</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple"></div>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
              <span className="gradient-text">CONTACT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Une idée, un projet, une collaboration ? Contactez-nous et donnons vie à votre vision.
            </p>
          </div>
        </div>
      </section>

      {/* Team Representatives */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl tracking-wider mb-4">
              <span className="gradient-text">Notre Équipe</span>
            </h2>
            <p className="text-muted-foreground">Les représentants de l'association à votre service</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
            {representatives.map((rep, index) => (
              <div
                key={index}
                className={`group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 text-center ${
                  rep.featured ? "md:-mt-4 md:scale-105 border-primary/20 bg-card/70" : ""
                }`}
              >
                {/* Photo */}
                <div className={`mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors ${
                  rep.featured ? "w-36 h-36" : "w-28 h-28"
                }`}>
                  <img
                    src={rep.image}
                    alt={rep.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Role Badge */}
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
                  rep.featured 
                    ? "bg-primary/20 text-primary" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {rep.role}
                </span>
                
                {/* Name */}
                <h3 className="font-display text-xl tracking-wide mb-4 text-foreground">
                  {rep.name}
                </h3>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${rep.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{rep.email}</span>
                  </a>
                  <a
                    href={`tel:${rep.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{rep.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

    </Layout>
  );
};

export default ContactPage;
