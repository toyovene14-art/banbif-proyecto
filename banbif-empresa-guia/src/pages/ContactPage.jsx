import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import Breadcrumbs from '@/components/blog/Breadcrumbs';

export default function ContactPage() {
  const [form, setForm] = useState({ full_name: '', email: '', country: 'Perú', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactMessage.create({ ...form, read: false });
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="font-jakarta">
      {/* Header */}
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />
          <h1 className="text-white font-bold mt-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Contáctanos
          </h1>
          <p className="text-gold mt-2 text-sm">Respondemos en 24 a 48 horas hábiles</p>
        </div>
        <div className="h-1 bg-gold mt-8"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6">Envíanos tu consulta</h2>
            {success ? (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-6">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">¡Mensaje enviado correctamente!</p>
                  <p className="text-green-700 text-sm mt-1">Te responderemos dentro de 24 a 48 horas hábiles.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nombre completo *</label>
                  <input
                    type="text"
                    value={form.full_name}
                    onChange={e => setForm({ ...form, full_name: e.target.value })}
                    placeholder="Ej: Ana García"
                    className="w-full px-4 py-2.5 border border-input rounded-xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-2.5 border border-input rounded-xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">País</label>
                  <select
                    value={form.country}
                    onChange={e => setForm({ ...form, country: e.target.value })}
                    className="w-full px-4 py-2.5 border border-input rounded-xl outline-none focus:border-gold text-sm bg-background transition-all"
                  >
                    <option>Perú</option>
                    <option>Venezuela</option>
                    <option>Colombia</option>
                    <option>Ecuador</option>
                    <option>Chile</option>
                    <option>Argentina</option>
                    <option>México</option>
                    <option>España</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Asunto *</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Ej: Consulta sobre cuenta empresarial Banbif"
                    className="w-full px-4 py-2.5 border border-input rounded-xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje *</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Escribe tu consulta o comentario aquí..."
                    rows={5}
                    className="w-full px-4 py-2.5 border border-input rounded-xl outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm resize-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-crimson hover:bg-crimson/90 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60 text-sm"
                >
                  {loading ? 'Enviando...' : '📤 Enviar consulta'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6">Información de contacto</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: <Mail className="w-5 h-5 text-gold" />, label: 'Correo', value: 'exitosplus0001@gmail.com', href: 'mailto:exitosplus0001@gmail.com' },
                { icon: <Phone className="w-5 h-5 text-gold" />, label: 'WhatsApp', value: '+51 957 416 853', href: 'https://wa.me/51957416853' },
                { icon: <MapPin className="w-5 h-5 text-gold" />, label: 'Dirección', value: 'Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú' },
                { icon: <Clock className="w-5 h-5 text-gold" />, label: 'Atención', value: 'Respondemos en 24 a 48 horas hábiles' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-muted/40 rounded-xl border border-border">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-crimson transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/51957416853"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-bold transition-colors text-sm w-full mb-6"
            >
              💬 Escríbenos por WhatsApp
            </a>

            <div className="bg-cream border-l-4 border-gold rounded-r-xl p-5">
              <p className="text-xs font-medium" style={{ color: '#444441' }}>
                <strong style={{ color: '#8B0000' }}>Nota importante:</strong> Este es un blog educativo. Para consultas bancarias directas, contacta a Banbif Perú en su página oficial:{' '}
                <a href="https://www.banbif.com.pe" target="_blank" rel="noopener noreferrer" className="underline hover:text-crimson transition-colors">
                  www.banbif.com.pe
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}