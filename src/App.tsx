import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './sections/HeroSection';
import StorySection from './sections/StorySection';
import MomentsSection from './sections/MomentsSection';
import WishesSection from './sections/WishesSection';
import GallerySection from './sections/GallerySection';
import { Heart, Music, Diamond } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize smooth scroll behavior
    const ctx = gsap.context(() => {
      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background decoration */}
      <div className="parallax-bg fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl" />
      </div>

      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-200/30 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            <Heart className="w-8 h-8" />
          </div>
        ))}
      </div>

      {/* Music Player Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            if (audioRef.current) {
              if (audioRef.current.paused) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
              }
            }
          }}
          className="w-14 h-14 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <Music className="w-6 h-6 text-white group-hover:animate-pulse" />
        </button>
        <p className="text-xs text-amber-600 mt-2 text-center font-medium">Clique pour la musique</p>
      </div>

      {/* Audio element - using a placeholder */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <StorySection />
        <MomentsSection />
        <WishesSection />
        <GallerySection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-t from-rose-100/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
            <Diamond className="w-5 h-5 text-amber-400" />
            <span className="text-amber-700 font-medium">Happy Birthday Mon Amour</span>
            <Diamond className="w-5 h-5 text-amber-400" />
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
          </div>
          <p className="text-amber-600 text-sm">
            Créé avec amour par Moumen pour sa future femme | 17 Avril 2026
          </p>
          <p className="text-amber-500 text-xs mt-2">
            "Bientôt ma femme, pour toujours mon amour" 💍❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
