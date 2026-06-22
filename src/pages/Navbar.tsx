import { Link } from 'react-router-dom'

import { ToggleMode } from '../components/ToggleMode'
import type { Theme } from '../App'

type NavbarProps = {
  theme: Theme
  toggleTheme: () => void
  cartQuantity: number
}

export function Navbar({ theme, toggleTheme, cartQuantity }: NavbarProps) {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        New<span>XL</span>ence
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="navbar-actions">
        <Link to="/products" className="nav-icon" aria-label="Search products">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10.5 18a7.5 7.5 0 1 1 5.3-12.8A7.5 7.5 0 0 1 10.5 18Zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
            <path d="M16.2 16.2 21 21l-1.4 1.4-4.8-4.8 1.4-1.4Z" />
          </svg>
        </Link>

        <Link to="/cart" className="nav-icon cart-link" aria-label="Cart">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 18a2 2 0 1 0 .01 0H7Zm10 0a2 2 0 1 0 .01 0H17ZM6.2 6l1.1 7.2A2 2 0 0 0 9.3 15h7.8a2 2 0 0 0 1.9-1.4L21 8H8.1l-.3-2H4V4h5.5l.3 2h-3.6Zm2.2 2 .8 5h7.9l1.5-5H8.4Z" />
          </svg>

          {cartQuantity > 0 && (
            <span className="cart-badge">{cartQuantity}</span>
          )}
        </Link>

        <ToggleMode theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}