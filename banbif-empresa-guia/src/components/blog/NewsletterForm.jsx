import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterForm({ variant = 'full' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    await base44.entities.Subscriber.create({ name, email, active: true });
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex items-center gap-3 text-green-700 bg-green-50 border border-green-200 rounded-xl p-4">
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-medium">¡Suscripción exitosa! Recibirás guías educativas en tu correo.</p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          className="flex-1 px-3 py-2 text-sm border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg outline-none focus:border-gold"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-gold hover:bg-gold/90 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {loading ? '...' : 'Suscribirme'}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
          <Mail className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Guías educativas en tu correo</h3>
          <p className="text-white/70 text-sm">Sobre banca empresarial en Perú. Gratis.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg outline-none focus:border-gold text-sm"
          required
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          className="w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg outline-none focus:border-gold text-sm"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-crimson hover:bg-crimson/90 text-white font-bold rounded-lg transition-colors text-sm disabled:opacity-60"
        >
          {loading ? 'Procesando...' : '📩 Suscribirme — es gratis'}
        </button>
      </form>
    </div>
  );
}