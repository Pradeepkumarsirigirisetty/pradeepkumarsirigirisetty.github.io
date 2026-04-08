import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{
      padding: '4rem 1rem',
      borderTop: '1px solid #1e293b'
    }}>
      <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Contact</h2>
        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', maxWidth: '36rem', marginBottom: '2rem', lineHeight: 1.7 }}>
          I'm open to internships, freelance work or collaborations in AI, data
          engineering and full‑stack web development. The fastest way to reach me is email.
        </p>

        <div style={{
          display: 'flex', gap: '2rem', flexWrap: 'wrap'
        }}>
          {/* Quick links */}
          <div style={{ flex: 1, minWidth: '240px' }}>
            <h3 style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.875rem', marginBottom: '1rem' }}>
              Quick links
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <a href="mailto:pradeepkumarsirigirisetty@gmail.com" className="btn-primary">
                Email me
              </a>
              <a href="https://github.com/Pradeepkumarsirigirisetty"
                target="_blank" rel="noreferrer" className="btn-outline">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sirigirisetty-pradeep-kumar-218591340/"
                target="_blank" rel="noreferrer" className="btn-outline">
                LinkedIn
              </a>
              <a href="Pradeep_Kumar_Resume.pdf"
                target="_blank" rel="noreferrer" className="btn-outline">
                Resume (PDF)
              </a>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              I usually respond within 24–48 hours. Feel free to send project ideas or
              questions even if you're not sure yet.
            </p>
          </div>

          {/* Contact form */}
          <div style={{ flex: 1, minWidth: '240px' }}>
            <h3 style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.875rem', marginBottom: '1rem' }}>
              Contact form
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" className="form-input"
                  placeholder="Your name" value={form.name} onChange={handleChange} />
              </div>
              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="form-input"
                  placeholder="you@example.com" value={form.email} onChange={handleChange} />
              </div>
              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={3} className="form-input"
                  placeholder="Tell me about the project or role..."
                  value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="form-button">Send message</button>
              {submitted && (
                <p style={{ fontSize: '0.75rem', color: '#6ee7b7', margin: 0 }}>
                  This is a front‑end demo. Connect it to EmailJS or Formspree to receive messages.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
