export default function ShareButtons({ title, url }) {
  const encodedUrl = encodeURIComponent(url || window.location.href);
  const encodedTitle = encodeURIComponent(title || document.title);

  const shares = [
    {
      label: 'WhatsApp',
      icon: '💬',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      label: 'Facebook',
      icon: '📘',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      label: 'Twitter/X',
      icon: '🐦',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      label: 'LinkedIn',
      icon: '💼',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {shares.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold transition-colors ${s.color}`}
        >
          <span>{s.icon}</span>
          {s.label}
        </a>
      ))}
    </div>
  );
}