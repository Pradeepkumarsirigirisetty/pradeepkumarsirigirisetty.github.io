export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1e293b',
      padding: '1rem',
      fontSize: '0.75rem',
      color: '#64748b'
    }}>
      <div style={{
        maxWidth: '72rem', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem'
      }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Sirigirisetty Pradeep Kumar. All rights reserved.</p>
        <p style={{ margin: 0 }}>Built with React + TailwindCSS.</p>
      </div>
    </footer>
  );
}
