
export type Category = 'All' | 'Animes' | 'Faith' | 'Music' | 'Arts' | 'Quotes' | 'Horror' | 'Cartoon'

export type Gender = 'All' | 'Women' | 'Men' | 'Unissex'

export type Size = '' | 'PP' | 'P' | 'M' | 'G' | 'GG'

export type Color = 'Black' | 'White'

export type Print = 'Front' | 'Back' | 'BackAndFront'

export type ProductType ={
  id:number
  name:string
  category: Category
  sizes: Size[]
  description: string
  gender: Gender
  inStock: boolean
  variants: ProductVariant[]
}

export type ProductVariant = {
  print: Print
  price: number
  images: string[]
  color: Color
}