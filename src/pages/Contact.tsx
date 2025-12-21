import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import { MapPin, Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "focus@em-lyon.com",
    link: "mailto:focus@em-lyon.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 4 78 33 77 77",
    link: "tel:+33478337777",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "144 Avenue Jean Jaurès, 69007 Lyon",
    link: "https://maps.google.com/?q=144+avenue+jean+jaures+69007+lyon",
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

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {info.title}
                </h3>
                
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-foreground hover:text-primary transition-colors text-sm leading-relaxed"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground text-sm leading-relaxed">{info.value}</p>
                )}
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
