import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Homepage.css'
import Slider from '../components/ImageSlider'
import Main from '../components/Main'
import Secondary from '../components/Secondary'

const Homepage = () => {
  return (
    <div class="home">
      <Header/>
      <Main/>
      <Secondary/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default Homepage