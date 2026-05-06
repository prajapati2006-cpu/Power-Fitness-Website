import { MessageCircle } from 'lucide-react';
import { GYM } from '../constants/gymData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${GYM.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      title="Chat with us on WhatsApp"
    >
      <div className="relative w-14 h-14">
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-[#F97316] opacity-30 scale-100 group-hover:scale-125 transition-transform duration-500 animate-[pulseRing_3s_ease-out_infinite]" />
        <div className="absolute inset-0 rounded-full bg-[#F97316] opacity-20 scale-100 animate-[pulseRing_3s_ease-out_infinite_1s]" />
        
        {/* Button */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10"
          style={{
            background: 'var(--primary)',
            boxShadow: '0 0 20px rgba(249,115,22,0.5)',
          }}
        >
          <MessageCircle size={24} color="#000" fill="#000" />
        </div>

        {/* Tooltip */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: 'var(--bg-elevated)', color: '#fff', border: '1px solid var(--border-subtle)', fontFamily: "'DM Sans', sans-serif" }}
        >
          Chat with us
        </div>
      </div>
    </a>
  );
}
