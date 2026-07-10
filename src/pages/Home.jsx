export default function Home({ theme }) {
  const swirlSrc = theme === 'dark' ? '/Dark_mode.png' : '/Light_mode.png'

  return (
    <>
      <section className="grain" style={{ position: 'relative', overflow: 'hidden', padding: '2rem', minHeight: '70vh' }}>
        <img
          src={swirlSrc}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '110%',
            height: 'auto',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <span className="eyebrow">Data Science &amp; Digital Business Student</span>
            <span className="eyebrow">Hamburg, DE</span>
          </div>

          <img
            src="/DSCF4613.JPG"
            alt="Arina Grechkosii smiling outdoors in Hamburg"
            style={{
              width: '100%',
              maxWidth: '260px',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              display: 'block',
              margin: '0 0 2rem',
              border: '3px solid var(--fg)',
            }}
          />

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 9vw, 8rem)',
              lineHeight: 0.9,
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            Hi, here is
            <br />
            Arina
          </h1>
        </div>
      </section>

      <hr className="hairline" />

      <section className="container" style={{ padding: '3rem 2rem' }}>
        <span className="eyebrow">Highlights</span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem',
          }}
        >
          <article>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 0.5rem' }}>
              Fast Learner
            </h2>
            <p style={{ margin: 0, opacity: 0.85 }}>
              Comfortable picking up new tools, languages, and frameworks quickly — thrive on
              steep learning curves.
            </p>
          </article>

          <article>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 0.5rem' }}>
              Data &amp; ML
            </h2>
            <p style={{ margin: 0, opacity: 0.85 }}>
               I study how to find patterns in data and use them to make smarter decisions —
                from spotting trends to building models that predict what happens next.
            </p>
          </article>

          <article>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 0.5rem' }}>
              Multilingual
            </h2>
            <p style={{ margin: 0, opacity: 0.85 }}>
              Fluent across German, English, and Russian, moving easily between academic and
              everyday contexts in all three.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}