import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, MessageCircle } from 'lucide-react';
import { FAQS, GYM } from '../../constants/gymData';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden" style={{ background: '#090909' }}>
      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 30px)',
      }} />
      {/* Title glow blob */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 h-20 blur-3xl opacity-15 rounded-full" style={{ background: 'var(--primary)' }} />

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-badge mx-auto w-fit">FAQ</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Got <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Questions?</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                border: open === i ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(255,255,255,0.06)',
                background: open === i ? 'rgba(249,115,22,0.04)' : 'rgba(17,17,17,0.8)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                style={{
                  borderLeft: open === i ? '3px solid var(--primary)' : '3px solid transparent',
                  transition: 'border-color 0.3s ease',
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold pr-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Plus size={20} color={open === i ? '#F97316' : '#A0A0A0'} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-[#A0A0A0] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px' }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-[#A0A0A0] mb-6 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Still have questions?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${GYM.phone}`} className="ghost-btn px-8 py-3 rounded-lg text-sm">
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <a href={`https://wa.me/${GYM.whatsapp}`} target="_blank" rel="noopener noreferrer" className="glow-btn px-8 py-3 rounded-lg text-sm">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
