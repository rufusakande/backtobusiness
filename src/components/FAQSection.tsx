import { useEffect, useRef, useState } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "Et si je suis débutant(e) sur les réseaux sociaux ?",
      answer: "Parfait ! Ce bootcamp est justement conçu pour les débutants. Je pars du principe que tu commences de zéro et je t'explique tout étape par étape, sans jargon compliqué."
    },
    {
      question: "Est-ce que c'est en live ou en replay ?",
      answer: "Les sessions sont en live pour favoriser les échanges, mais tout est enregistré ! Tu auras accès à vie aux replays si tu ne peux pas être présent(e) en direct."
    },
    {
      question: "Combien de temps dois-je y consacrer par jour ?",
      answer: "Environ 1h30 par jour : 1h de session live + 30 minutes pour appliquer les exercices. C'est intensif mais sur seulement 5 jours !"
    },
    {
      question: "Ça marche pour tous les secteurs d'activité ?",
      answer: "Absolument ! Que tu sois coach, thérapeute, consultant, formateur ou artisan, la méthode s'adapte à ton domaine. On travaille sur TON activité spécifiquement."
    },
    {
      question: "Et si je ne suis pas satisfait(e) ?",
      answer: "Tu as 7 jours pour tester. Si tu n'es pas satisfait(e), je te rembourse intégralement, sans question. Je préfère que tu sois 100% convaincu(e) !"
    },
    {
      question: "Y a-t-il un suivi après les 5 jours ?",
      answer: "Oui ! Tu rejoins notre groupe privé d'alumni où tu peux poser tes questions et partager tes succès. Plus un bonus : 1 session Q&R mensuelle gratuite."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section bg-muted/20">
      <div className="container-landing">
        {/* Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Toutes les réponses aux questions que tu te poses probablement
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border/50">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className={`text-center mt-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Une autre question ? 🤔
            </h3>
            <p className="text-muted-foreground mb-6">
              N'hésite pas à me contacter directement ! Je réponds personnellement à tous tes messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                📧 Poser ma question
              </button>
              <button className="btn-secondary">
                💬 Chat WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;