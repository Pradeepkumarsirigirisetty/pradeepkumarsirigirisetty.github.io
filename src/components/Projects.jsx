const projects = [
  {
    id: 'polylingua-ai',
    title: 'PolyLingua AI',
    summary:
      'An offline multilingual voice assistant engineered to transcribe speech, detect language, and deliver AI-generated responses across multiple Indian languages through a structured and accessible interface.',
    tech: ['Python', 'Gradio', 'Speech AI', 'NLP', 'Multilingual'],
    image: '/images/polylingua-ai.jpg',
    github: 'https://github.com/Pradeepkumarsirigirisetty',
    demo: '#',
    details: '/projects/polylingua-ai',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    summary:
      'A responsive developer portfolio designed to showcase my projects, technical growth, and design sensibility through a refined dark-themed interface with clear hierarchy and polished presentation.',
    tech: ['React', 'JavaScript', 'CSS', 'Responsive UI', 'GitHub'],
    image: '/images/portfolio-website.jpg',
    github: 'https://github.com/Pradeepkumarsirigirisetty',
    demo: '#',
    details: '/projects/portfolio-website',
  },
  {
    id: 'uptrend',
    title: 'Uptrend',
    summary:
      'A finance-oriented web platform conceptualised to make investing and market exploration more approachable through onboarding flows, trading-focused layouts, and educational interface sections.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Finance UI', 'Auth Flow'],
    image: '/images/uptrend.jpg',
    github: 'https://github.com/Pradeepkumarsirigirisetty',
    demo: 'https://uptrend.niat.tech',
    details: '/projects/uptrend',
  },
];

function ProjectItem({ project, isLast }) {
  return (
    <article>
      <div className="project-row">
        <div className="project-thumb">
          <img src={project.image} alt={project.title} />
        </div>

        <div>
          <h3 className="project-title">
            <a
              href={`/#${project.details}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
            >
              {project.title} <span aria-hidden="true">↗</span>
            </a>
          </h3>

          <p className="project-summary">{project.summary}</p>

          <div className="project-meta">
            {project.tech.map((item) => (
              <span key={item} className="project-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={`/#${project.details}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details →
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>

      {!isLast && <div className="project-divider" />}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrap">
        <div className="projects-header">
          <div>
            <span className="section-title">Selected Work</span>
            <h2 className="projects-heading">Projects</h2>
            <p className="projects-subtext">
              A curated selection of projects that reflect my interest in AI,
              web development, interface design, and practical digital products.
            </p>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}