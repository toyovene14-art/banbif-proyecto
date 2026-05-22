import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const recentArticles = [
  { title: 'Qué es Banbif Empresas y qué servicios ofrece en 2026', slug: 'que-es-banbif-empresas-2026' },
  { title: 'Cómo abrir una cuenta corriente empresarial en Banbif', slug: 'abrir-cuenta-corriente-banbif' },
  { title: 'Banbif en Línea Empresas: guía completa', slug: 'banbif-en-linea-empresas' },
  { title: 'Transferencias en soles y dólares desde Banbif', slug: 'transferencias-banbif-empresas' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Gold rule top */}
      <div className="h-1 bg-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-crimson rounded flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm">Banbif Empresas Perú</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Blog educativo operado por <strong className="text-white">EMPRENDIMIENTO YERIKA FRANCO</strong>. Ayudamos a emprendedores y PYMES peruanas a entender y aprovechar la banca empresarial.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/51957416853"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                💬 WhatsApp: +51 957 416 853
              </a>
            </div>
          </div>

          {/* Col 2 - Recent Articles */}
          <div>
            <h3 className="font-bold text-gold mb-4 text-sm uppercase tracking-wider">Artículos Recientes</h3>
            <ul className="space-y-2">
              {recentArticles.map(a => (
                <li key={a.slug}>
                  <Link
                    to={`/articulo/${a.slug}`}
                    className="text-white/70 hover:text-gold text-sm leading-snug block transition-colors"
                  >
                    → {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h3 className="font-bold text-gold mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:exitosplus0001@gmail.com" className="hover:text-white transition-colors break-all">
                  exitosplus0001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+51957416853" className="hover:text-white transition-colors">
                  +51 957 416 853
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Av. Alfredo Mendiola 1400,<br />Independencia 15302,<br />Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Col 4 - Legal */}
          <div>
            <h3 className="font-bold text-gold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/politica-de-privacidad" className="text-white/70 hover:text-gold transition-colors">→ Política de Privacidad</Link></li>
              <li><Link to="/aviso-legal" className="text-white/70 hover:text-gold transition-colors">→ Aviso Legal</Link></li>
              <li><Link to="/acerca-de" className="text-white/70 hover:text-gold transition-colors">→ Acerca de</Link></li>
              <li><Link to="/contacto" className="text-white/70 hover:text-gold transition-colors">→ Contacto</Link></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 leading-relaxed">
                RUC: 20508231880<br />
                Registro: CRNE2026/54042<br />
                País de registro: Venezuela<br />
                Operación de contenido digital en Perú
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs text-white/50 text-center leading-relaxed">
            © 2026 <strong className="text-white/70">EMPRENDIMIENTO YERIKA FRANCO</strong> | RUC: 20508231880 | CRNE2026/54042<br />
            Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú | Tel: +51 957 416 853<br />
            <span className="text-white/40">
              Contenido de carácter exclusivamente educativo. Este blog no tiene afiliación oficial con Banbif ni con ninguna institución financiera regulada por la SBS del Perú.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}