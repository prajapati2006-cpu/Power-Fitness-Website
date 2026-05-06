import { motion } from 'framer-motion';
import { GYM } from '../../constants/gymData';

export default function Location() {
  return (
    <section id="location" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Find <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Iron Republic</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{ border: '2px solid rgba(249,115,22,0.2)', height: '480px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Google Maps embed */}
          <iframe
            title="Iron Republic Gym Location"
            src="https://maps.google.com/maps?q=Connaught+Place+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Gym info card overlay */}
          <div
            className="absolute top-4 left-4 glass-card rounded-xl p-4 max-w-xs"
            style={{ background: 'rgba(8,8,8,0.9)', border: '1px solid rgba(249,115,22,0.2)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.15)' }}>
                <svg width="20" height="20" viewBox="0 0 72 72" fill="none">
                  <rect x="8" y="33" width="56" height="6" rx="3" fill="#F97316" />
                  <rect x="4" y="24" width="12" height="24" rx="3" fill="#F97316" />
                  <rect x="56" y="24" width="12" height="24" rx="3" fill="#F97316" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{GYM.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">⭐</span>
                  <span className="text-white text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>4.9</span>
                  <span className="text-[#A0A0A0] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>(120+ reviews)</span>
                </div>
              </div>
            </div>
            <p className="text-[#A0A0A0] text-xs mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {GYM.address}
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=Connaught+Place+New+Delhi`}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn w-full justify-center py-2 rounded-lg text-xs font-bold"
            >
              Get Directions →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
