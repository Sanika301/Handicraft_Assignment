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
    name: "Handcrafted Ceramic Vase",
    description: "A beautifully designed ceramic vase with intricate patterns.",
    price: 45.99
  },
  {
    id: 2,
    image:img1,
    name: "Wooden Elephant Sculpture",
    description: "A hand-carved wooden elephant sculpture, perfect for home decor.",
    price: 60.00
  },
  {
    id: 3,
    image:img1,
    name: "Knitted Wool Blanket",
    description: "A cozy knitted wool blanket made with natural fibers.",
    price: 80.50
  },
  {
    id: 4,
    image:img1,
    name: "Handmade Leather Wallet",
    description: "A stylish and durable leather wallet with multiple compartments.",
    price: 35.75
  },
  {
    id: 5,
    image:img1,
    name: "Bamboo Table Lamp",
    description: "An eco-friendly bamboo table lamp that provides a warm, ambient light.",
    price: 55.20
  },
  {
    id: 6,
    image: img1,
    name: "Hand-Painted Ceramic Mug",
    description: "A unique ceramic mug hand-painted with vibrant colors.",
    price: 25.30
  },
  {
    id: 7,
    image: img1,
    name: "Beaded Necklace",
    description: "A beautiful beaded necklace made with semi-precious stones.",
    price: 42.10
  },
  {
    id: 8,
    image:img1,
    name: "Woven Straw Basket",
    description: "A sturdy woven basket made from natural straw, ideal for storage.",
    price: 30.40
  }
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