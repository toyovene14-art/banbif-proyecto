import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';

const categoryColors = {
  'Banbif en Línea': 'bg-navy text-white',
  'Cuentas Empresariales': 'bg-crimson text-white',
  'Transferencias': 'bg-navy text-white',
  'Créditos PYME': 'bg-crimson text-white',
  'Guías paso a paso': 'bg-gold text-white',
  'RUC y SUNAT': 'bg-navy text-white',
};

export function ArticleCardFeatured({ article }) {
  return (
    <Link to={`/articulo/${article.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-navy h-72 md:h-80">
        {article.featured_image ? (
          <img src={article.featured_image} alt={article.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy/90 to-crimson/60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryColors[article.category] || 'bg-gold text-white'}`}>
            {article.category}
          </span>
          <h2 className="text-white font-bold text-xl md:text-2xl leading-tight group-hover:text-gold transition-colors line-clamp-2">
            {article.title}
          </h2>
          <p className="text-white/70 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-white/50 text-xs">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.reading_time || 8} min lectura</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articulo/${article.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
        <div className="relative h-44 overflow-hidden bg-muted">
          {article.featured_image ? (
            <img src={article.featured_image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy/10 to-crimson/10 flex items-center justify-center">
              <span className="text-4xl opacity-30">📋</span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-gold text-white'}`}>
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-[#0D3B66] text-base leading-snug group-hover:text-crimson transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {article.reading_time || 8} min lectura
            </span>
            <span className="text-crimson text-xs font-semibold group-hover:text-gold transition-colors">Leer más →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}