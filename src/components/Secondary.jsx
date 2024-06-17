import React from 'react'
import './Secondary.css'
import pot from './images/img6.png'
import stone from './images/stone.png'
import mask_pot from './images/mask_pot.png'

const Secondary = () => {
  return (
    <div className='secondary'>
      <div className='sector'>
        <div className='sec_img'>
        <img className='img_fit' src={mask_pot} alt="" />
        </div>
        <div className='sec_content'>
          <div className='para'>
            <h3 className='f-para'>"Discover the beauty of tradition with our exquisite handcrafted products, each piece telling a unique story of artistry and heritage."</h3>
            <p className='f-para'>Shop now and bring home the timeless charm of artisanal craftsmanship!</p>
          </div>
        </div>
      </div>
      <div className='sector'>
      <div className='sec_content'>
          <div className='para'>
            <h3 className='f-para'>"Discover the beauty of tradition with our exquisite handcrafted products, each piece telling a unique story of artistry and heritage."</h3>
            <p className='f-para'>Shop now and bring home the timeless charm of artisanal craftsmanship!</p>
          </div>
        </div>
        <div className='sec_img'>
        <img className='img_fit rotate-x-image' src={stone} alt="" />
        </div>
      </div>
      <div className='sector'>
        <div className='sec_img'>
        <img className='img_fit' src={pot} alt="" />
        </div>
        <div className='sec_content'>
          <div className='para'>
            <h3 className='f-para'>"Discover the beauty of tradition with our exquisite handcrafted products, each piece telling a unique story of artistry and heritage."</h3>
            <p className='f-para'>Shop now and bring home the timeless charm of artisanal craftsmanship!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secondary