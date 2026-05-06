import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { GYM } from '../../constants/gymData';

export default function Timings() {
  return (
    <section id="timings" className="relative overflow-hidden" style={{ background: '#080808' }}>
      <div className="min-h-[480px] flex flex-col lg:flex-row">
        {/* Left photo */}
        <div className="relative lg:w-3/5 h-64 lg:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80"
            alt="Early morning gym"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to right, transparent 0%, #080808 100%)' }}
          />
          <div className="absolute inset-0 flex items-end p-8 lg:p-12">
            <div>
              <div className="section-badge w-fit mb-3">WE'RE OPEN</div>
              <h2 className="text-white" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '0.02em', lineHeight: 1 }}>
                Ready When{' '}
                <span style={{ color: 'var(--primary)' }}>You Are</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Right timing card */}
        <div className="lg:w-2/5 flex items-center justify-center p-8 lg:p-12">
          <motion.div
            className="glass-card rounded-2xl p-8 w-full max-w-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Clock icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.15)' }}>
                <Clock size={18} color="#F97316" style={{ animation: 'rotateClock 8s linear infinite' }} />
              </div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>Gym Timings</h3>
            </div>

            {/* Timing rows */}
            <div className="space-y-0">
              {[
                { days: 'Monday – Saturday', time: '5:00 AM – 11:00 PM', icon: '🌅' },
                { days: 'Sunday', time: '6:00 AM – 3:00 PM', icon: '☀️' },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 group hover:px-3 transition-all duration-200 rounded-lg"
                  style={{
                    borderBottom: i < 1 ? '1px solid rgba(249,115,22,0.15)' : 'none',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(249,115,22,0.06)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{row.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.days}</p>
                    </div>
                  </div>
                  <span style={{ color: 'var(--primary)', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px' }}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-4 pt-4 text-xs text-center text-[#A0A0A0]"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', fontFamily: "'DM Sans', sans-serif" }}
            >
              🔒 Closed on National Holidays
            </div>

            <a
              href={`tel:${GYM.phone}`}
              className="glow-btn w-full justify-center py-3 mt-6 rounded-lg text-sm font-bold"
            >
              📞 Call Us: {GYM.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
