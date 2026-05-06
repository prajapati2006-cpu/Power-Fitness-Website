import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GYM } from '../../constants/gymData';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: '#090909' }}>
      <div className="section-wrapper">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image stack */}
          <motion.div
            className="relative h-[460px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=30"
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              style={{ filter: 'brightness(0.1) blur(2px)' }}
            />
            <div className="absolute top-0 left-4 right-4 h-52 rounded-xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80" alt="Gym Floor" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-44 right-0 w-3/4 h-40 rounded-xl overflow-hidden shadow-2xl" style={{ transform: 'rotate(-3deg)', border: '4px solid #fff', zIndex: 10 }}>
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" alt="Training" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-36 rounded-xl overflow-hidden shadow-2xl" style={{ transform: 'rotate(3deg)', border: '3px solid rgba(249,115,22,0.3)', zIndex: 5 }}>
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" alt="Diet" className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 glass-card px-2 py-1 rounded-full text-xs font-semibold" style={{ color: 'var(--primary)', fontFamily: "'DM Sans', sans-serif" }}>
                ⭐ Free Nutrition Plan
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="section-badge w-fit mb-4">OUR STORY</div>
              <h2 className="mb-6" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                More Than a Gym. A{' '}
                <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Community.</span>
              </h2>
              <p className="text-[#A0A0A0] mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {GYM.name} has been the fitness home of {GYM.city} since {GYM.yearOpened}. What started as a dream to bring world-class fitness to Delhi has grown into a community of {GYM.memberCount} members forging their legacy every single day.
              </p>
            </motion.div>

            <motion.ul className="space-y-4 mb-8" variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {GYM.usps.map(usp => (
                <motion.li key={usp} className="flex items-center gap-3" variants={itemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid var(--primary)' }}>
                    <Check size={12} color="#F97316" strokeWidth={3} />
                  </div>
                  <span className="text-white font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{usp}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="glass-card rounded-xl p-6 mb-8 relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <span className="absolute top-2 left-3 text-6xl text-[#F97316] opacity-20 font-serif leading-none">"</span>
              <p className="text-white text-lg italic leading-relaxed pl-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We don't just build bodies. We build discipline, resilience, and legacy.
              </p>
            </motion.div>

            <motion.a href="#contact" className="glow-btn px-8 py-4 text-base rounded-md font-bold inline-flex" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Join Our Community →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
