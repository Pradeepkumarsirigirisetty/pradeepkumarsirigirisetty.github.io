import { useState } from 'react';

const projects = [
  {
    id: 'p1',
    title: 'UpTrend',
    problem: 'Needed a real full-stack web application to demonstrate end-to-end development skills.',
    solution: 'Built and deployed a complete web application with responsive UI and dynamic user interactions.',
    impact: 'Live on uptrend.niat.tech — demonstrates full project lifecycle from design to deployment.',
    tech: 'HTML, CSS, JavaScript',
    caseStudy: [
      '• Designed and developed a full-stack web application from scratch.',
      '• Implemented responsive UI with dynamic user interactions.',
      '• Deployed on a live domain, showing real-world deployment workflow.',
      '• Gained hands-on experience in project planning, UI design and end-to-end delivery.',
    ],
    github: 'https://github.com/Pradeepkumarsirigirisetty',
    demo: 'https://uptrend.niat.tech',
  },
  {
    id: 'p2',
    title: 'Placement Insights Dashboard',
    problem: 'Students had no clear view of placement trends across branches and companies.',
    solution: 'Built a web dashboard that visualizes college placement data with filters for branch, company and year.',
    impact: 'Improved clarity for juniors during placement prep; they can see which skills matter for which companies.',
    tech: 'HTML, TailwindCSS, JavaScript, basic CSV parsing',
    caseStudy: [
      '• Cleaned raw placement data (missing values, inconsistent labels).',
      '• Built interactive filters in JS for branch/year/company.',
      '• Used simple charts with CSS and DOM instead of heavy libraries.',
      '• Learned how small UX changes make insights much clearer.',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 'p3',
    title: 'News & Market Explorer',
    problem: 'Hard to track tech/AI/market news from multiple sites in one place.',
    solution: 'Single-page app that fetches news from APIs with filters for topic and time, plus bookmarks.',
    impact: 'Saves time for daily tech and market updates; used as a personal dashboard.',
    tech: 'HTML, TailwindCSS, JavaScript (fetch, async/await, localStorage)',
    caseStudy: [
      '• Integrated public news APIs with error handling and loading states.',
      '• Implemented debounced search to avoid spamming the API.',
      '• Stored bookmarks in localStorage for a persistent reading list.',
      '• Focused on clean UI and keyboard-friendly navigation.',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 'p4',
    title: 'AI Study Companion (WIP)',
    problem: 'Difficult to organize notes, questions and revisions for multiple subjects.',
    solution: 'A web app that tracks topics, doubts and revision history; future version will use Python + ML.',
    impact: 'Helps plan what to revise next instead of random studying.',
    tech: 'HTML, TailwindCSS, JS; future: Python, SQL, ML',
    caseStudy: [
      '• Designed schema for subjects, topics and difficulty levels.',
      '• Built a clean UI for adding doubts and tracking their status.',
      '• Planned future API for storing data in a real database.',
      '• Learning how to structure a project for future AI features.',
    ],
    github: '#',
    demo: '#',
  },
];

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-text"><span style={{ fontWeight: 600 }}>Problem:</span> {project.problem}</p>
      <p className="project-text"><span style={{ fontWeight: 600 }}>Solution:</span> {project.solution}</p>
      <p className="project-impact">{project.impact}</p>
      <p className="project-tech">Tech: {project.tech}</p>

      <button className="project-toggle" onClick={() => setOpen(o => !o)}>
        {open ? 'Hide case study ↑' : 'View case study ↓'}
      </button>

      {open && (
        <div className="project-details">
          {project.caseStudy.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      <div className="project-links">
        {project.github !== '#' && (
          <a href={project.github} target="_blank" rel="noreferrer">GitHub repo →</a>
        )}
        {project.demo !== '#' && (
          <a href={project.demo} target="_blank" rel="noreferrer">Live demo →</a>
        )}
        {project.github === '#' && <span style={{ color: '#64748b' }}>Coming soon</span>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '4rem 1rem',
      borderTop: '1px solid #1e293b'
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'flex-end',
          gap: '1rem', marginBottom: '2rem'
        }}>
          <div>
            <h2 className="section-title">Projects (curated)</h2>
            <p style={{ fontSize: '0.875rem', color: '#cbd5e1', maxWidth: '36rem', marginTop: '0.5rem', marginBottom: 0 }}>
              A few end‑to‑end projects that show how I think about problems, not just tutorials or clones.
            </p>
          </div>
          <a href="https://github.com/Pradeepkumarsirigirisetty"
            target="_blank" rel="noreferrer"
            style={{ fontSize: '0.75rem', color: '#6ee7b7', textDecoration: 'none' }}>
            View more on GitHub →
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
