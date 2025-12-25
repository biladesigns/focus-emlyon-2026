import Layout from "@/components/Layout";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-8">
            <span className="gradient-text">POLITIQUE DE CONFIDENTIALITÉ</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-lg">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Collecte des données</h2>
              <p>
                L'association FOCUS collecte des données personnelles uniquement lorsque vous utilisez notre formulaire de contact. Les données collectées peuvent inclure :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Message et informations relatives à votre demande</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous fournir des informations sur nos services</li>
                <li>Établir des devis pour nos prestations</li>
              </ul>
              <p className="mt-4">
                Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact avec notre association, conformément aux recommandations de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : contact@focus-emlyon.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Cookies</h2>
              <p>
                Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Aucun cookie publicitaire ou de tracking n'est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter à :
              </p>
              <p className="mt-4">
                <strong className="text-foreground">FOCUS - Association audiovisuelle</strong><br />
                emlyon business school<br />
                144 avenue Jean Jaurès<br />
                69007 Lyon, France<br />
                Email : contact@focus-emlyon.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
