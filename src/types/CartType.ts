
import type {Category, Size, Color, Print} from '../types/ProductType'

export type CartType ={
    id:number
    name:string
    category: Category
    sizes: Size
    inStock: boolean
    price: number
    images: string
    color: Color
    print: Print
    quantity: number
}