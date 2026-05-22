import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BookOpen, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard, { ArticleCardFeatured } from '@/components/blog/ArticleCard';
import NewsletterForm from '@/components/blog/NewsletterForm';
import { ARTICLES } from '@/lib/articles-data';

const CATEGORIES = [
  { name: 'Banbif en Línea', icon: '💻', desc: 'Plataforma digital para gestionar tu empresa' },
  { name: 'Cuentas Empresariales', icon: '🏦', desc: 'Apertura y gestión de cuentas' },
  { name: 'Transferencias', icon: '↔️', desc: 'Soles, dólares y pagos al exterior' },
  { name: 'Créditos PYME', icon: '📈', desc: 'Financiamiento y capital de trabajo' },
  { name: 'Guías paso a paso', icon: '📋', desc: 'Tutoriales prácticos para tu negocio' },
  { name: 'RUC y SUNAT', icon: '📑', desc: 'Obligaciones tributarias en Perú' },
];

const BENEFITS = [
  { icon: '✅', text: 'Guías paso a paso en español peruano' },
  { icon: '✅', text: 'Información educativa y completamente gratuita' },
  { icon: '✅', text: 'Actualizado con la realidad bancaria peruana 2026' },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/blog?q=${encodeURIComponent(query)}`);
  };

  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1, 6);

  return (
    <div className="font-jakarta">
      {/* HERO */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="Lima skyline"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-crimson/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">Blog Educativo • Lima, Perú</span>
            </div>
            <h1 className="text-white font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Aprende a sacarle el máximo provecho a tu{' '}
              <span className="text-gold">cuenta empresarial</span>{' '}
              en Banbif Perú
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Todo lo que tu empresa en Perú necesita saber sobre banca empresarial con Banbif. 
              Guías educativas gratuitas para PYMES, emprendedores y empresarios peruanos.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Busque guías: Transferencias, Créditos PYME, SUNAT..."
                  className="flex-1 py-3.5 outline-none text-foreground placeholder-muted-foreground text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-crimson hover:bg-crimson/90 text-white px-5 py-3.5 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                Buscar
              </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-4">
              {['Abrir cuenta', 'Transferencias', 'Crédito PYME', 'RUC SUNAT'].map(tag => (
                <button
                  key={tag}
                  onClick={() => { setQuery(tag); navigate(`/blog?q=${encodeURIComponent(tag)}`); }}
                  className="text-xs bg-white/10 hover:bg-white/20 text-white/80 px-3 py-1 rounded-full transition-colors border border-white/20"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold"></div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{b.icon}</span>
                <span className="text-sm font-medium text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-gold/30">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">Artículos recientes</h2>
              <p className="text-muted-foreground text-sm mt-1">Guías educativas sobre banca empresarial en Perú</p>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center gap-1 text-crimson hover:text-gold transition-colors text-sm font-semibold">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ArticleCardFeatured article={featured} />
            </div>
            <div className="flex flex-col gap-4">
              {ARTICLES.slice(1, 3).map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {ARTICLES.slice(3, 6).map(a => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson/90 text-white px-6 py-3 rounded-full font-semibold transition-colors text-sm"
            >
              Ver todos los artículos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">Categorías del blog</h2>
            <p className="text-muted-foreground text-sm">Explora por tema según las necesidades de tu empresa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.name}
                to={`/blog?categoria=${encodeURIComponent(cat.name)}`}
                className="bg-white rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border group"
              >
                <span className="text-3xl block mb-2">{cat.icon}</span>
                <h3 className="font-bold text-xs text-navy group-hover:text-crimson transition-colors leading-snug">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-tight hidden md:block">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS BLOG */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-crimson/10 border border-crimson/20 rounded-full px-3 py-1 mb-4">
                <BookOpen className="w-3.5 h-3.5 text-crimson" />
                <span className="text-crimson text-xs font-semibold uppercase tracking-wider">¿Por qué este blog?</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">
                El recurso educativo gratuito para <span className="text-crimson">empresarios peruanos</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Banbif Empresas Perú es un blog educativo operado por <strong className="text-foreground">EMPRENDIMIENTO YERIKA FRANCO</strong> (RUC: 20508231880) desde Lima, Independencia. Nuestro objetivo es ayudarte a entender la banca empresarial peruana sin tecnicismos.
              </p>
              <div className="space-y-3">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{b.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/acerca-de" className="bg-navy hover:bg-navy/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
                  Conoce más →
                </Link>
                <a
                  href="https://wa.me/51957416853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:pl-8">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL NOTICE BANNER */}
      <section className="py-8 bg-cream border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="font-bold mb-2 text-sm" style={{ color: '#5B2D8E' }}>Aviso Legal Importante</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#444441' }}>
                Este blog es de carácter <strong>exclusivamente educativo e informativo</strong>. No somos entidad bancaria regulada por la SBS del Perú. El contenido no constituye asesoría financiera ni bancaria profesional. <strong>Banbif</strong> es marca registrada del Banco Interamericano de Finanzas S.A. (RUC 20100116635), institución regulada por la SBS. Este blog no tiene ninguna afiliación, patrocinio ni relación oficial con dicha institución. Operado por <strong>EMPRENDIMIENTO YERIKA FRANCO</strong> (RUC: 20508231880), Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}