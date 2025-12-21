import Header from "./Header";
import Footer from "./Footer";
import ParticleNetwork from "./ParticleNetwork";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Global Particle Network Background */}
      <div className="fixed inset-0 bg-background z-0">
        <ParticleNetwork />
      </div>
      
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
