import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, FileText, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", project: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="relative">
            {/* Gradient glow behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-magenta via-purple to-blue rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-magenta to-orange mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">
                  <span className="gradient-text">ÉCRIVEZ-NOUS</span>
                </h2>
                <p className="text-muted-foreground">
                  Partagez votre vision, nous la concrétisons
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <User className="w-4 h-4" />
                      Nom
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-background/50 border-white/10 focus:border-magenta/50 focus:ring-magenta/20 rounded-xl h-12 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="bg-background/50 border-white/10 focus:border-blue/50 focus:ring-blue/20 rounded-xl h-12 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Project */}
                <div className="space-y-2">
                  <label htmlFor="project" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    Type de projet
                  </label>
                  <Input
                    id="project"
                    type="text"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Aftermovie, Court-métrage, Clip..."
                    required
                    className="bg-background/50 border-white/10 focus:border-orange/50 focus:ring-orange/20 rounded-xl h-12 transition-all placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <MessageSquare className="w-4 h-4" />
                    Votre message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos attentes..."
                    required
                    rows={5}
                    className="bg-background/50 border-white/10 focus:border-purple/50 focus:ring-purple/20 rounded-xl resize-none transition-all placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl py-4 font-montserrat font-bold text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-70"
                >
                  {/* Button gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-magenta via-purple to-blue opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] group-hover:animate-shine"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
