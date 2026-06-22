import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="not-found-page">
      <h1>404</h1>
      <h2>Page not found</h2>

      <p>The page you are looking for does not exist.</p>

      <Link to="/">
        Back to Home
      </Link>
    </main>
  )
}