import React from 'react'
import './About_sub.css'
import Founders from './Founders'
import img1 from './images/img2.jpg'
import img2 from './images/img4.jpg'
import pot from './images/pot.png'
import mask_pot from './images/mask_pot.png'

const About_sub = () => {
  return (
    <div>
      <div className='about_container'>
      <div className='flex'>
        <div className='image-assembler'>
          <img className='img_p1 img_fit2' src={img1} alt="" />
          <img className='img_p2 img_fit2' src={img1} alt="" />
          <img className='img_p3 img_fit2' src={img1} alt="" />
          <img className='img_p4 img_fit2' src={img1} alt="" />
          <hr className='line' />
          <hr className='line2'/>
          <hr className='line3'/>
          <hr className='line4'/>
        </div>
        <div className='About_desc'>
          <h1 className='about-title'>About Us</h1>
          <p className='about-sub-title'>Welcome to Handicrafts</p>
          <p className='about-sub-desc'>At [Your Website Name], we believe in the beauty and uniqueness of handmade crafts. Our journey began with a passion for creativity and a desire to share exquisite, handcrafted products with the world. Each item in our collection is a testament to the artistry, skill, and love that goes into every piece.</p>
        </div>
      </div>
    </div>
    <div className='text-wave-bg1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,288C480,288,600,256,720,245.3C840,235,960,245,1080,245.3C1200,245,1320,235,1380,229.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <div className='desc-center'>
    <h1 className='about-title'>Our Story</h1>
        <p className='about-sub-desc'>[Your Website Name] was founded in [Year] by [Founder's Name], a dedicated artisan with a vision to create a platform where handmade crafts can be celebrated and appreciated. From humble beginnings in a small studio, our brand has grown into a thriving online community that connects artisans and craft lovers from around the globe.</p>
    </div>
   <svg className='rem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div className='about_container'>
      <div className='flex'>
      <div className='About_desc'>
          <h1 className='about-title'>About Us</h1>
          <p className='about-sub-title'>Welcome to Handicrafts</p>
          <p className='about-sub-desc'>At [Your Website Name], we believe in the beauty and uniqueness of handmade crafts. Our journey began with a passion for creativity and a desire to share exquisite, handcrafted products with the world. Each item in our collection is a testament to the artistry, skill, and love that goes into every piece.</p>
        </div>
        <div className='image-assembler'>
          <img className='img_p1 img_fit2' src={img1} alt="" />
          <img className='img_p2 img_fit2' src={img1} alt="" />
          <img className='img_p3 img_fit2' src={img1} alt="" />
          <img className='img_p4 img_fit2' src={img1} alt="" />
          <hr className='line' />
          <hr className='line2'/>
          <hr className='line3'/>
          <hr className='line4'/>
        </div>
      </div>
    </div>
    <div className='text-wave-bg1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,288C480,288,600,256,720,245.3C840,235,960,245,1080,245.3C1200,245,1320,235,1380,229.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <div className='desc-center'>
    <h1 className='about-title'>Our Story</h1>
        <p className='about-sub-desc'>[Your Website Name] was founded in [Year] by [Founder's Name], a dedicated artisan with a vision to create a platform where handmade crafts can be celebrated and appreciated. From humble beginnings in a small studio, our brand has grown into a thriving online community that connects artisans and craft lovers from around the globe.</p>
    </div>
   <svg className='rem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div>
    <div className='desc-white'>
    <h1 className='about-title'>Meet Our Artisans</h1>
    <p className='about-sub-desc'>Our talented artisans are the heart and soul of [Your Website Name]. Each artist brings their unique style and expertise to our collection, making every item a work of art. Get to know the faces behind the crafts and learn about their inspiration, techniques, and stories on our Artisans page.</p>
    </div>
    <Founders/>
    </div>
    </div>
  )
}

export default About_sub