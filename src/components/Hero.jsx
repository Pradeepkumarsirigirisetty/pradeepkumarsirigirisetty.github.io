export default function Hero() {
  return (
    <section id="home" style={{ paddingTop: '6rem' }}>
      <div style={{
        maxWidth: '72rem', margin: '0 auto',
        padding: '4rem 1rem',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '2.5rem',
        alignItems: 'center'
      }} className="hero-grid">

        {/* Text */}
        <div>
          <p style={{
            fontSize: '0.7rem', letterSpacing: '0.25em',
            color: '#6ee7b7', marginBottom: '0.75rem',
            textTransform: 'uppercase', fontFamily: "'DM Mono', monospace"
          }}>
            B.Tech CSE • AI & Data Engineering
          </p>

          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 600, lineHeight: 1.2,
            marginBottom: '1rem', marginTop: 0
          }}>
            First‑year AI & Data Engineering student{' '}
            <span style={{ color: '#34d399', display: 'block' }}>
              building real‑world projects.
            </span>
          </h1>

          <p style={{
            fontSize: '0.95rem', color: '#cbd5e1',
            maxWidth: '36rem', marginBottom: '1.5rem', lineHeight: 1.7
          }}>
            I'm a B.Tech 1st‑year student from Visakhapatnam, learning JavaScript,
            HTML, CSS, Bootstrap, TailwindCSS, Python, React and SQL. I like turning
            ideas from AI, data and web dev into working projects, not just tutorials.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
            <a href="#contact" className="btn-primary"
              onClick={e => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
              Contact for internships
            </a>
            <a href="https://github.com/Pradeepkumarsirigirisetty"
              target="_blank" rel="noreferrer" className="btn-outline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sirigirisetty-pradeep-kumar-218591340/"
              target="_blank" rel="noreferrer" className="btn-outline">
              LinkedIn
            </a>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            Actively looking for Summer 2026 internships in AI/Data Engineering & full‑stack.
          </p>
        </div>

        {/* Photo */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative' }}>
            <div className="glow-blob" />
            <div style={{
              position: 'relative', zIndex: 1,
              width: '18rem', borderRadius: '1.5rem',
              background: '#0f172a',
              border: '1px solid #334155',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)'
            }}>
              <img
                src="https://res.cloudinary.com/dpeojc51e/image/upload/v1774454573/myprofilepicforportfoliowebsite_sb9coq.png"
                alt="Sirigirisetty Pradeep Kumar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
