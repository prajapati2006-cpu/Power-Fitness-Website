import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../../constants/gymData';

const TABS = ['ALL', 'GYM FLOOR', 'CARDIO', 'FACILITY'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeTab === 'ALL'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  const nextImg = () => setLightbox(i => i !== null ? (i + 1) % filtered.length : null);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden" style={{ background: '#080808' }}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-badge mx-auto w-fit">INSIDE IRON REPUBLIC</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            See It to <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Believe It</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: activeTab === tab ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: activeTab === tab ? '#000' : '#A0A0A0',
                borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + i}
                className="masonry-item relative overflow-hidden rounded-xl group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full rounded-xl object-cover"
                  style={{ height: img.tall ? '320px' : '220px' }}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.55)' }}>
                  <Search size={28} color="#F97316" />
                </div>
                <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'var(--primary)', color: '#000', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                  {img.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-[#A0A0A0] text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Follow us for daily updates</p>
          <a
            href="https://instagram.com/ironrepublicgym"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn px-8 py-3 rounded-lg text-sm"
          >
            @ironrepublicgym
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-white z-10" onClick={closeLightbox}>
              <X size={28} />
            </button>
            <button className="absolute left-6 top-1/2 -translate-y-1/2 z-10 glass-card p-2 rounded-full" onClick={e => { e.stopPropagation(); prevImg(); }}>
              <ChevronLeft size={24} color="#fff" />
            </button>
            <motion.img
              key={lightbox}
              src={filtered[lightbox]?.src}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={e => e.stopPropagation()}
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 z-10 glass-card p-2 rounded-full" onClick={e => { e.stopPropagation(); nextImg(); }}>
              <ChevronRight size={24} color="#fff" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#A0A0A0] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
