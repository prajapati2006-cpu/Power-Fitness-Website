import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../constants/gymData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, [autoplay]);

  const prev = () => { setAutoplay(false); setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setAutoplay(false); setCurrent(c => (c + 1) % TESTIMONIALS.length); };

  // Show 3 on desktop, 1 on mobile
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS[(current + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <section className="relative py-24 overflow-hidden grain-overlay" style={{ background: '#0a0a0a' }}>
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=30" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.1)' }} />
      </div>
      {/* Giant quote marks */}
      <div className="absolute top-8 left-8 text-[200px] leading-none opacity-5 pointer-events-none" style={{ color: 'var(--primary)', fontFamily: 'serif' }}>"</div>

      <div className="relative z-10 section-wrapper">
        {/* Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Google rating strip */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Google</span>
            <div className="flex">
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#F97316" color="#F97316" />)}
            </div>
            <span className="font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>4.9</span>
            <span className="text-[#A0A0A0] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Based on 120+ reviews</span>
          </div>
          <div className="section-badge mx-auto w-fit">MEMBER STORIES</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Real People. <span style={{ color: 'var(--primary)' }}>Real Results.</span>
          </h2>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          <AnimatePresence mode="popLayout">
            {getVisible().map((t, i) => (
              <motion.div
                key={t.name + current + i}
                className="glass-card rounded-xl p-6 relative overflow-hidden"
                style={{ borderLeft: '3px solid var(--primary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid var(--primary)' }} />
                  <div>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.name}</p>
                    <p className="text-[#A0A0A0] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.duration}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => <Star key={s} size={12} fill="#F97316" color="#F97316" />)}
                </div>
                <p className="text-[#C0C0C0] text-sm leading-relaxed italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>"{t.quote}"</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="glass-card rounded-xl p-6"
              style={{ borderLeft: '3px solid var(--primary)' }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={TESTIMONIALS[current].image} alt={TESTIMONIALS[current].name} className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid var(--primary)' }} />
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{TESTIMONIALS[current].name}</p>
                  <p className="text-[#A0A0A0] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{TESTIMONIALS[current].duration}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, s) => <Star key={s} size={12} fill="#F97316" color="#F97316" />)}
              </div>
              <p className="text-[#C0C0C0] text-sm leading-relaxed italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>"{TESTIMONIALS[current].quote}"</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-[var(--primary)] transition-colors">
            <ChevronLeft size={18} color="#fff" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAutoplay(false); setCurrent(i); }}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ background: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.2)', transform: i === current ? 'scale(1.3)' : 'scale(1)' }}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-[var(--primary)] transition-colors">
            <ChevronRight size={18} color="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
}
