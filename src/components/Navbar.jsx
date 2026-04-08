import { useState } from 'react';

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

function smoothScroll(e, href) {
  e.preventDefault();
  if (href === '#') return;
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
      background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1e293b'
    }}>
      <div style={{
        maxWidth: '72rem', margin: '0 auto',
        padding: '0.75rem 1rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#home" onClick={e => smoothScroll(e, '#home')}
          style={{ fontWeight: 600, fontSize: '1.05rem', letterSpacing: '-0.01em', textDecoration: 'none', color: '#f8fafc' }}>
          Sirigirisetty<span style={{ color: '#34d399' }}> Pradeep</span> Kumar
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
          className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={e => smoothScroll(e, l.href)}
              className="nav-link"
              style={l.label === 'Contact' ? { color: '#34d399' } : {}}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          style={{
            background: 'none', border: 'none', color: '#e2e8f0',
            fontSize: '1.3rem', cursor: 'pointer', display: 'none'
          }}
          className="mobile-toggle">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav style={{
          borderTop: '1px solid #1e293b',
          background: 'rgba(2,6,23,0.97)',
          padding: '0.75rem 1rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem'
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="nav-link-mobile"
              onClick={e => { smoothScroll(e, l.href); setOpen(false); }}
              style={l.label === 'Contact' ? { color: '#34d399' } : {}}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
