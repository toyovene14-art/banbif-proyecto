import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/51957416853"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white shadow-xl rounded-full transition-all duration-300 group"
      style={{
        padding: hovered ? '10px 18px 10px 14px' : '14px',
      }}
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span
        className="text-sm font-semibold overflow-hidden transition-all duration-300 whitespace-nowrap"
        style={{ maxWidth: hovered ? '180px' : '0', opacity: hovered ? 1 : 0 }}
      >
        Consulta por WhatsApp
      </span>
    </a>
  );
}