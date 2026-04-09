import React, { useState, useRef } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3" // Romantic piano track
        loop
      />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-romantic-red text-white flex items-center justify-center shadow-lg hover:bg-romantic-red/90 transition-colors"
      >
        {isPlaying ? <Music2 className="animate-pulse" /> : <Music />}
      </motion.button>

      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm text-romantic-red flex items-center justify-center shadow-md"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      )}
      
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-romantic-red shadow-sm"
        >
          شغل الموسيقى ❤️
        </motion.div>
      )}
    </div>
  );
};
