import { useEffect, useRef, useState } from 'react';

const OfferSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: "📅",
      title: "Planning annuel complet",
      description: "Un calendrier éditorial prêt à l'emploi pour 12 mois"
    },
    {
      icon: "🎯",
      title: "Stratégie claire",
      description: "Des objectifs précis et des actions concrètes pour les atteindre"
    },
    {
      icon: "💡",
      title: "Banque d'idées illimitée",
      description: "Plus jamais à court d'inspiration pour tes contenus"
    },
    {
      icon: "⚡",
      title: "Gain de temps énorme",
      description: "Fini les heures perdues à chercher quoi poster"
    },
    {
      icon: "🚀",
      title: "Visibilité boostée",
      description: "Un contenu cohérent qui attire et engage ton audience"
    },
    {
      icon: "😌",
      title: "Sérénité retrouvée",
      description: "Maîtrise totale de ta communication sans stress"
    }
  ];

  const programContent = [
    {
      day: "Jour 1",
      title: "Clarifier ta stratégie",
      content: "Définir tes objectifs, ta cible et ton positionnement unique"
    },
    {
      day: "Jour 2", 
      title: "Créer ta ligne éditoriale",
      content: "Piliers de contenu, ton de voix et univers visuel"
    },
    {
      day: "Jour 3",
      title: "Planifier tes contenus",
      content: "Calendrier éditorial et types de publications optimisés"
    },
    {
      day: "Jour 4",
      title: "Automatiser ta production",
      content: "Templates, processus et outils pour gagner du temps"
    },
    {
      day: "Jour 5",
      title: "Mesurer et ajuster",
      content: "KPIs pertinents et plan d'optimisation continue"
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-background">
      <div className="container-landing">
        {/* Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Le bootcamp <span className="text-primary">Back to Business</span>, c'est quoi ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5 jours d'accompagnement intensif pour créer ton plan de communication annuel. 
            Du 4 août 2025, transforme ta stratégie digitale une bonne fois pour toutes !
          </p>
        </div>

        {/* Program Overview */}
        <div className={`bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                📚 Programme jour par jour
              </h3>
              <div className="space-y-4">
                {programContent.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0">
                      {item.day}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="text-accent">✨ Format Premium</span>
              </h3>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-2 text-lg">
                  <span className="text-2xl">🎥</span>
                  <span>Sessions live quotidiennes</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <span className="text-2xl">📱</span>
                  <span>Accès à vie aux replays</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <span className="text-2xl">👥</span>
                  <span>Groupe privé d'entraide</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-lg">
                  <span className="text-2xl">📋</span>
                  <span>Workbooks et templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`mb-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '200ms' }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            🎯 Ce que tu vas obtenir concrètement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '400ms' }}>
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Prêt(e) à transformer ta communication ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Rejoins le bootcamp et récupère enfin le contrôle de ta stratégie digitale !
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              🚀 Je réserve ma place maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;