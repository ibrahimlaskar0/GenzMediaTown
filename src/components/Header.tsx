import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/neon-button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update isScrolled for styling
      setIsScrolled(currentScrollY > 20);
      
      // Handle visibility based on scroll direction
      setLastScrollY(prev => {
        if (currentScrollY > prev && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < prev) {
          setIsVisible(true);
        }
        return currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      style={{
        background: isScrolled ? 'rgba(10, 10, 10, 0.4)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        borderRadius: isScrolled ? '12px' : '0',
      }}
      className={`fixed top-4 left-6 right-6 z-50 transition-all duration-500`}
    >
      <nav className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              <span className="text-white font-dm-serif text-lg tracking-wide">GenZ Media Town</span>
            </div>
          </motion.div>

          {/* All Navigation Elements on the Right */}
          <div className="flex items-center space-x-3">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-3">
              {[
                { name: 'About', id: 'testimonials', type: 'scroll' },
                { name: 'Projects', id: 'saas-projects', type: 'scroll' },
                { name: 'Contact', id: 'https://calendly.com/genzmediatown/30min', type: 'link' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.type === 'link' ? window.open(item.id, '_blank') : scrollToSection(item.id)}
                  className="text-gray-400 hover:text-[#C9A962] transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer px-4 py-2 text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('get-in-touch')}
              className="btn-professional rounded-none"
            >
              Start a Project
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;