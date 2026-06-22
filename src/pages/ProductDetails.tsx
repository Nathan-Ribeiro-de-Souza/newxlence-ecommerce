import { useParams } from 'react-router-dom'
import { useState, type Dispatch, type SetStateAction } from 'react'

import { products } from '../data/products'
import { ProductGallery, type ProductImage } from '../components/ProductGallery'

import type { Color, Print, Size } from '../types/ProductType'
import type { CartType } from '../types/CartType'

const allColors: Color[] = ['Black', 'White']
const allPrints: Print[] = ['Front', 'Back', 'BackAndFront']
const allSizes: Size[] = ['PP', 'P', 'M', 'G', 'GG']

type ProductDetailsProps = {
  cart: CartType[]
  setCart: Dispatch<SetStateAction<CartType[]>>
}

export function ProductDetails({ cart, setCart }: ProductDetailsProps) {
  
  const { id } = useParams()
  const product = products.find(product => product.id === Number(id))

  const [selectedColor, setSelectedColor] = useState<Color>(
    product?.variants[0].color ?? 'Black'
  )

  const [selectedPrint, setSelectedPrint] = useState<Print>(
    product?.variants[0].print ?? 'Front'
  )

  const [selectedSize, setSelectedSize] = useState<Size | ''>('')
  const [imageIndex, setImageIndex] = useState(0)

  if (!product) {
    return <h3>Product not found</h3>
  }

  const productImages: ProductImage[] = product.variants.flatMap(variant =>
    variant.images.map(image => ({
      src: image,
      color: variant.color,
      print: variant.print,
      price: variant.price
    }))
  )

  const currentImage = productImages[imageIndex]

  if (!currentImage) {
    return <h3>Product image not found</h3>
  }

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const goToImage = (newIndex: number) => {
    const image = productImages[newIndex]
    if (!image) return

    setImageIndex(newIndex)
    setSelectedColor(image.color)
    setSelectedPrint(image.print)
  }

  const nextImage = () => {
    if (productImages.length === 0) return

    const nextIndex = imageIndex === productImages.length - 1
      ? 0
      : imageIndex + 1

    goToImage(nextIndex)
  }

  const previousImage = () => {
    if (productImages.length === 0) return

    const previousIndex = imageIndex === 0
      ? productImages.length - 1
      : imageIndex - 1

    goToImage(previousIndex)
  }

  const goToVariantImage = (color: Color, print: Print) => {
    const newIndex = productImages.findIndex(image =>
      image.color === color && image.print === print
    )

    if (newIndex === -1) return

    goToImage(newIndex)
  }

  const isColorAvailable = (color: Color) => {
    return product.variants.some(variant =>
      variant.color === color && variant.print === selectedPrint
    )
  }

  const isPrintAvailable = (print: Print) => {
    return product.variants.some(variant =>
      variant.color === selectedColor && variant.print === print
    )
  }

  const isSizeAvailable = (size: Size) => {
    return product.sizes.includes(size)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Select Size')
      return
    }

    const isSameSelectedItem = (item: CartType) => {
      return (
        item.id === product.id &&
        item.color === currentImage.color &&
        item.print === currentImage.print &&
        item.sizes === selectedSize
      )
    }

    const itemAlreadyExists = cart.find(isSameSelectedItem)

    if (itemAlreadyExists) {
      setCart(cart.map(item =>
        isSameSelectedItem(item)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
      return
    }

    const item: CartType = {
      id: product.id,
      name: product.name,
      category: product.category,
      inStock: product.inStock,
      images: currentImage.src,
      price: currentImage.price,
      color: currentImage.color,
      print: currentImage.print,
      sizes: selectedSize,
      quantity: 1
    }

    setCart([...cart, item])
  }

  const handleBuy = () => {
    if (!selectedSize) {
      alert('Select a Size')
      return
    }

    const phoneNumber = '5551981191403'

    const message = `Olá, tenho interesse no produto:

Product: ${product.name}
Price: ${formatPrice(currentImage.price)}
Color: ${currentImage.color}
Print: ${currentImage.print}
Size: ${selectedSize}`

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(link, '_blank')
  }

  return (
    <section className="product-details-page">
      <ProductGallery
        productImages={productImages}
        currentImage={currentImage}
        imageIndex={imageIndex}
        productName={product.name}
        goToImage={goToImage}
        nextImage={nextImage}
        previousImage={previousImage}
      />

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{formatPrice(currentImage.price)}</p>

        <div className="product-options">
          <h3>Color</h3>

          <div>
            {allColors.map(color => (
              <button
                key={color}
                onClick={() => goToVariantImage(color, selectedPrint)}
                disabled={!isColorAvailable(color)}
                className={selectedColor === color ? 'optionActive' : 'option'}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="product-options">
          <h3>Print</h3>

          <div>
            {allPrints.map(print => (
              <button
                key={print}
                onClick={() => goToVariantImage(selectedColor, print)}
                disabled={!isPrintAvailable(print)}
                className={selectedPrint === print ? 'optionActive' : 'option'}
              >
                {print}
              </button>
            ))}
          </div>
        </div>

        <div className="product-options">
          <h3>Size</h3>

          <div>
            {allSizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                disabled={!isSizeAvailable(size)}
                className={selectedSize === size ? 'sizeActive' : 'size'}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-actions">
          <button onClick={handleBuy}>
            Buy
          </button>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {!product.inStock ? 'Sold out' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </section>
  )
}