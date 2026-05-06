import { motion } from 'framer-motion';
import { SERVICES } from '../../constants/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      {/* Faint bg texture */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=30')`,
          backgroundSize: 'cover',
          filter: 'brightness(0.15)',
        }}
      />

      <div className="relative z-10 section-wrapper">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge mx-auto w-fit">WHAT WE OFFER</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Everything You Need to{' '}
            <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Win</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              className="flip-card h-72 rounded-xl"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flip-card-inner rounded-xl">
                {/* Front */}
                <div className="flip-card-front rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                    style={{ filter: 'brightness(0.45)' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)' }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-between p-6 z-10">
                    <div className="text-5xl mt-4">{service.icon}</div>
                    <h3
                      className="text-white text-center"
                      style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '28px', letterSpacing: '0.05em' }}
                    >
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back rounded-xl flex flex-col items-center justify-center p-8 text-center gap-4"
                  style={{
                    background: 'rgba(17,17,17,0.97)',
                    border: '1px solid var(--border-glow)',
                  }}
                >
                  <div className="text-5xl" style={{ filter: 'drop-shadow(0 0 12px rgba(249,115,22,0.6))' }}>
                    {service.icon}
                  </div>
                  <h3
                    className="text-white"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', fontWeight: 700 }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-[#F97316] text-sm font-semibold hover:underline"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
