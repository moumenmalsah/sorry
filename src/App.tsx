import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars, Calendar, MessageCircleHeart, Gift, Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HeartBackground } from './components/HeartBackground';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-17T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b0000', '#ffb6c1', '#d4af37']
    });
  };

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden font-cairo">
      <HeartBackground />
      <MusicPlayer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <Heart className="w-20 h-20 text-romantic-red fill-romantic-red" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-amiri font-bold text-romantic-red leading-tight">
            إلى حياتي، وفاء ❤️
          </h1>
          
          <p className="text-xl md:text-2xl text-romantic-red/80 max-w-2xl mx-auto leading-relaxed">
            أنتِ لستِ فقط شريكتي، بل أنتِ عالمي كله. أردتُ أن أعبّر لكِ عن كل ما في قلبي بطريقة تليق بكِ.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLetter(true)}
            className="px-8 py-4 bg-romantic-red text-white rounded-full text-lg font-bold shadow-xl flex items-center gap-2 mx-auto"
          >
            <MessageCircleHeart />
            افتحي رسالتي لكِ
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-romantic-red opacity-50" />
        </motion.div>
      </section>

      {/* Apology Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glass-card p-8 md:p-12 text-center space-y-8"
          >
            <h2 className="text-4xl font-amiri font-bold text-romantic-red">أنا آسف جداً...</h2>
            <div className="space-y-4 text-lg md:text-xl leading-loose">
              <p>
                أعتذر من كل قلبي عن أي لحظة ضيق سببتها لكِ، وعن أي دمعة نزلت من عينيكِ الجميلتين بسببي.
              </p>
              <p>
                أنتِ أغلى ما أملك، ولا أتحمل رؤيتكِ حزينة. سامحيني يا حياتي، فقلبي لا ينبض إلا بحبكِ.
              </p>
            </div>
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              className="text-6xl"
            >
              🥺🌹
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Birthday Section */}
      <section className="py-20 px-6 relative z-10 bg-white/10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex justify-center gap-4">
              <Stars className="text-romantic-gold w-8 h-8" />
              <h2 className="text-4xl md:text-6xl font-amiri font-bold text-romantic-red">عيد ميلاد سعيد!</h2>
              <Stars className="text-romantic-gold w-8 h-8" />
            </div>
            <p className="text-romantic-gold font-bold text-xl">"على الورق فقط حالياً"</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 space-y-6"
            >
              <Gift className="w-16 h-16 text-romantic-red mx-auto" />
              <p className="text-xl">
                أعلم أن عيد ميلادكِ الحقيقي هو يوم <span className="font-bold text-romantic-red">17 أبريل</span>، لكنني لم أستطع الانتظار لأخبركِ كم أنا محظوظ بوجودكِ.
              </p>
              <motion.button
                onClick={handleConfetti}
                className="px-6 py-2 border-2 border-romantic-red text-romantic-red rounded-full hover:bg-romantic-red hover:text-white transition-all font-bold"
              >
                احتفلي معي الآن ✨
              </motion.button>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Calendar className="text-romantic-red" />
                العد التنازلي لليوم المنتظر
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'يوم', value: timeLeft.days },
                  { label: 'ساعة', value: timeLeft.hours },
                  { label: 'دقيقة', value: timeLeft.minutes },
                  { label: 'ثانية', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="glass-card p-4 flex flex-col items-center">
                    <span className="text-3xl font-bold text-romantic-red">{item.value}</span>
                    <span className="text-xs uppercase tracking-wider opacity-70">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <footer className="py-20 text-center relative z-10">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-romantic-red font-dancing text-3xl"
        >
          أحبكِ إلى الأبد، وفاء
        </motion.div>
        <p className="mt-4 text-sm opacity-50">صُنع بكل حب من أجلكِ</p>
      </footer>

      {/* Letter Modal */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowLetter(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-romantic-cream max-w-2xl w-full p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-romantic-red" />
              <button 
                onClick={() => setShowLetter(false)}
                className="absolute top-4 left-4 text-romantic-red font-bold text-xl"
              >
                ✕
              </button>
              
              <div className="space-y-6 font-amiri text-xl md:text-2xl leading-relaxed text-right">
                <h3 className="text-3xl font-bold mb-8">حبيبتي وفاء،</h3>
                <p>
                  أكتب لكِ هذه الكلمات لأقول لكِ أنكِ أجمل ما حدث في حياتي. كل يوم يمر وأنا معكِ هو عيد بالنسبة لي.
                </p>
                <p>
                  أعتذر عن كل تقصير، وأعدكِ أن أكون دائماً السند والحب الذي تستحقينه. أنتِ لستِ فقط "حياتي"، بل أنتِ الروح التي تسكن جسدي.
                </p>
                <p>
                  كل عام وأنتِ بخير، وكل عام وأنتِ ملكة قلبي. لا أطيق الانتظار حتى يوم 17 أبريل لنحتفل معاً بعامكِ الجديد.
                </p>
                <div className="mt-12 text-left font-dancing text-4xl">
                  دائماً وأبداً، <br />
                  حبيبكِ
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Sparkles className="text-romantic-gold animate-spin-slow" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
