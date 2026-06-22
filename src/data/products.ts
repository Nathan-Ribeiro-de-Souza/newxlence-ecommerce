import type { ProductType } from '../types/ProductType'

export const products: ProductType[] =([
    {
      id: 1,
      name: 'Gojo Black and White T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [
        {
        print: 'Front',
        price: 100,
        images: ['/images/gojo-3.1.png'],
        color: 'Black',
      },
      {
        print: 'Back',
        price: 100,
        images: ['/images/gojo-3.2.png'],
        color: 'Black',
      },
    ]
  },
  {
      id: 2,
      name: 'Itadori Black and White T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [
        {
        print: 'Front',
        price: 100,
        images: ['/images/itadori-4.1.png'],
        color: 'Black'
      },
    {
      print: 'Front',
        price: 100,
        images: ['/images/itadori-4.2.png'],
        color: 'White'
    },
  {
      print: 'Back',
        price: 100,
        images: ['/images/itadori-4.3.png'],
        color: 'Black'
    },
    {
      print: 'Back',
        price: 100,
        images: ['/images/itadori-4.4.png'],
        color: 'White'
    }
  ]
  },
  {
      id: 3,
      name: 'Goku Black and White T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [
        {
        print: 'Front',
        price: 100,
        images: ['/images/goku-2.1.jpg'],
        color: 'Black'
      },
      {
        print: 'Front',
        price: 100,
        images: ['/images/goku-2.2.jpg'],
        color: 'White'
      },
    {
        print: 'BackAndFront',
        price: 150,
        images: ['/images/goku-1.2.png'],
        color: 'Black'
    },
    {
        print: 'BackAndFront',
        price: 150,
        images: ['/images/goku-1.1.png'],
        color: 'White'
    },
  ]
  },
  {
      id: 4,
      name: 'Mikey Black and White T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [{
        print: 'Front',
        price: 100,
        images: ['/images/mikey-1.1.jpg', '/images/mikey-1.2.jpg'],
        color: 'Black'
      },
      {
        print: 'Back',
        price: 100,
        images: ['/images/mikey-1.3.png', '/images/mikey-1.4.jpg'],
        color: 'Black'
      },
    ]
    },
    {
      id: 5,
      name: 'Pain Black T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [{
        print: 'Front',
        price: 100,
        images: ['/images/pain-1.1.png'],
        color: 'Black'
      }]
    },
    {
      id: 6,
      name: 'Sukuna Black and White T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [
        {
        print: 'Front',
        price: 100,
        images: ['/images/itadori-5.1.png'],
        color: 'Black'
      },
    {
        print: 'Front',
        price: 100,
        images: ['/images/itadori-5.2.png'],
        color: 'White'
      },
    {
        print: 'Back',
        price: 100,
        images: ['/images/itadori-5.3.png'],
        color: 'Black'
      },
    {
        print: 'Back',
        price: 100,
        images: ['/images/itadori-5.4.png'],
        color: 'White'
      },]
  },
  {
  id: 7,
      name: 'Pain Black T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [
        {
        print: 'Front',
        price: 100,
        images: ['/images/pain-2.1.png'],
        color: 'Black'
      }],
    },
    {
  id: 8,
      name: 'Mikey Black T-shirt',
      category: 'Animes',
      sizes: ['PP','P', 'M', 'G', 'GG'],
      description: 'Anime T-shirt',
      gender: 'Unissex',
      inStock: true,
      variants: [
        {
        print: 'Front',
        price: 100,
        images: ['/images/mikey-2.1.png', '/images/mikey-2.2' ],
        color: 'Black'
      }],
    },
])