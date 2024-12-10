import vission from '../assets/images/stockImages/vission.jpg'
import mission from '../assets/images/stockImages/mission.jpg'

const AboutMission = () => {
  return (
    <div className='container-12 px-5' style={{backgroundColor:'#e3dfdc'}}>
    <div className='row p-5 mx-5 d-flex align-items-center '>
        <div className='col-md-3 px-5'>
        <img src={vission} className='rounded-circle'style={{height:' 200px', width:'200px'}}/>
        </div>
        <div className='col-md-9'>Our vision is to become a trusted leader in the financial services industry, known for delivering innovative, reliable, and customer-centric loan solutions. We aspire to create a future where businesses and individuals have the financial freedom to thrive, supported by a partner they can trust. By staying ahead of industry trends and embracing cutting-edge technologies, Exponent Finserv envisions reshaping the financial landscape with solutions that cater to every need.
          <br/><br/>We dream of building an ecosystem where financial aspirations meet practical solutions, ensuring sustainable growth for our clients. Our vision encompasses a commitment to excellence, a passion for innovation, and an unwavering dedication to fostering long-term relationships. Together, let’s shape a brighter future, one loan at a time, with Exponent Finserv leading the way.</div>
    </div>
    <div className='row bg-dark mx-auto' style={{width:'82%', height:'1px',opacity:'10%'}}></div>
    <div className='row p-5 mx-5 d-flex align-items-center'>
        <div className='col-md-9'>At Exponent Finserv, our mission is to empower businesses and individuals by providing tailored financial solutions that fuel growth, stability, and success. We are dedicated to fostering financial inclusivity, offering a seamless experience through innovative loan products, expert guidance, and a customer-first approach. Whether it’s a business loan to expand your enterprise or personal financing to meet your life goals, our mission is to support you at every step with trust, precision, and unmatched service quality.
          <br/><br/>With a relentless focus on transparency and excellence, Exponent Finserv is committed to redefining financial empowerment for businesses and individuals across the nation.</div>
        <div className='col-md-3 px-5'>
        <img src={mission} className='rounded-circle'style={{height:' 200px', width:'200px'}}/>
        </div>
    </div>

    </div>
  )
}

export default AboutMission

