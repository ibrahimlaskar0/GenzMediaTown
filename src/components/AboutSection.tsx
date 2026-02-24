import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32 bg-[#0A0A0A] transition-colors duration-500 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Personal Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative w-80 h-96 mx-auto lg:mx-0">
              {/* Image container with subtle border */}
              <div className="absolute inset-0 rounded-sm overflow-hidden border border-white/10">
                <img 
                  src="/hedaya.jpg" 
                  alt="GenZ Media Town - Motion Design Agency" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative gold accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#C9A962]/30" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            {/* Section label */}
            <span className="text-[#C9A962] text-sm font-medium tracking-[0.2em] uppercase">About Us</span>
            
            <h2 className="text-4xl md:text-5xl font-dm-serif font-normal text-white text-refined">
              Who We Are
            </h2>
            
            <div className="space-y-6 text-base text-gray-400 font-sans leading-[1.8] text-elegant">
              <p>
                <span className="text-white">GenZ Media Town</span> — your AI-powered motion design agency obsessed with turning raw clips into scroll-stopping, thumb-freezing, audience-hooking content. Whether it's Reels, Ads, YouTube, or TikTok, we edit for one thing: making your <span className="text-[#C9A962]">brand</span> look exceptional.
              </p>
              
              <p>
                Our journey spans across creating engaging content for social media, developing innovative 
                SaaS solutions, and crafting video strategies that turn vibes into visibility.
              </p>
              
              <p>
                We harness cutting-edge AI platforms like VEO 3, Kling, and Midjourney to create AI-UGC content that transforms your brand into an unstoppable force.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              {['Motion Graphics', 'Video Editing', 'Brand Strategy', 'AI/UGC Content'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 text-sm text-gray-300 border border-white/10 hover:border-[#C9A962]/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;