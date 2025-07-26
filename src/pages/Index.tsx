import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import OfferSection from '@/components/OfferSection';
import SocialProofSection from '@/components/SocialProofSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyCtaButton from '@/components/StickyCtaButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <OfferSection />
      <SocialProofSection />
      <AboutSection />
      <FAQSection />
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default Index;
