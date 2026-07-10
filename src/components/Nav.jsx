import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  opacity: isActive ? 1 : 0.75,
})

export default function Nav({ theme, toggleTheme }) {
  return (
    <header style={{ padding: '1.5rem 2rem' }}>
      <nav
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
        aria-label="Main navigation"
      >
        <span className="eyebrow">Arina Grechkosii</span>

        <ul
          style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink to="/" className="eyebrow" style={linkStyle} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="eyebrow" style={linkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="eyebrow" style={linkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="eyebrow"
          style={{
            background: 'transparent',
            border: '2px solid currentColor',
            padding: '0.4rem 0.9rem',
            borderRadius: '999px',
          }}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </nav>
    </header>
  )
}