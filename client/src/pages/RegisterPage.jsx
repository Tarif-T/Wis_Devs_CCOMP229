import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <section className="section-block centered-card auth-card">
      <p className="eyebrow">Join The Community</p>
      <h2>Create your account</h2>
      <form className="form-grid">
        <label>
          Full Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>
        <button type="submit" className="solid-button full-width-button">
          Sign up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login" className="text-link">Log in</Link>
      </p>
    </section>
  )
}

export default RegisterPage
