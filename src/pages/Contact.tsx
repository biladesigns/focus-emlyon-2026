import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

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
    value: "23 Avenue Guy de Collongue, 69130 Écully",
    link: "https://maps.google.com/?q=emlyon+business+school+ecully",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    value: "Lun - Ven : 9h - 18h",
    link: null,
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

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
              <span className="gradient-text">NOUS TROUVER</span>
            </h2>
            <p className="text-muted-foreground">
              emlyon business school - Campus d'Écully
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-border/50 aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6772080837397!2d4.760895076749612!3d45.78363061095066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ec9a0f6d38b1%3A0x8c8fe4c8a9f7ef5c!2semlyon%20business%20school!5e0!3m2!1sfr!2sfr!4v1703099999999!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="emlyon business school location"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
