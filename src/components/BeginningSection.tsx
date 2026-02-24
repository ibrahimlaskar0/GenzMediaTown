export default function BeginningSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] transition-colors duration-500 relative">
      {/* Subtle borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Section label */}
        <span className="text-[#C9A962] text-sm font-medium tracking-[0.2em] uppercase">Our Vision</span>
        
        <h2 className="font-dm-serif text-4xl md:text-5xl font-normal text-white mt-6 mb-8 text-refined">
          This Is Just the <span className="text-[#C9A962]">Beginning</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-[1.8] text-elegant">
          We serve beyond design — a vision that blends SaaS, UI/UX, video motion graphics, and Generative AI. It's not just about products — it's about the emotions we spark, the stories we shape, and the connections we create through thoughtful technology and premium design.
        </p>

        {/* Elegant quote */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <blockquote className="text-xl md:text-2xl text-white/80 font-dm-serif italic leading-relaxed">
            "The future belongs to those who can blend bold design, clear strategy, and AI with emotion."
          </blockquote>
          <div className="mt-6 w-12 h-px bg-[#C9A962]/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}

