import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Lock, Phone, MessageCircle } from 'lucide-react';
import { GYM } from '../../constants/gymData';

type Period = 'monthly' | 'quarterly' | 'yearly';

const DISCOUNTS: Record<Period, number> = { monthly: 1, quarterly: 0.9, yearly: 0.8 };
const PERIOD_LABEL: Record<Period, string> = { monthly: '/mo', quarterly: '/mo', yearly: '/mo' };

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    basePrice: GYM.prices.basic,
    features: [
      { text: 'Gym Floor Access', included: true },
      { text: 'Locker Room', included: true },
      { text: 'Free Parking', included: true },
      { text: 'Protein Bar Access', included: true },
      { text: 'Personal Training', included: false },
      { text: 'Diet Consultation', included: false },
    ],
    cta: 'Get Started',
    highlight: false,
    gold: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    basePrice: GYM.prices.pro,
    badge: '⭐ Most Popular',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Personal Training (4 sessions)', included: true },
      { text: 'Free Diet Consultation', included: true },
      { text: 'CrossFit Classes', included: true },
      { text: 'Supplement Discount (10%)', included: true },
      { text: 'Dedicated Trainer', included: false },
    ],
    cta: 'Join Now →',
    highlight: true,
    gold: false,
  },
  {
    id: 'elite',
    name: 'Elite',
    basePrice: GYM.prices.elite,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited Personal Training', included: true },
      { text: 'Monthly Body Assessment', included: true },
      { text: 'Dedicated Trainer', included: true },
      { text: 'Priority Locker', included: true },
      { text: 'Boxing & MMA Access', included: true },
    ],
    cta: 'Go Elite →',
    highlight: false,
    gold: true,
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly');

  const calcPrice = (base: number) => Math.round(base * DISCOUNTS[period]);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden grain-overlay" style={{ background: '#080808' }}>
      {/* Animated gradient sweep */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          background: 'linear-gradient(120deg, transparent 0%, var(--primary) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'gradientSweep 8s linear infinite',
        }}
      />

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-badge mx-auto w-fit">MEMBERSHIP</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Pick Your <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Plan</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {(['monthly', 'quarterly', 'yearly'] as Period[]).map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: period === p ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                  color: period === p ? '#000' : '#A0A0A0',
                }}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
                {p === 'quarterly' && <span className="ml-1 text-xs font-bold text-green-400">-10%</span>}
                {p === 'yearly' && <span className="ml-1 text-xs font-bold text-green-400">-20%</span>}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-8 ${plan.highlight ? 'md:-mt-4 md:-mb-4 md:scale-[1.04]' : ''}`}
              style={{
                background: plan.highlight ? 'rgba(249,115,22,0.06)' : 'rgba(17,17,17,0.9)',
                border: plan.highlight
                  ? '2px solid var(--primary)'
                  : plan.gold
                  ? '2px solid #D4AF37'
                  : '1px solid rgba(255,255,255,0.08)',
                boxShadow: plan.highlight ? '0 0 40px rgba(249,115,22,0.2)' : 'none',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={!plan.highlight ? { y: -8, boxShadow: '0 8px 40px rgba(249,115,22,0.15)' } : {}}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black" style={{ background: 'var(--primary)', fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p className="text-[#A0A0A0] text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.gold ? '👑 ' : ''}{plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '52px', color: plan.highlight ? 'var(--primary)' : '#fff', lineHeight: 1 }}>
                    ₹{calcPrice(plan.basePrice).toLocaleString()}
                  </span>
                  <span className="text-[#A0A0A0] text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{PERIOD_LABEL[period]}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f.text} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${f.included ? 'bg-[rgba(249,115,22,0.15)]' : 'bg-[rgba(255,255,255,0.05)]'}`}>
                      {f.included
                        ? <Check size={11} color="#F97316" strokeWidth={3} />
                        : <X size={11} color="#555" strokeWidth={3} />}
                    </div>
                    <span className={f.included ? 'text-white text-sm' : 'text-[#555] text-sm line-through'} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${GYM.whatsapp}?text=Hi! I'm interested in the ${plan.name} plan.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${plan.highlight ? 'glow-btn' : 'ghost-btn'} w-full justify-center py-3 rounded-lg text-sm font-bold`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <motion.div className="text-center mt-8 space-y-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-[#A0A0A0] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No hidden charges. Cancel anytime. Free 1-day trial available.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-[#A0A0A0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
            <a href={`tel:${GYM.phone}`} className="flex items-center gap-1 hover:text-[#F97316] transition-colors"><Phone size={12} /> Call to Enquire</a>
            <a href={`https://wa.me/${GYM.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#F97316] transition-colors"><MessageCircle size={12} /> WhatsApp Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
