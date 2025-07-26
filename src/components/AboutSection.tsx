import { useEffect, useRef, useState } from 'react';
import graciePhoto from '@/assets/images/graciedeedeephoto.jpg';

const AboutSection = () => {
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

  const achievements = [
    { icon: "🏢", text: "Fondatrice d'ABC des Réseaux" },
    { icon: "📈", text: "+500 entrepreneurs accompagnés" },
    { icon: "🎯", text: "Spécialiste stratégie digitale" },
    { icon: "📚", text: "10 ans d'expertise terrain" }
  ];

  return (
    <section ref={sectionRef} className="section bg-background">
      <div className="container-landing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform -rotate-3"></div>
              <img
                src={graciePhoto}
                alt="Gracie Deedee - Fondatrice ABC des Réseaux"
                className="relative rounded-3xl w-full h-auto object-cover shadow-2xl"
                loading="lazy"
              />
              
              {/* Quote bubble */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm font-medium">
                  "Je connais ton quotidien, je l'ai vécu !"
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Salut, moi c'est <span className="text-primary">Gracie !</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Il y a 10 ans, j'étais à ta place : <strong className="text-foreground">perdue dans ma communication</strong>, 
                à poster au hasard en espérant que ça marche.
              </p>
              
              <p>
                Aujourd'hui, je suis <strong className="text-foreground">fondatrice d'ABC des Réseaux</strong> et 
                j'ai accompagné plus de 500 entrepreneurs à clarifier leur stratégie digitale.
              </p>
              
              <p>
                Ma mission ? <strong className="text-foreground">Te donner les clés concrètes</strong> pour que 
                tu reprennes le contrôle de ta communication, sans stress et sans perte de temps.
              </p>
              
              <p className="text-foreground font-semibold">
                Je connais ton quotidien, je l'ai vécu. Et surtout, je sais exactement comment t'en sortir ! 🚀
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <span className="text-2xl">{achievement.icon}</span>
                  <span className="text-sm font-medium text-foreground">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                🎯 Mes valeurs
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Autonomie</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Clarté</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Simplicité</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Impact</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="btn-primary w-full sm:w-auto">
                🤝 Travaillons ensemble !
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;