import { useEffect, useState } from 'react';

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (roughly 100vh)
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-cta md:hidden">
      <button className="btn-primary w-full">
        🚀 Je réserve ma place
      </button>
    </div>
  );
};

export default StickyCtaButton;