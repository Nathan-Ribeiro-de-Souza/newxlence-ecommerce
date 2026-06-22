import { Link } from 'react-router-dom'

import type { ProductType } from '../types/ProductType'

type ProductProps = {
  product: ProductType
}

export function ProductCard({ product }: ProductProps) {
  const firstImage = product.variants[0]?.images[0] || ''
  const hoverImage =
    product.variants[0]?.images[1] ||
    product.variants[1]?.images[0] ||
    firstImage

  const price = product.variants[0]?.price ?? 0

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <li className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-card-image-wrapper">
          <img
            src={firstImage}
            alt={product.name}
            className="product-card-image product-card-image-main"
          />

          <img
            src={hoverImage}
            alt={product.name}
            className="product-card-image product-card-image-hover"
          />
        </div>

        <div className="product-card-info">
          <p className="product-card-category">{product.category}</p>
          <h3>{product.name}</h3>
          <p className="product-card-price">{formatCurrency(price)}</p>
        </div>
      </Link>
    </li>
  )
}