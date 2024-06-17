import React from 'react'
import Footer from './Footer'
import Header from './Header'
import CardsArranger from './CardsArranger';
import img1 from './images/mask_pot.png'
import './Products.css'

const products = [
  {
    id: 1,
    image:img1,
    name: 'Product 1',
    description: 'Description for product 1',
    price: 99.99
  },
  {
    id: 2,
    image: img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  {
    id: 3,
    image: img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  {
    id: 4,
    image: img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  {
    id: 5,
    image: img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  {
    id: 6,
    image: img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  {
    id: 7,
    image: img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  {
    id: 8,
    image:img1,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 89.99
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div>
    <Header/>
    <div className='prod-container'>
      <h1> Explore Our Products</h1>
      <CardsArranger products={products} />
    </div>
    <Footer/>
    </div>
  )
}

export default Products