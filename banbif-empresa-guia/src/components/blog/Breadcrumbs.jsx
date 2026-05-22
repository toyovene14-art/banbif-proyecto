import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-1 text-xs text-muted-foreground py-3 flex-wrap">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1">
          {idx > 0 && <ChevronRight className="w-3 h-3 text-gold flex-shrink-0" />}
          {item.href ? (
            <Link to={item.href} className="hover:text-crimson transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium line-clamp-1">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}