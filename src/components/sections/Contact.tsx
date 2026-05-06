import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle, CheckCircle } from 'lucide-react';
import { GYM, SERVICES } from '../../constants/gymData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [shaking, setShaking] = useState(false);

  const validate = () => {
    const errs: Record<string, boolean> = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.phone.trim()) errs.phone = true;
    if (!form.message.trim()) errs.message = true;
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      return;
    }
    // Simulate submit - in production connect to EmailJS
    setSubmitted(true);
  };

  const CONTACT_ITEMS = [
    { icon: <Phone size={18} color="#F97316" />, label: 'Call Us', value: GYM.phone, href: `tel:${GYM.phone}` },
    { icon: <MessageCircle size={18} color="#F97316" />, label: 'WhatsApp', value: GYM.whatsapp, href: `https://wa.me/${GYM.whatsapp}` },
    { icon: <Mail size={18} color="#F97316" />, label: 'Email Us', value: GYM.email, href: `mailto:${GYM.email}` },
    { icon: <MapPin size={18} color="#F97316" />, label: 'Visit Us', value: GYM.address, href: '#location' },
    { icon: <Instagram size={18} color="#F97316" />, label: 'Follow Us', value: GYM.instagram, href: GYM.instagramUrl },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden grain-overlay" style={{ background: '#080808' }}>
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=30" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.08)' }} />
      </div>

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-badge mx-auto w-fit">GET IN TOUCH</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Start Your <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Fitness Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-4 mb-8">
              {CONTACT_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-[rgba(249,115,22,0.3)] transition-colors group"
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.1)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#A0A0A0] text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#F97316] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass-card rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <CheckCircle size={64} color="#F97316" />
                    </motion.div>
                    <h3 className="text-white text-2xl font-bold mt-6 mb-2" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}>
                      Message Sent! 💪
                    </h3>
                    <p className="text-[#A0A0A0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      We'll reach out within 24 hours!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name */}
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder=" "
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className={`form-input ${errors.name ? 'border-red-500' : ''} ${shaking && errors.name ? 'shake' : ''}`}
                        id="contact-name"
                      />
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <input
                        type="tel"
                        placeholder=" "
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                        id="contact-phone"
                      />
                      <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                    </div>

                    {/* Interest dropdown */}
                    <div className="form-group">
                      <select
                        value={form.interest}
                        onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                        className="form-input"
                        id="contact-interest"
                        style={{ paddingTop: '14px', paddingBottom: '14px' }}
                      >
                        <option value="">I'm interested in...</option>
                        {SERVICES.map(s => (
                          <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <textarea
                        placeholder=" "
                        rows={4}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                        id="contact-message"
                        style={{ paddingTop: '20px' }}
                      />
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                    </div>

                    <button type="submit" className="glow-btn w-full justify-center py-4 rounded-lg text-base font-bold">
                      Send Message →
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
