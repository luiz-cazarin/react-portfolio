import React from 'react'
// import CV from '../../assets/CV - Luiz claudio Santos Cazarin.pdf'
import CV2 from '../../assets/Curriculo - Desenvolvedor - Luiz Claudio.pdf'
// rafc

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV2} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
