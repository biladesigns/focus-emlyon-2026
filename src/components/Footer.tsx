import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 md:px-8 pb-4 md:pb-8">
      <div className="bg-card/95 backdrop-blur-md rounded-3xl border border-border/30 overflow-hidden">
        {/* Gradient accent top */}
        <div className="h-1 w-full bg-gradient-to-r from-magenta via-orange to-blue"></div>
        
        <div className="container mx-auto px-6 lg:px-12 py-12 relative">
          <div className="grid md:grid-cols-4 gap-10">
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
                L'association audiovisuelle d'emlyon business school.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigation</h4>
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
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
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
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Suivez-nous</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/focus_music_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-magenta/20 hover:text-magenta transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@focusemlyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-orange/20 hover:text-orange transition-all"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="mailto:focus@em-lyon.com"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-blue/20 hover:text-blue transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © 2025 FOCUS - Association audiovisuelle d'emlyon business school
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-magenta animate-pulse"></span>
              Lyon, France
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
