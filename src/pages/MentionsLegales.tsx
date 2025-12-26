import Layout from "@/components/Layout";

const MentionsLegales = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-8">
            <span className="gradient-text">MENTIONS LÉGALES</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
              <p>
                Le site focus-emlyon.com est édité par FOCUS, initiative audiovisuelle d'emlyon business school.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nom : FOCUS</li>
                <li>Statut : Initiative étudiante sous la tutelle du Conseil de Corporation des Étudiants d'emlyon</li>
                <li>Siège social : emlyon business school, 144 avenue Jean Jaurès, 69007 Lyon, France</li>
                <li>Email : contact@focus-emlyon.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Hébergement</h2>
              <p>
                Le site est hébergé par Hostinger International Ltd., situé au 61 Lordou Vironos Street, 6023 Larnaca, Chypre.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de FOCUS ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Responsabilité</h2>
              <p>
                FOCUS s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, FOCUS ne peut garantir l'exactitude, la complétude ou l'actualité des informations publiées. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites. FOCUS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
