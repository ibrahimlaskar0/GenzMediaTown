import { ShuffleCards } from '@/components/ui/testimonial-cards';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="min-h-screen bg-black">
      <ShuffleCards />
      <div className="px-6 pb-16">
        <div className="mx-auto w-fit">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-3xl opacity-25 blur-sm bg-gradient-to-r from-white/20 via-white/5 to-white/20" />
            <div className="relative rounded-3xl border border-white/15 ring-1 ring-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_24px_rgba(255,255,255,0.05)]">
              <p className="text-center px-4 md:px-5 py-3 md:py-4">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 font-extrabold tracking-wide text-xl md:text-2xl lg:text-3xl drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] drop-shadow-[0_0_14px_rgba(167,139,250,0.35)]">
                  Worked with multiple YC backed Startups
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}