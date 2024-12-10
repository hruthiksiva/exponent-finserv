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
          <p className='lightGrey'>Exponent Finserv was founded to bridge the gap between traditional financial services and modern needs. Driven by a vision to empower businesses and individuals. From humble beginnings, we have grown into a trusted partner, committed to innovation, trust, and enabling financial success for all.</p>
        </div>
        </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default AboutUsHero