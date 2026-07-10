export default function Footer() {
  return (
    <footer className="container" style={{ padding: '2rem', textAlign: 'center' }}>
      <hr className="hairline" style={{ marginBottom: '1.5rem' }} />
      <p className="eyebrow" style={{ opacity: 0.6 }}>
        Arina Grechkosii — Hamburg, DE — {new Date().getFullYear()}
      </p>
    </footer>
  )
}