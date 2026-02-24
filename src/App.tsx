import { lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SplashCursor from './components/SplashCursor';
import { useTheme } from './hooks/useTheme';

// Lazy load heavy components
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(module => ({ default: module.TestimonialsSection })));
const SaasSection = lazy(() => import('./components/SaasSection'));
const BeginningSection = lazy(() => import('./components/BeginningSection'));
const GetInTouchSection = lazy(() => import('./components/GetInTouchSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse h-8 w-8 rounded-full bg-white/10"></div>
  </div>
);

function App() {
  const { mounted } = useTheme();

  // Prevent flash of unstyled content during hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black transition-colors duration-500 relative">
      <SplashCursor />
      <Header />
      <div className="relative z-10">
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <div id="saas-projects">
            <SaasSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BeginningSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <GetInTouchSection />
        </Suspense>
      </div>
    </div>
  );
}

export default App;