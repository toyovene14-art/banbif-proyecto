import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, BookOpen } from 'lucide-react';

export default function Header({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Acerca de', path: '/acerca-de' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
    else window.location.href = `/blog?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main nav row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-crimson rounded flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-sm leading-tight block">Banbif Empresas Perú</span>
              <span className="text-gold text-xs leading-tight block">Blog Educativo</span>
            </div>
            <div className="sm:hidden">
              <span className="text-white font-bold text-xs">BEP Blog</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded text-sm font-medium transition-all cursor-pointer ${
                  isActive(link.path)
                    ? 'bg-crimson text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Search desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white/10 rounded-full px-3 py-1.5 gap-2 border border-white/20">
              <Search className="w-4 h-4 text-white/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar: Transferencias, Créditos PYME..."
                className="bg-transparent text-white placeholder-white/50 text-sm outline-none w-48"
              />
            </form>

            {/* Mobile search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden text-white/80 hover:text-white p-1"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white/80 hover:text-white p-1"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="md:hidden pb-3 flex items-center bg-white/10 rounded-lg px-3 py-2 gap-2">
            <Search className="w-4 h-4 text-white/60 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar guías: Transferencias, RUC, SUNAT..."
              className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
              autoFocus
            />
          </form>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/10 pt-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-crimson text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}