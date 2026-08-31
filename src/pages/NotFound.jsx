import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="app container section" style={{ minHeight: '100vh', paddingTop: '150px' }}>
      <span className="label">404</span>
      <h1 className="h1">Page not found</h1>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" className="nav-text" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>
          ← Return Home
        </Link>
      </div>
    </main>
  );
}
