import { useEffect, useRef, useState } from 'react';

const SocialProofSection = () => {
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

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Coach en développement personnel",
      avatar: "👩‍💼",
      quote: "Gracie a transformé ma communication ! En 5 jours, j'ai eu un plan clair pour toute l'année. Plus de stress, plus de panne d'inspiration !",
      rating: 5
    },
    {
      name: "Thomas Dubois", 
      role: "Thérapeute en naturopathie",
      avatar: "👨‍⚕️",
      quote: "J'étais perdu avec les réseaux sociaux. Maintenant, j'ai une stratégie qui me ressemble et mes clients me trouvent facilement !",
      rating: 5
    },
    {
      name: "Marie Lefebvre",
      role: "Formatrice indépendante", 
      avatar: "👩‍🏫",
      quote: "Le ROI a été immédiat : 3 nouveaux clients dès le premier mois grâce à ma nouvelle stratégie. Merci Gracie !",
      rating: 5
    },
    {
      name: "Julien Bernard",
      role: "Consultant freelance",
      avatar: "👨‍💻", 
      quote: "Enfin une méthode qui va droit au but ! En 5 jours, j'ai créé plus de contenu qu'en 6 mois. C'est du concret !",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "+500",
      label: "entrepreneurs accompagnés",
      icon: "👥"
    },
    {
      number: "98%",
      label: "de satisfaction client",
      icon: "⭐"
    },
    {
      number: "+200%",
      label: "d'engagement moyen",
      icon: "📈"
    },
    {
      number: "10 ans",
      label: "d'expertise digitale",
      icon: "🏆"
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-muted/20">
      <div className="container-landing">
        {/* Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ils ont transformé leur <span className="text-primary">communication</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvre les résultats concrets obtenus par les participants des précédentes éditions
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border/50">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className={`bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-8 text-center fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            🔒 Une formation de confiance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>Méthode éprouvée</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💯</span>
              <span>Satisfait ou remboursé</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔐</span>
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>Certificat inclus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;