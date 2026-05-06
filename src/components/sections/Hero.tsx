import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Play } from 'lucide-react';
import { GYM } from '../../constants/gymData';

const HERO_BG = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=90';

const TEASER_IMGS = [
  'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
];

const words1 = GYM.shortName.split(' ');
const words2 = GYM.tagline.split(' ');

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay">
      {/* Background layers */}
      {/* 1. Base photo - Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Iron Republic Gym Floor"
          className="w-full h-full object-cover"
          style={{ animation: 'kenBurns 15s ease-in-out infinite' }}
        />
      </div>

      {/* 2. Gradient overlay */}
      <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(8,8,8,0.93) 100%)' }} />

      {/* 3. Side vignette */}
      <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.5) 0%, transparent 50%, rgba(8,8,8,0.3) 100%)' }} />

      {/* 4. Perspective grid */}
      <div className="absolute inset-0 z-1 opacity-40">
        <div className="perspective-grid absolute bottom-0 left-0 right-0 h-64" />
      </div>

      {/* 5. Floating particles (CSS-based) */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: 'rgba(249,115,22,0.6)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${6 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 4}s`,
              boxShadow: '0 0 6px rgba(249,115,22,0.5)',
            }}
          />
        ))}
      </div>

      {/* Athlete silhouette (desktop) */}
      <div
        className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:flex items-end justify-end z-2 pointer-events-none"
        style={{ animation: 'float 7s ease-in-out infinite' }}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(to left, rgba(249,115,22,0.04) 0%, transparent 60%)',
            maskImage: 'linear-gradient(to left, black, transparent)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 section-wrapper pt-32 pb-48">
        <div className="max-w-3xl">
          {/* City badge */}
          <motion.div
            className="section-badge mb-6 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🏆 {GYM.city}'s Premier Gym
          </motion.div>

          {/* H1 Line 1 */}
          <div className="overflow-hidden mb-2">
            <div className="flex flex-wrap gap-4">
              {words1.map((word, i) => (
                <motion.span
                  key={i}
                  className="text-white block"
                  style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(56px, 9vw, 100px)', lineHeight: 1, letterSpacing: '0.02em' }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* H1 Line 2 — Tagline */}
          <div className="overflow-hidden mb-8">
            <div className="flex flex-wrap gap-4">
              {words2.map((word, i) => (
                <motion.span
                  key={i}
                  className="block"
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 'clamp(56px, 9vw, 100px)',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                    color: 'var(--primary)',
                    textShadow: '0 0 40px rgba(249,115,22,0.5)',
                  }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtext */}
          <motion.p
            className="text-[#A0A0A0] text-lg mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Certified trainers. 10,000 sq ft gym floor. Real results.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <a href="#pricing" className="glow-btn px-8 py-4 text-base rounded-md font-bold">
              Start Training Today →
            </a>
            <a
              href={`https://wa.me/${GYM.whatsapp}?text=Hi! I'd like a gym tour`}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn px-8 py-4 text-base rounded-md"
            >
              <Play size={16} />
              <span>Book a Tour</span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="flex items-center gap-3 text-sm text-[#A0A0A0]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex">
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#F97316" color="#F97316" />)}
            </div>
            <span>4.9 Rating</span>
            <span className="text-white/20">•</span>
            <span>{GYM.memberCount} Members</span>
            <span className="text-white/20">•</span>
            <span>Est. {GYM.yearOpened}</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom teasers */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-3 px-8 pb-0 hidden sm:flex">
        {TEASER_IMGS.map((src, i) => (
          <motion.div
            key={i}
            className="flex-1 h-28 overflow-hidden rounded-t-xl cursor-pointer group"
            style={{ border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none' }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 + i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <img
              src={src}
              alt={`Gym preview ${i+1}`}
              className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
              style={{ filter: 'brightness(0.5)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <ChevronDown size={14} className="text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
