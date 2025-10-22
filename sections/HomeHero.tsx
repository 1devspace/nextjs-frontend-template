import { HeroContent } from '@/components/HeroContent';
import { HeroActions } from '@/components/HeroActions';

export function HomeHero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <HeroContent />
          <HeroActions />
        </div>
      </div>
    </section>
  );
}
