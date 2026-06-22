import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'

import { NotFound } from './pages/NotFound'
import { Contact } from './pages/Contact'
import { Navbar } from './pages/Navbar'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { ProductDetails } from './pages/ProductDetails'
import { Products } from './pages/Products'

import type { CartType } from './types/CartType'

export type Theme = 'dark' | 'light'

function App() {
  const [cart, setCart] = useState<CartType[]>(() => {
    const savedCart = localStorage.getItem('cart')

    if (!savedCart) {
      return []
    }

    try {
      return JSON.parse(savedCart)
    } catch {
      return []
    }
  })

  const [theme, setTheme] = useState<Theme>(() => {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  })

  const cartQuantity = cart.reduce((total, product) => {
    return total + product.quantity
  }, 0)

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className={`app ${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartQuantity={cartQuantity}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
        <Route path="/products/:id" element={<ProductDetails setCart={setCart} cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App