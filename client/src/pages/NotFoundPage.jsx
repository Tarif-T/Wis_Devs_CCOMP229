import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section-block centered-card">
      <p className="eyebrow">404</p>
      <h2>Page not found</h2>
      <p>The page you are trying to visit does not exist.</p>
      <Link to="/" className="solid-button">
        Back Home
      </Link>
    </section>
  )
}

export default NotFoundPage
