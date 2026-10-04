import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const racine = document.getElementById("root")!;

// Les pages servies en production sont pre-rendues au build : on reprend
// le HTML existant au lieu de le jeter. En dev, la racine est vide.
if (racine.hasChildNodes()) {
  hydrateRoot(racine, <App />);
} else {
  createRoot(racine).render(<App />);
}
