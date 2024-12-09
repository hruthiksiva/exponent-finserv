import React from 'react'
import vission from '../assets/images/stockImages/vission.jpg'
import mission from '../assets/images/stockImages/mission.jpg'

const AboutMission = () => {
  return (
    <div className='container-12 px-5' style={{backgroundColor:'#e3dfdc'}}>
    <div className='row p-5 mx-5 d-flex align-items-center '>
        <div className='col-md-3 px-5'>
        <img src={vission} className='rounded-circle'style={{height:' 200px', width:'200px'}}/>
        </div>
        <div className='col-md-9'>At ProBalance, our mission is to empower businesses of all sizes to achieve financial clarity and success through expert accounting services and strategic financial guidance. We are dedicated.
        <br/><br/>We are committed to being a trusted partner in our clients' success, guiding them towards their financial goals with professionalism, integrity, and unwavering dedication.</div>
    </div>
    <div className='row bg-dark mx-auto' style={{width:'82%', height:'1px',opacity:'10%'}}></div>
    <div className='row p-5 mx-5 d-flex align-items-center'>
        <div className='col-md-9'>At ProBalance, our mission is to empower businesses of all sizes to achieve financial clarity and success through expert accounting services and strategic financial guidance. We are dedicated.
        <br/><br/>We are committed to being a trusted partner in our clients' success, guiding them towards their financial goals with professionalism, integrity, and unwavering dedication.</div>
        <div className='col-md-3 px-5'>
        <img src={mission} className='rounded-circle'style={{height:' 200px', width:'200px'}}/>
        </div>
    </div>

    </div>
  )
}

export default AboutMission

