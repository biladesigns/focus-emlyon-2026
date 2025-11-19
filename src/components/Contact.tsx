import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden scanlines film-grain">
      {/* Animated background orbs - stronger for contrast */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-magenta/25 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-orange/25 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glitch gradient-text" data-text="Contact">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Donnons vie à vos projets audiovisuels
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-background/50 backdrop-blur-sm border-2 border-muted hover:border-magenta transition-all duration-500 p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-magenta to-orange rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                  <Mail className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-magenta transition-colors">Email</h3>
                  <a 
                    href="mailto:focus@em-lyon.com" 
                    className="text-muted-foreground hover:text-magenta transition-colors glitch-hover"
                  >
                    focus@em-lyon.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-2 border-muted hover:border-blue transition-all duration-500 p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue to-purple rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                  <Phone className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue transition-colors">Téléphone</h3>
                  <a 
                    href="tel:+33619933660" 
                    className="text-muted-foreground hover:text-blue transition-colors glitch-hover"
                  >
                    +33 6 19 93 36 60
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-2 border-muted hover:border-orange transition-all duration-500 p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange to-purple rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                  <MapPin className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-orange transition-colors">Adresse</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    148 Av. Jean Jaurès<br />
                    69007 Lyon
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-background/50 backdrop-blur-sm border-2 border-muted p-8 animate-fade-in-up">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Votre nom"
                  className="bg-background border-2 border-muted focus:border-magenta transition-colors"
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
                  className="bg-background border-2 border-muted focus:border-blue transition-colors"
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
                  className="bg-background border-2 border-muted focus:border-orange transition-colors"
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
                  className="bg-background border-2 border-muted focus:border-purple transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground font-bold py-6 glitch-hover magenta-glow"
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
