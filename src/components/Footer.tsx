import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-magenta/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={focusLogoWave}
                alt="FOCUS Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display text-xl tracking-wider gradient-text">
                FOCUS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L'association audiovisuelle d'emlyon business school. Créativité, innovation et professionnalisme.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Accueil
              </Link>
              <Link to="/prestations" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Prestations
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Articles
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:focus@em-lyon.com" className="hover:text-primary transition-colors">
                focus@em-lyon.com
              </a>
              <p>emlyon business school</p>
              <p>23 Avenue Guy de Collongue</p>
              <p>69130 Écully, France</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/focus_music_club/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@focusemlyon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="mailto:focus@em-lyon.com"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 FOCUS - Association audiovisuelle d'emlyon business school
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
