import { Hero } from '@/components/ui/hero';

const HeroSection = () => {
  return (
    <Hero
      id="hero"
      title={
        <>
          Crafting Impactful Stories with{' '}
          <span className="text-warm-gold">Motion</span>{' '}
          &{' '}
          <span className="text-warm-gold">Strategy</span>
        </>
      }
      subtitle="A team of editors and motion designers crafting scroll-stopping content at scale."
      actions={[
        {
          label: "Start a Project",
          href: "#get-in-touch",
          variant: "default"
        }
      ]}
      titleClassName="text-5xl md:text-6xl lg:text-7xl font-dm-serif font-normal text-refined text-white"
      subtitleClassName="text-lg md:text-xl max-w-[600px] text-gray-400 text-elegant leading-relaxed"
      actionsClassName="mt-16"
    />
  );
};

export default HeroSection;