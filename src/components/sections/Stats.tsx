import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GYM, SERVICES } from '../../constants/gymData';

function CountUp({ target, suffix = '', duration = 2500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { label: 'Years of Excellence', value: new Date().getFullYear() - GYM.yearOpened, suffix: '+' },
  { label: 'Happy Members', value: 800, suffix: '+' },
  { label: 'Certified Experts', value: 12, suffix: '+' },
  { label: 'Facilities Offered', value: SERVICES.length, suffix: '' },
];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=50"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.12)' }}
        />
      </div>

      <div className="relative z-10 section-wrapper">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center px-8 py-12 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              {/* Glow divider */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-16 gradient-divider"
                />
              )}

              <div
                className="text-7xl md:text-8xl font-normal mb-3"
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  color: 'var(--primary)',
                  textShadow: '0 0 40px rgba(249,115,22,0.4)',
                  letterSpacing: '0.02em',
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="text-[#A0A0A0] text-sm uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.15em' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative barbell image */}
        <motion.div
          className="flex justify-end mt-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="w-20 h-20 rounded-full overflow-hidden"
            style={{ border: '3px solid var(--primary)', boxShadow: '0 0 20px rgba(249,115,22,0.3)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&q=80"
              alt="Barbell"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
