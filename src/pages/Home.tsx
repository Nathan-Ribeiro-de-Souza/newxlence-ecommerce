import { About } from '../components/About'
import { Products } from './Products'

export function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <p className="section-label">NewXLence</p>

        <h1>Wear what speaks for you.</h1>

        <p>
          T-shirts for different styles, identities and inspirations.
          Anime, music, faith, quotes, horror, art and more.
        </p>
      </section>

      <Products />

      <About />
    </main>
  )
}