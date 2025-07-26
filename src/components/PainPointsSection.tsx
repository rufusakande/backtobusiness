import { useEffect, useRef, useState } from 'react';

const PainPointsSection = () => {
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

  const painPoints = [
    {
      icon: "😵‍💫",
      title: "Tu postes sans stratégie ?",
      description: "Tu publies au feeling, sans plan ni cohérence. Résultat : tes posts passent inaperçus."
    },
    {
      icon: "🤷‍♀️",
      title: "Tu ne sais jamais quoi dire ?",
      description: "Chaque publication devient un casse-tête. Tu perds des heures à chercher des idées."
    },
    {
      icon: "👻",
      title: "Tu as peur d'être invisible ?",
      description: "Malgré tes efforts, tu as l'impression que personne ne voit ton contenu."
    },
    {
      icon: "⏰",
      title: "Tu manques de temps ?",
      description: "Entre tes clients et ta com', tu cours partout sans jamais être satisfait(e) du résultat."
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-muted/30">
      <div className="container-landing">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Est-ce que ça te parle ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Si tu reconnais au moins une de ces situations, tu n'es pas seul(e). 
            C'est exactement pour ça que j'ai créé ce bootcamp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '400ms' }}>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Bonne nouvelle : il y a une solution ! 🎯
            </h3>
            <p className="text-lg text-foreground mb-6">
              En 5 jours, tu vas passer du chaos total à un plan de communication clair, 
              structuré et prêt à déployer pour toute l'année.
            </p>
            <button className="btn-primary">
              Je veux ma solution maintenant !
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;