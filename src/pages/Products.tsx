import { useState } from 'react'

import { ProductCard } from '../components/ProductCard'
import { SelectedCategory } from '../components/SelectCategory'
import { SelectedGender } from '../components/SelectedGender'
import { Search } from '../components/Search'

import { products } from '../data/products'

import type { Category, Gender } from '../types/ProductType'

export function Products() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedGender, setSelectedGender] = useState<Gender>('All')

  const filteredProducts = products.filter(product => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory

    const matchGender =
      selectedGender === 'All' || product.gender === selectedGender

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())

    return matchCategory && matchGender && matchSearch
  })

  return (
    <main id="products-main" className="products-page">
      <div className="products-header">
        <p className="section-label">Catalog</p>
        <h1>Choose the shirt that matches your style.</h1>
        <p>
          Browse anime, music, faith, quotes, horror, art and more.
        </p>
      </div>

      <div className="products-controls">
        <SelectedCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <SelectedGender
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />

        <Search search={search} setSearch={setSearch} />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="empty-message">No products found.</p>
      ) : (
        <ul className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </main>
  )
}