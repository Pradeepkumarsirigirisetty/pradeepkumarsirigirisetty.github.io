const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'React (learning)']
  },
  {
    title: 'Backend & Data',
    items: ['Python', 'SQL (learning)', 'Data cleaning & analysis (beginner)']
  },
  {
    title: 'Tools',
    items: ['VS Code', 'Git & GitHub', 'macOS / Linux terminal']
  }
];

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '4rem 1rem',
      borderTop: '1px solid #1e293b'
    }}>
      <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Skills</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }} className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.title}>
              <h3 style={{
                fontWeight: 600, color: '#f8fafc',
                fontSize: '0.9rem', marginBottom: '0.75rem', marginTop: 0
              }}>
                {group.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.items.map(item => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
