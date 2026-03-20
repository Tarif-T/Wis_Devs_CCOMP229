import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/discover', label: 'Discover' },
  { to: '/create-event', label: 'Create Event' },
  { to: '/dashboard', label: 'Dashboard' },
]

function NavBar() {
  return (
    <header className="top-nav">
      <div className="brand-wrap">
        <div className="brand-mark" aria-hidden="true">
          WD
        </div>
        <div>
          <p className="brand-title">Wise Devs</p>
          <p className="brand-subtitle">Find your next community event</p>
        </div>
      </div>

      <nav aria-label="Main navigation" className="primary-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="auth-actions">
        <NavLink to="/login" className="ghost-button">
          Log in
        </NavLink>
        <NavLink to="/register" className="solid-button">
          Join now
        </NavLink>
      </div>
    </header>
  )
}

export default NavBar
