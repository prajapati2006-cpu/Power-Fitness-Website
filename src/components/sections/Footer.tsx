import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { GYM, GALLERY_IMAGES } from '../../constants/gymData';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Facility', href: '#facility' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const miniPhotos = GALLERY_IMAGES.slice(0, 4);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#060606' }}>
      {/* Film reel divider strip */}
      <div className="h-10 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex h-full" style={{ animation: 'marqueeScroll 20s linear infinite', width: 'max-content' }}>
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
            <img key={i} src={img.src} alt="" className="h-full w-20 object-cover flex-shrink-0 opacity-30" />
          ))}
        </div>
      </div>

      {/* BG photo */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=20" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.06)' }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.15)' }}>
                <svg width="22" height="22" viewBox="0 0 72 72" fill="none">
                  <rect x="8" y="33" width="56" height="6" rx="3" fill="#F97316" />
                  <rect x="4" y="24" width="12" height="24" rx="3" fill="#F97316" />
                  <rect x="56" y="24" width="12" height="24" rx="3" fill="#F97316" />
                  <rect x="10" y="28" width="6" height="16" rx="2" fill="#fb923c" />
                  <rect x="56" y="28" width="6" height="16" rx="2" fill="#fb923c" />
                </svg>
              </div>
              <span className="text-white text-2xl tracking-wider" style={{ fontFamily: "'Bebas Neue', cursive" }}>Iron Republic</span>
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Delhi's premier fitness destination. Forge your legacy at {GYM.address}.
            </p>
            <a
              href={GYM.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F97316] text-sm hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Instagram size={16} />
              {GYM.instagram}
            </a>
          </div>

          {/* Center - Quick links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A0A0A0] text-sm hover:text-[#F97316] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Mini Instagram gallery */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Gallery</h4>
            <div className="grid grid-cols-2 gap-2">
              {miniPhotos.map((photo, i) => (
                <a
                  key={i}
                  href={GYM.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg overflow-hidden group"
                  style={{ aspectRatio: '1' }}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-75 transition-all duration-300"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#555]"
          style={{ borderTop: '1px solid var(--primary)', fontFamily: "'DM Sans', sans-serif" }}
        >
          <p>© {year} {GYM.name}. All rights reserved.</p>
          <p>
            Website by{' '}
            <a href="#" className="text-[#F97316] hover:underline">Vayra Digital Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
