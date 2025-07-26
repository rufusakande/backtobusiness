import { useEffect, useState } from 'react';
import graciePhoto from '@/assets/images/graciedeedeephoto.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-xl"></div>
      </div>
      
      <div className="container-landing relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className={`flex-1 text-center lg:text-left fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">Ta communication annuelle</span>
              <br />
              <span className="text-foreground">prête en</span>
              <span className="text-secondary"> 5 jours !</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Sans t'épuiser, sans tourner en rond, sans dépendre d'un CM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                🚀 Je réserve ma place
              </button>
              <button className="btn-secondary">
                📅 Découvrir le programme
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>5 jours d'accompagnement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Plan de com' complet</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className={`flex-1 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '200ms' }}>
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src={graciePhoto}
                alt="Gracie Deedee - Coach en marketing digital"
                className="relative rounded-3xl w-full h-auto object-cover shadow-2xl"
                loading="eager"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ 10 ans d'expertise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;