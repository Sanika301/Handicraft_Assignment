import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='upper-svg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L120,208C240,224,480,256,720,234.7C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <div className='back'>Back to Top</div>
      </div>
      <div className='footer'>
      <div className='company'>
        <div>Company Details</div>
        <div>Contact Details</div>
      </div>
    </div>
    
    </div>
  )
}

export default Footer