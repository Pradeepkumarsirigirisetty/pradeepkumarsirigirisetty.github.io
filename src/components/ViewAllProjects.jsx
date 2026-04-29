// src/components/ViewAllProjects.jsx
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

function ProjectItem({ project, isLast }) {
  return (
    <article>
      <div className="project-row">
        <div className="project-thumb">
          <img src={project.image} alt={project.title} />
        </div>

        <div>
          <h3 className="project-title">
            <Link to={project.details} className="project-title-link">
              {project.title} <span aria-hidden="true">↗</span>
            </Link>
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
            <Link to={project.details}>View Details →</Link>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {!isLast && <div className="project-divider" />}
    </article>
  );
}

export default function ViewAllProjects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrap">
        <div className="projects-header">
          <div>
            <span className="section-title">All Work</span>
            <h2 className="projects-heading">Projects</h2>
            <p className="projects-subtext">
              A broader collection of projects covering AI, business websites,
              portfolios, and interface-focused digital products.
            </p>
          </div>
        </div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              isLast={index === projectsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}