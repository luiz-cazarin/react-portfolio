import React from 'react'
import CV from '../../assets/cv.pdf'
import { useState } from 'react'
// rafc

const CTA = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary' onClick={()=> setActiveNav('#contact')}>Let's Talk</a>
    </div>
  )
}

export default CTA
