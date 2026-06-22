import { useState, type Dispatch, type SetStateAction } from 'react'

import type { CartType } from '../types/CartType'
import { CartHistory } from '../components/CartHistory'

type CartProps = {
  cart: CartType[]
  setCart: Dispatch<SetStateAction<CartType[]>>
}

export function Cart({ cart, setCart }: CartProps) {
  const [cartHistory, setCartHistory] = useState<CartType[]>([])

  const isSameCartItem = (item: CartType, product: CartType) => {
    return (
      item.id === product.id &&
      item.color === product.color &&
      item.print === product.print &&
      item.sizes === product.sizes
    )
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const cartPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)

  const handleDelete = (productToDelete: CartType) => {
    setCartHistory([...cartHistory, productToDelete])
    setCart(cart.filter(item => !isSameCartItem(item, productToDelete)))
  }

  const deleteAll = () => {
    setCartHistory([...cartHistory, ...cart])
    setCart([])
  }

  const increaseQuantity = (productToIncrease: CartType) => {
    setCart(cart.map(product =>
      isSameCartItem(product, productToIncrease)
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ))
  }

  const decreaseQuantity = (productToDecrease: CartType) => {
    if (productToDecrease.quantity <= 1) {
      setCartHistory([...cartHistory, productToDecrease])
      setCart(cart.filter(product => !isSameCartItem(product, productToDecrease)))
      return
    }

    setCart(cart.map(product =>
      isSameCartItem(product, productToDecrease)
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ))
  }

  const restoreFromHistory = (productToRestore: CartType, indexToRemove: number) => {
    const itemAlreadyExists = cart.find(item =>
      isSameCartItem(item, productToRestore)
    )

    if (itemAlreadyExists) {
      setCart(cart.map(item =>
        isSameCartItem(item, productToRestore)
          ? { ...item, quantity: item.quantity + productToRestore.quantity }
          : item
      ))
    } else {
      setCart([...cart, productToRestore])
    }

    setCartHistory(cartHistory.filter((_, index) => index !== indexToRemove))
  }

  const handleCheckout = () => {
    if (cart.length === 0) return

    const phoneNumber = '5551981191403'

    const productsMessage = cart.map((product, index) => {
      return `${index + 1}. ${product.name}
- Categoria: ${product.category}
- Cor: ${product.color}
- Estampa: ${product.print}
- Tamanho: ${product.sizes}
- Quantidade: ${product.quantity}
- Valor unitário: ${formatCurrency(product.price)}
- Subtotal: ${formatCurrency(product.price * product.quantity)}`
    }).join('\n\n')

    const message = `Olá! Quero finalizar meu pedido:

${productsMessage}

Total do pedido: ${formatCurrency(cartPrice)}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  const renderizerProduct = () => {
    if (cart.length === 0) {
      return <p>No products in cart.</p>
    }

    return (
      <ul className="cart-list">
        {cart.map((product, index) => (
          <li
            key={`${product.id}-${product.color}-${product.print}-${product.sizes}-${index}`}
            className="cart-item"
          >
            <img src={product.images} alt={product.name} />

            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Product value: {formatCurrency(product.price)}</p>
            <p>Subtotal: {formatCurrency(product.price * product.quantity)}</p>
            <p>Color: {product.color}</p>
            <p>Print: {product.print}</p>
            <p>Size: {product.sizes}</p>
            <p>Status: {product.inStock ? 'In stock' : 'Sold out'}</p>

            <div className="cart-item-actions">
              <button onClick={() => decreaseQuantity(product)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product)}>+</button>
              <button onClick={() => handleDelete(product)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="cart-page">
      <h1>Cart</h1>

      {renderizerProduct()}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: {formatCurrency(cartPrice)}</h3>
          <p>Items in cart: {cart.length}</p>

          <button onClick={handleCheckout}>
            Finalize on WhatsApp
          </button>

          <button onClick={deleteAll}>
            Delete All
          </button>
        </div>

        
      )}

       <CartHistory
        cartHistory={cartHistory}
        formatCurrency={formatCurrency}
        restoreFromHistory={restoreFromHistory}
        />

    </section>
  )
}