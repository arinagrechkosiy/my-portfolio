import { useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 20

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}

    if (!values.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    if (!values.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!EMAIL_RE.test(values.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!values.message.trim()) {
      newErrors.message = 'Please enter a message.'
    } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`
    }

    return newErrors
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('https://formspree.io/f/xnjkelny', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(e.target),
        })

        if (response.ok) {
          setSubmitted(true)
          setValues({ name: '', email: '', message: '' })
        } else {
          setSubmitted(false)
        }
      } catch (err) {
        setSubmitted(false)
      }
    } else {
      setSubmitted(false)
    }
  }

  return (
    <section className="container grain" style={{ padding: '3rem 2rem', minHeight: '70vh' }}>
      <span className="eyebrow">Contact</span>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          margin: '0.5rem 0 2rem',
          textTransform: 'uppercase',
          lineHeight: 0.95,
        }}
      >
        Get in touch
      </h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
      >
        <div>
          <label htmlFor="name" className="eyebrow" style={{ display: 'block', marginBottom: '0.4rem' }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            style={inputStyle}
          />
          {errors.name && (
            <p id="name-error" role="alert" style={errorStyle}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="eyebrow" style={{ display: 'block', marginBottom: '0.4rem' }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            style={inputStyle}
          />
          {errors.email && (
            <p id="email-error" role="alert" style={errorStyle}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="eyebrow" style={{ display: 'block', marginBottom: '0.4rem' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          {errors.message && (
            <p id="message-error" role="alert" style={errorStyle}>
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="eyebrow"
          style={{
            background: 'var(--fg)',
            color: 'var(--bg)',
            border: 'none',
            padding: '0.9rem 1.5rem',
            borderRadius: '4px',
            width: 'fit-content',
          }}
        >
          Send message
        </button>

        {submitted && (
          <p role="status" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            Thanks — your message has been sent.
          </p>
        )}
      </form>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  border: '2px solid var(--fg)',
  borderRadius: '4px',
  background: 'transparent',
  color: 'inherit',
}

const errorStyle = {
  color: 'var(--accent)',
  fontSize: '0.85rem',
  marginTop: '0.4rem',
  fontWeight: 700,
}