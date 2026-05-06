import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FACILITY_IMAGES = {
  main: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80',
  cardio: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80',
  weights: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  panoramic: [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=60',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=60',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=60',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=60',
    'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=60',
  ],
};

const FEATURES = [
  { icon: '❄️', label: 'AC Gym Floor', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=70' },
  { icon: '🔒', label: 'Locker Room', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70' },
  { icon: '🅿️', label: 'Free Parking', img: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=200&q=70' },
  { icon: '💪', label: 'Expert Trainers', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&q=70' },
  { icon: '🥤', label: 'Protein Bar', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&q=70' },
  { icon: '🥊', label: 'Boxing Zone', img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=200&q=70' },
];

export default function Facility() {
  const panoramaRef = useRef<HTMLDivElement>(null);

  // Drag comparison slider
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleSliderMove = (clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <section id="facility" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge mx-auto w-fit">OUR FACILITY</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Built for{' '}
            <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Champions</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-8 h-[480px] md:h-[520px]">
          {/* Large - main */}
          <motion.div
            className="row-span-2 relative overflow-hidden rounded-2xl group"
            style={{ borderRight: '4px solid var(--primary)', clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={FACILITY_IMAGES.main}
              alt="Iron Republic main gym floor"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ animation: 'kenBurns 15s ease-in-out infinite', filter: 'brightness(0.75)' }}
            />
            <div className="absolute top-4 right-8 glass-card px-3 py-1.5 rounded-full flex items-center gap-2">
              <span>❄️</span>
              <span className="text-white text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>AC Gym Floor</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }}>
              <p className="text-white font-bold text-xl" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}>10,000 SQ FT GYM FLOOR</p>
            </div>
          </motion.div>

          {/* Medium top - cardio */}
          <motion.div
            className="relative overflow-hidden rounded-2xl group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            <img src={FACILITY_IMAGES.cardio} alt="Cardio Zone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.65)' }} />
            <div className="absolute bottom-0 inset-x-0 p-4" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }}>
              <p className="text-white text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Cardio Zone</p>
            </div>
          </motion.div>

          {/* Medium bottom - weights */}
          <motion.div
            className="relative overflow-hidden rounded-2xl group"
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            <img src={FACILITY_IMAGES.weights} alt="Free Weights Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.65)' }} />
            <div className="absolute bottom-0 inset-x-0 p-4" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }}>
              <p className="text-white text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Free Weights Area</p>
            </div>
          </motion.div>
        </div>

        {/* Panoramic Strip */}
        <div className="panoramic-strip h-28 rounded-xl overflow-hidden mb-12 relative">
          <div
            ref={panoramaRef}
            className="flex h-full"
            style={{ animation: 'marqueeScroll 30s linear infinite', width: 'max-content' }}
          >
            {[...FACILITY_IMAGES.panoramic, ...FACILITY_IMAGES.panoramic].map((src, i) => (
              <img key={i} src={src} alt="" className="h-full w-64 object-cover flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform duration-300 cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img src={f.img} alt={f.label} className="w-full h-full object-cover" style={{ filter: 'brightness(0.8)' }} />
              </div>
              <p className="text-white text-xs font-semibold text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {f.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before / After slider */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-[#A0A0A0] text-sm mb-4 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Difference is Clear
          </p>
          <div
            ref={sliderRef}
            className="comparison-slider relative rounded-2xl overflow-hidden h-56 md:h-72 select-none"
            onMouseDown={e => { dragging.current = true; handleSliderMove(e.clientX); }}
            onMouseMove={e => { if (dragging.current) handleSliderMove(e.clientX); }}
            onMouseUp={() => { dragging.current = false; }}
            onMouseLeave={() => { dragging.current = false; }}
            onTouchMove={e => handleSliderMove(e.touches[0].clientX)}
          >
            {/* "Before" */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=70"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.3) grayscale(1)' }}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-xs tracking-widest uppercase z-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>Typical Gym</div>

            {/* "After" */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.75)' }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xs tracking-widest uppercase z-10 font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--primary)' }}>Iron Republic</div>
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-0.5 z-20 pointer-events-none"
              style={{ left: `${sliderPos}%`, background: 'var(--primary)', boxShadow: '0 0 12px rgba(249,115,22,0.8)' }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'var(--primary)', boxShadow: '0 0 16px rgba(249,115,22,0.6)' }}
              >
                <span className="text-black font-bold text-xs">⇔</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
