import React from 'react';
import { motion } from 'motion/react';
import { portfolioProfile } from '../../data/portfolioData';

interface PreloaderProps {
  isReady: boolean;
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ isReady, onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isReady ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => {
        if (isReady) onComplete();
      }}
      className="absolute inset-0 z-40 flex min-h-[calc(100dvh-4rem)] items-start justify-center bg-[#FDFBF7] px-4 pt-36 sm:pt-44"
      aria-label="Chargement du contenu"
      role="status"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl text-center will-change-transform motion-reduce:transform-none"
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mb-5 grid h-14 w-14 place-items-center"
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-[#D7C7B4] border-t-[#7A583E]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.05, ease: 'linear', repeat: Infinity }}
          />
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2D241E] text-xs font-bold text-[#FDFBF7] shadow-lg">
            CR
          </span>
        </motion.div>
        <motion.h2
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.3 }}
          className="text-lg font-bold text-[#2D241E] tracking-tight"
        >
          {portfolioProfile.shortName}
        </motion.h2>
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-xs text-[#7A695B] mt-1"
        >
          {portfolioProfile.subtitle}
        </motion.p>

        <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-3" aria-hidden="true">
          <span className="h-16 animate-pulse rounded-lg bg-[#EFE8DC]" />
          <span className="h-16 animate-pulse rounded-lg bg-[#F4EDE2] [animation-delay:120ms]" />
          <span className="h-16 animate-pulse rounded-lg bg-[#EFE8DC] [animation-delay:240ms]" />
        </div>
        <span className="sr-only">Le contenu est en cours de préparation.</span>
      </motion.div>
    </motion.div>
  );
};
