import type { CartType } from "../types/CartType"


type CartHistoryProps={
  cartHistory: CartType[]
  formatCurrency: (value: number) => string
  restoreFromHistory: (productToRestore: CartType, indexToRemove: number) => void
} 

export function CartHistory({cartHistory, formatCurrency, restoreFromHistory}: CartHistoryProps ){

  const renderizerHistory = () => {
    return (
      <div className="cart-history">
        <h2>Deleted Items</h2>

        {cartHistory.length === 0 ? (
          <p>No deleted items.</p>
        ) : (
          <ul>
            {cartHistory.map((product, index) => (
              <li
                key={`${product.id}-${product.color}-${product.print}-${product.sizes}-${index}`}
                className="history-item"
              >
                <img src={product.images} alt={product.name} />

                <h3>{product.name}</h3>
                <p>Quantity: {product.quantity}</p>
                <p>Price: {formatCurrency(product.price)}</p>
                <p>Color: {product.color}</p>
                <p>Print: {product.print}</p>
                <p>Size: {product.sizes}</p>

                <button onClick={() => restoreFromHistory(product, index)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return(<>
  {renderizerHistory()}
  
  </>)
}