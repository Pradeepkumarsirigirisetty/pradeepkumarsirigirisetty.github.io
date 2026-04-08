export default function About() {
  return (
    <section id="about" style={{
      padding: '4rem 1rem',
      borderTop: '1px solid #1e293b'
    }}>
      <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>About me</h2>

        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '1rem' }}>
          I'm a first‑year Computer Science student specializing in AI and Data Engineering.
          I work with JavaScript, HTML/CSS, Bootstrap, TailwindCSS and Python, and I'm
          currently learning React and SQL so I can build full‑stack apps.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '2rem' }}>
          My interests include AI projects, backend logic, trading‑related dashboards and
          automation, and performance‑focused web apps. I prefer small, real‑world projects
          over toy examples.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem', fontSize: '0.875rem', color: '#e2e8f0'
        }} className="about-grid">
          <div>
            <h3 style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.25rem' }}>Education</h3>
            <p style={{ margin: 0, color: '#cbd5e1' }}>B.Tech in Computer Science Engineering (AI & Data Engineering), 1st year — NIAT, Hyderabad.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.25rem' }}>Location</h3>
            <p style={{ margin: 0, color: '#cbd5e1' }}>Visakhapatnam, Andhra Pradesh, India.</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
