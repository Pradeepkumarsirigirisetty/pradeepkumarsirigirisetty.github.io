import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mjgpdwel');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    const value = e.target.value;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(value && !valid ? 'Email is not correct.' : '');
  };

  const onSubmit = (e) => {
    if (emailError) { e.preventDefault(); return; }
    handleSubmit(e);
  };

  return (
    <section id="contact" style={{ padding: '4rem 1rem', borderTop: '1px solid #1e293b' }}>

      {/* ── Success Overlay ── */}
      {state.succeeded && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '1.5rem',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            maxWidth: '320px', width: '90%',
            animation: 'popIn 0.3s ease'
          }}>
            {/* Animated tick */}
            <svg viewBox="0 0 100 100" width="90" height="90" style={{ marginBottom: '1rem' }}>
              <circle cx="50" cy="50" r="45"
                fill="none" stroke="#34d399" strokeWidth="6"
                strokeDasharray="283" strokeDashoffset="283"
                style={{ animation: 'drawCircle 0.6s ease forwards' }} />
              <polyline points="28,52 44,68 72,36"
                fill="none" stroke="#34d399" strokeWidth="6"
                strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="70" strokeDashoffset="70"
                style={{ animation: 'drawTick 0.4s ease 0.5s forwards' }} />
            </svg>

            <p style={{ color: '#f8fafc', fontWeight: 700, fontSize: '1.15rem', margin: '0 0 0.5rem' }}>
              Message Sent!
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
              Thanks for reaching out. I'll get back to you within 24–48 hours.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#34d399', color: '#0f172a',
                border: 'none', borderRadius: '9999px',
                padding: '0.6rem 1.75rem',
                fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer'
              }}>
              Done
            </button>
          </div>

          <style>{`
            @keyframes popIn {
              from { transform: scale(0.75); opacity: 0; }
              to   { transform: scale(1);    opacity: 1; }
            }
            @keyframes drawCircle {
              to { stroke-dashoffset: 0; }
            }
            @keyframes drawTick {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </div>
      )}

      {/* ── Main Content ── */}
      <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Contact</h2>
        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', maxWidth: '36rem', marginBottom: '2rem', lineHeight: 1.7 }}>
          I'm open to internships, freelance work or collaborations in AI, data
          engineering and full‑stack web development. The fastest way to reach me is email.
        </p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

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
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

              {/* Name */}
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text"
                  className="form-input" placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email"
                  className="form-input" placeholder="you@example.com"
                  required onChange={validateEmail}
                  style={{ borderColor: emailError ? '#f87171' : '' }}
                />
                {emailError && (
                  <p style={{ fontSize: '0.75rem', color: '#f87171', margin: '0.25rem 0 0' }}>
                    ⚠ {emailError}
                  </p>
                )}
                <ValidationError field="email" prefix="Email" errors={state.errors}
                  style={{ fontSize: '0.75rem', color: '#f87171' }} />
              </div>

              {/* Message */}
              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={3}
                  className="form-input"
                  placeholder="Tell me about the project or role..."
                  required
                />
                <ValidationError field="message" prefix="Message" errors={state.errors}
                  style={{ fontSize: '0.75rem', color: '#f87171' }} />
              </div>

              {/* Submit */}
              <button
                type="submit" className="form-button"
                disabled={state.submitting || !!emailError}
                style={{ opacity: state.submitting || emailError ? 0.6 : 1 }}
              >
                {state.submitting ? 'Sending...' : 'Send message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}