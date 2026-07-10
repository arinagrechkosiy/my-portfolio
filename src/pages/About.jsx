export default function About() {
  const skills = [
    'Python & R',
    'SQL',
    'Statistics',
    'Machine Learning',
    'Data Visualization',
    'Product Strategy',
  ]

  const languages = ['German', 'English', 'Russian']

  return (
    <section
      className="container grain"
      style={{ background: 'var(--bg-soft)', padding: '3rem 2rem', minHeight: '70vh' }}
    >
      <span className="eyebrow">About</span>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          margin: '0.5rem 0 2rem',
          textTransform: 'uppercase',
          lineHeight: 0.95,
        }}
      >
        Arina Grechkosii
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        <img
          src="/Garden_pic.png"
          alt="Arina Grechkosii portrait"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            objectFit: 'cover',
            border: '3px solid var(--fg)',
          }}
        />

        <div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            I'm 24, born in Moscow, now based in Hamburg. Currently in my fourth semester of
            Data Science &amp; Digital Business at the University of Europe for Applied
            Sciences, with an exchange semester coming up in Barcelona.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            I pick things up fast — new tools, new languages, new ways of thinking about a
            problem. I like working at the intersection of data and decision-making, and I'm
            always looking for the next thing to get good at.
          </p>

          <hr className="hairline" style={{ margin: '2rem 0 1.5rem' }} />

          <span className="eyebrow">Skills</span>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
            }}
          >
            {skills.map(skill => (
              <li
                key={skill}
                className="eyebrow"
                style={{
                  border: '2px solid var(--fg)',
                  borderRadius: '999px',
                  padding: '0.4rem 0.9rem',
                }}
              >
                {skill}
              </li>
            ))}
          </ul>

          <span className="eyebrow">Languages</span>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0 0',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
            }}
          >
            {languages.map(lang => (
              <li
                key={lang}
                className="eyebrow"
                style={{
                  border: '2px solid var(--fg)',
                  borderRadius: '999px',
                  padding: '0.4rem 0.9rem',
                }}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}