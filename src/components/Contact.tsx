import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 scanlines"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary glitch" data-text="Contact">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Donnons vie à vos projets audiovisuels
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-card border-border p-6 hover:border-primary transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:focus@em-lyon.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    focus@em-lyon.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="bg-card border-border p-6 hover:border-primary transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                  <a 
                    href="tel:+33619933660" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +33 6 19 93 36 60
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="bg-card border-border p-6 hover:border-primary transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    148 Av. Jean Jaurès<br />
                    69007 Lyon
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card border-border p-8 animate-fade-in-up">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Votre nom"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="votre@email.com"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Projet
                </label>
                <Input 
                  id="project"
                  type="text" 
                  placeholder="Type de projet"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold glitch-hover red-glow"
              >
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
