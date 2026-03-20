import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <section className="section-block centered-card auth-card">
      <p className="eyebrow">Welcome Back</p>
      <h2>Log in to Wise Devs</h2>
      <form className="form-grid">
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Your password" />
        </label>
        <button type="submit" className="solid-button full-width-button">
          Log in
        </button>
      </form>
      <p>
        New here? <Link to="/register" className="text-link">Create account</Link>
      </p>
    </section>
  )
}

export default LoginPage
