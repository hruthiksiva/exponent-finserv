import React from 'react'
import aboutImg from '../assets/images/stockImages/about.png'

const AboutUsHero = () => {
  return (
    <>
    <div className='container-xl-12' style={{width:'100%', height:'700px', position:'relative'}} >
      <div style={{width:'100%', height:'400px', position:'absolute', backgroundColor:'#f2d6db', bottom:'0%'}}>
      </div>
      <div className='row'>
      <div style={{position:'absolute', bottom:'0%'}}>
        <img className='col-6'  src={aboutImg} style={{position:'relative', width:'40%', bottom:'0%', left:'10%'}}/>
        
        <div className='col-6 d-flex align-item-center' style={{position:'absolute', width:'35%', height:'100%', bottom:'0%', right:'10%',zIndex:'1', backgroundColor:' #F4F0EE'}}>
        <div className='mx-5'style={{zIndex:'2',marginTop:'40%'}}>
        <h1>The story behind how our company was founded</h1>
          <p className='lightGrey'>Vel fermentum mauris elit pellentesque neque porta orci mattis ultricies. Elementum eget urna ultrices ridiculus. Bibendum sagittis egestas elit facilisis erat urna. Sem tortor lobortis at mi.</p>
        </div>
        </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default AboutUsHero