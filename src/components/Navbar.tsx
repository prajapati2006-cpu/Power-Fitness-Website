import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { GYM } from '../constants/gymData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Facility', href: '#facility' },
  { label: 'Timings', href: '#timings' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-md" style={{ background: 'rgba(249,115,22,0.15)' }}>
              <svg width="24" height="24" viewBox="0 0 72 72" fill="none">
                <rect x="8" y="33" width="56" height="6" rx="3" fill="#F97316" />
                <rect x="4" y="24" width="12" height="24" rx="3" fill="#F97316" />
                <rect x="56" y="24" width="12" height="24" rx="3" fill="#F97316" />
                <rect x="10" y="28" width="6" height="16" rx="2" fill="#fb923c" />
                <rect x="56" y="28" width="6" height="16" rx="2" fill="#fb923c" />
              </svg>
            </div>
            <span className="text-white text-2xl tracking-wider" style={{ fontFamily: "'Bebas Neue', cursive" }}>
              Iron Republic
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${GYM.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(255,255,255,0.12)] hover:border-[#F97316] transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={16} color="#F97316" />
            </a>
            <a href="#pricing" className="glow-btn px-5 py-2.5 text-sm rounded-md font-bold">
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-72 z-40 flex flex-col pt-24 pb-8 px-8"
            style={{
              background: 'rgba(8,8,8,0.96)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col gap-6 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl tracking-wide hover:text-[#F97316] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <a
              href={`https://wa.me/${GYM.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn w-full justify-center py-3 rounded-md text-sm font-bold"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
