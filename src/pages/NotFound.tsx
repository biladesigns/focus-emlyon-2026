import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="font-display text-7xl md:text-8xl tracking-wider mb-6">
          <span className="gradient-text">404</span>
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oups ! Cette page n'existe pas.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-magenta via-purple to-blue text-white font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
