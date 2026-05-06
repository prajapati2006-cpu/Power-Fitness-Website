import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { TRAINERS } from '../../constants/gymData';

function TrainerCard({ trainer, index }: { trainer: typeof TRAINERS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.innerWidth < 768) return;
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(0)`;
    };
    const onLeave = () => { card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="rounded-2xl overflow-hidden group cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        transformStyle: 'preserve-3d',
        transition: 'box-shadow 0.3s ease',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ boxShadow: '0 20px 60px rgba(249,115,22,0.2)', borderColor: 'rgba(249,115,22,0.4)' }}
    >
      {/* Photo area */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          style={{ filter: 'brightness(0.8)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)' }} />
        {/* Cert badge */}
        <div className="absolute top-3 right-3 glass-card px-2 py-1 rounded-full text-xs font-semibold" style={{ color: 'var(--primary)', fontFamily: "'DM Sans', sans-serif" }}>
          {trainer.cert}
        </div>
      </div>

      {/* Info area */}
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{trainer.name}</h3>
        <p className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: 'var(--primary)', fontFamily: "'DM Sans', sans-serif" }}>
          {trainer.spec}
        </p>
        <p className="text-[#A0A0A0] text-xs mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {trainer.exp} Experience
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {trainer.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--primary)', border: '1px solid rgba(249,115,22,0.2)', fontFamily: "'DM Sans', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="https://instagram.com/ironrepublicgym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-[#A0A0A0] hover:text-[#F97316] transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <Instagram size={14} />
          @ironrepublicgym
        </a>
      </div>
    </motion.div>
  );
}

export default function Trainers() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#080808' }}>
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 60px)',
      }} />
      {/* Title glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-24 blur-3xl opacity-20 rounded-full" style={{ background: 'var(--primary)' }} />

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-badge mx-auto w-fit">MEET THE TEAM</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Trained by the <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Best</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TRAINERS.map((trainer, i) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={i} />
          ))}
        </div>

        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-[#A0A0A0] text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Want to train with us?
          </p>
          <a
            href={`https://wa.me/${TRAINERS[0] ? '919876543210' : ''}?text=Hi! I'm interested in joining as a trainer.`}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn px-8 py-3 rounded-lg text-sm"
          >
            Join as a Trainer →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
