import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GYM } from '../constants/gymData';

const MESSAGES = ['Powering Up...', 'Loading Your Gym...', "Let's Go 💪"];

export default function LoadingScreen() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const intervals = [0, 900, 1800].map((delay, i) =>
      setTimeout(() => setMsgIdx(i), delay)
    );
    const exitTimer = setTimeout(() => setExiting(true), 2300);
    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Heartbeat pulse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)',
          animation: 'heartbeat 2s ease-in-out infinite',
        }}
      />

      {/* Logo */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Iron Republic Logo Icon */}
        <div className="mb-4 relative">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="72" rx="8" fill="rgba(249,115,22,0.1)" />
            {/* Barbell icon */}
            <rect x="8" y="33" width="56" height="6" rx="3" fill="#F97316" />
            <rect x="4" y="24" width="12" height="24" rx="3" fill="#F97316" />
            <rect x="56" y="24" width="12" height="24" rx="3" fill="#F97316" />
            <rect x="10" y="28" width="6" height="16" rx="2" fill="#fb923c" />
            <rect x="56" y="28" width="6" height="16" rx="2" fill="#fb923c" />
          </svg>
        </div>
        <h1
          className="text-white text-4xl tracking-widest"
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          {GYM.name}
        </h1>
        <p className="text-[#F97316] text-xs tracking-[0.25em] uppercase mt-1"
           style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {GYM.tagline}
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="relative w-64 h-[2px] bg-white/10 rounded-full overflow-visible">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: 'var(--primary)' }}
          initial={{ width: '0%' }}
          animate={{ width: exiting ? '100%' : '95%' }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 h-3 w-3 rounded-full bg-white -translate-y-1/2"
          style={{ boxShadow: '0 0 12px #F97316, 0 0 24px rgba(249,115,22,0.5)' }}
          initial={{ left: '0%' }}
          animate={{ left: exiting ? '98%' : '93%' }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
        />
      </div>

      {/* Cycling text */}
      <motion.p
        key={msgIdx}
        className="mt-6 text-sm tracking-[0.12em] text-[#A0A0A0]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {MESSAGES[msgIdx]}
      </motion.p>
    </motion.div>
  );
}
