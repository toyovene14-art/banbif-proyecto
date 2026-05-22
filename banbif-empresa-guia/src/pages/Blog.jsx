import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleCard, { ArticleCardFeatured } from '@/components/blog/ArticleCard';
import NewsletterForm from '@/components/blog/NewsletterForm';
import { ARTICLES } from '@/lib/articles-data';
import { Search } from 'lucide-react';

const CATEGORIES = ['Todas', 'Banbif en Línea', 'Cuentas Empresariales', 'Transferencias', 'Créditos PYME', 'Guías paso a paso', 'RUC y SUNAT'];

export default function Blog() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get('categoria') || 'Todas';
  const initialQuery = params.get('q') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    setActiveCategory(p.get('categoria') || 'Todas');
    setSearchQuery(p.get('q') || '');
  }, [location.search]);

  const filtered = ARTICLES.filter(a => {
    const catMatch = activeCategory === 'Todas' || a.category === activeCategory;
    const qMatch = !searchQuery || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (a.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return catMatch && qMatch;
  });

  return (
    <div className="font-jakarta">
      {/* Header */}
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-white font-bold mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Blog Educativo
          </h1>
          <p className="text-white/70 text-sm mb-6">
            Guías gratuitas sobre banca empresarial en Perú para PYMES y emprendedores
          </p>
          {/* Search */}
          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 gap-3 max-w-lg">
            <Search className="w-4 h-4 text-white/50 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos..."
              className="bg-transparent text-white placeholder-white/40 text-sm outline-none flex-1"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-white/40 hover:text-white text-xs">✕</button>
            )}
          </div>
        </div>
        <div className="h-1 bg-gold mt-8"></div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-crimson text-white shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {searchQuery && (
          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} para "<strong>{searchQuery}</strong>"
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <h3 className="font-bold text-navy text-xl mb-2">No se encontraron artículos</h3>
            <p className="text-muted-foreground text-sm">Intenta con otra categoría o término de búsqueda</p>
            <button
              onClick={() => { setActiveCategory('Todas'); setSearchQuery(''); }}
              className="mt-4 bg-crimson text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-crimson/90 transition-colors"
            >
              Ver todos los artículos
            </button>
          </div>
        ) : (
          <>
            {/* Featured first article */}
            {activeCategory === 'Todas' && !searchQuery && filtered.length > 0 && (
              <div className="mb-8">
                <ArticleCardFeatured article={filtered[0]} />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === 'Todas' && !searchQuery ? filtered.slice(1) : filtered).map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </>
        )}

        <div className="mt-14 max-w-md mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}