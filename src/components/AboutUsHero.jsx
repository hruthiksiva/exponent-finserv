import React from 'react'
import aboutImg from '../assets/images/stockImages/about.png'

const AboutUsHero = () => {
  return (
    <>
    <div className="container-12 px-5">
      <div className="row p-5 m-5 d-flex align-items-center">
        <div className='col-6'>
          <img src={aboutImg}
            style={{height:'50%'}}
            className='img-fluid rounded-3'
          />
        </div>
        <div className='col-6 align-items-center'>
        <div>
        <h1>The story behind how our company was founded</h1>
          <p className='lightGrey'>Vel fermentum mauris elit pellentesque neque porta orci mattis ultricies. Elementum eget urna ultrices ridiculus. Bibendum sagittis egestas elit facilisis erat urna. Sem tortor lobortis at mi.</p>

        </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default AboutUsHero