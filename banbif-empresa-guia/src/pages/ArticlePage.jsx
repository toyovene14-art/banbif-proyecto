import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles-data';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import LegalWidget from '@/components/blog/LegalWidget';
import ShareButtons from '@/components/blog/ShareButtons';
import ArticleDisclaimer from '@/components/blog/ArticleDisclaimer';
import ArticleCard from '@/components/blog/ArticleCard';
import NewsletterForm from '@/components/blog/NewsletterForm';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [progress, setProgress] = useState(0);
  const [tocItems, setTocItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [focusMode, setFocusMode] = useState(false);
  const contentRef = useRef(null);

  const related = article ? getRelatedArticles(article.slug, article.category) : [];

  useEffect(() => {
    if (!contentRef.current) return;
    const headings = contentRef.current.querySelectorAll('h2[id]');
    setTocItems(Array.from(headings).map(h => ({ id: h.id, text: h.textContent })));
  }, [article]);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll('h2[id]');
        let current = '';
        headings.forEach(h => {
          if (h.getBoundingClientRect().top <= 120) current = h.id;
        });
        setActiveId(current);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <p className="text-5xl mb-4">📄</p>
          <h2 className="text-2xl font-bold text-navy mb-2">Artículo no encontrado</h2>
          <p className="text-muted-foreground mb-4">El artículo que buscas no existe o fue movido.</p>
          <Link to="/blog" className="bg-crimson text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-crimson/90 transition-colors">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-jakarta">
      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-border/30">
        <div className="reading-progress h-full transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>

      {/* Hero image */}
      {article.featured_image && (
        <div className="relative h-56 md:h-72 overflow-hidden bg-navy">
          <img src={article.featured_image} alt={article.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Inicio', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: article.category, href: `/blog?categoria=${encodeURIComponent(article.category)}` },
          { label: article.title }
        ]} />

        <div className={`flex gap-8 transition-all ${focusMode ? '' : ''}`}>
          {/* LEFT: TOC Desktop */}
          {!focusMode && (
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Contenido</h4>
                <nav className="space-y-1">
                  {tocItems.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-xs py-1.5 px-3 rounded transition-all border-l-2 leading-snug ${
                        activeId === item.id
                          ? 'border-gold text-gold bg-cream font-semibold'
                          : 'border-transparent text-muted-foreground hover:text-navy hover:border-gold/50'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0">
            {/* Article header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {article.reading_time} min de lectura
                </span>
                <button
                  onClick={() => setFocusMode(!focusMode)}
                  className="ml-auto text-xs text-muted-foreground hover:text-navy transition-colors border border-border rounded-full px-3 py-1"
                >
                  {focusMode ? '⊞ Vista normal' : '◻ Modo lectura'}
                </button>
              </div>
              <h1 className="font-bold text-navy leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                {article.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-base">{article.excerpt}</p>
            </div>

            {/* Mobile TOC */}
            {tocItems.length > 0 && (
              <div className="lg:hidden mb-6 bg-cream border-l-4 border-gold rounded-r-lg p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Tabla de contenidos</h4>
                <ul className="space-y-1">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-xs text-navy hover:text-crimson transition-colors">
                        → {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article body */}
            <div
              ref={contentRef}
              className="article-body prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Disclaimer */}
            <ArticleDisclaimer />

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-bold text-sm text-foreground mb-3">Compartir este artículo</h4>
              <ShareButtons title={article.title} />
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <h3 className="font-bold text-navy text-xl mb-5 pb-3 border-b border-gold/30">
                  Artículos relacionados
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {related.map(a => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter */}
            <div className="mt-12 max-w-lg">
              <NewsletterForm />
            </div>
          </main>

          {/* RIGHT: Legal widget desktop */}
          {!focusMode && (
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-5">
                <LegalWidget />
                <div className="bg-navy rounded-xl p-5 text-white text-center">
                  <p className="text-xs text-white/70 mb-3">¿Tienes preguntas?</p>
                  <a
                    href="https://wa.me/51957416853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                  <p className="text-xs text-white/50 mt-2">+51 957 416 853</p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}