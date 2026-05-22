import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = (type) => {
    localStorage.setItem('cookie_consent', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="text-white px-4 py-3 z-50 border-b-2 border-gold" style={{ backgroundColor: '#3B0764' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm leading-snug flex-1">
          🍪 <strong>Usamos cookies</strong> para mejorar tu experiencia en este blog educativo. 
          Consulta nuestra{' '}
          <Link to="/politica-de-privacidad" className="underline hover:text-gold transition-colors">
            Política de Privacidad
          </Link>.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => accept('necessary')}
            className="px-3 py-1.5 text-xs border border-white/40 text-white hover:bg-white/10 rounded transition-colors"
          >
            Solo necesarias
          </button>
          <Link to="/politica-de-privacidad" className="px-3 py-1.5 text-xs border border-white/40 text-white hover:bg-white/10 rounded transition-colors">
            Ver política
          </Link>
          <button
            onClick={() => accept('all')}
            className="px-4 py-1.5 text-xs font-bold rounded transition-colors text-white"
            style={{ backgroundColor: '#A855F7' }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}