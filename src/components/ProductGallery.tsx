import type { Color, Print } from '../types/ProductType'

export type ProductImage = {
  src: string
  color: Color
  print: Print
  price: number
}

type ProductGalleryProps = {
  productImages: ProductImage[]
  currentImage: ProductImage
  imageIndex: number
  productName: string
  goToImage: (newIndex: number) => void
  nextImage: () => void
  previousImage: () => void
}

export function ProductGallery({
  productImages,
  currentImage,
  imageIndex,
  productName,
  goToImage,
  nextImage,
  previousImage
}: ProductGalleryProps) {
  
  return (
    <div className="product-gallery">
      <img
        className="main-product-image"
        src={currentImage.src}
        alt={productName}
      />

      <div className="product-thumbnails">
        {productImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            onClick={() => goToImage(index)}
          >
            <img
              src={image.src}
              alt={productName}
              className={index === imageIndex ? 'thumbnail active' : 'thumbnail'}
            />
          </button>
        ))}
      </div>

      <div className="gallery-actions">
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  )
}