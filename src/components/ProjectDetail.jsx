import { Link } from 'react-router-dom';

export default function ProjectDetail({
  title,
  subtitle,
  about,
  image1,
  image2,
  githubLink
}) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#020617',
        color: '#f8fafc',
        padding: '6rem 1.25rem 3rem'
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <h1 style={{ fontSize: '2.3rem', marginBottom: '0.75rem' }}>{title}</h1>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1.08rem',
            maxWidth: '52rem',
            lineHeight: 1.8
          }}
        >
          {subtitle}
        </p>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            About this project
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.9, maxWidth: '55rem' }}>
            {about}
          </p>
        </section>

        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Project screenshots
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem'
            }}
          >
            <img
              src={image1}
              alt={`${title} screenshot one`}
              style={{
                width: '100%',
                borderRadius: '1rem',
                border: '1px solid #1e293b'
              }}
            />
            <img
              src={image2}
              alt={`${title} screenshot two`}
              style={{
                width: '100%',
                borderRadius: '1rem',
                border: '1px solid #1e293b'
              }}
            />
          </div>
        </section>

        <section style={{ marginTop: '2.5rem' }}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#34d399',
              color: '#052e16',
              padding: '0.9rem 1.2rem',
              borderRadius: '999px',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            View GitHub Repository
          </a>
        </section>
      </div>
    </main>
  );
}