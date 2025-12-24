import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import FocusContactButton from "./FocusContactButton";
const Footer = () => {
  return <footer className="relative z-10 px-4 md:px-8 pb-2 md:pb-4 -mt-8">
      <div className="backdrop-blur-md rounded-3xl border bg-card/95 border-border/30 overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-magenta via-orange to-blue"></div>
        
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img src={focusLogoWave} alt="FOCUS Logo" className="w-20 h-20 object-contain" />
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">
                L'association audiovisuelle d'emlyon business school.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-foreground">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
                <Link to="/prestations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Prestations
                </Link>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-foreground">
                Suivez-nous
              </h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/focus_music_club/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-foreground/10 hover:bg-magenta/20 hover:text-magenta transition-all">
                  <Instagram size={18} />
                </a>
                
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex items-center justify-center md:justify-start">
              <FocusContactButton />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} FOCUS. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;