import aboutImg from '../assets/images/stockImages/about.png';

const AboutUsHero = () => {
  return (
    <div className="container-fluid" style={{ height: '700px', position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: '400px',
          position: 'absolute',
          backgroundColor: '#f2d6db',
          bottom: '0%',
          zIndex:'1'
        }}
      ></div>
      <div className="row h-100">
        <div
          className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-end"
          style={{ position: 'relative' }}
        >
          <img
            src={aboutImg}
            className="img-fluid"
            alt="About Us"
            style={{
              maxWidth: '80%',
              position: 'relative',
              bottom: '0',
              zIndex:'1'
            }}
          />
        </div>

        <div
          className="col-lg-4 col-md-12 col-12 d-flex align-items-lg-end justify-content-center"
          style={{
            position: 'aboslute',
            backgroundColor: '#F4F0EE',
            zIndex:'1'
          }}
        >
          <div
            className="px-4"
            style={{
              zIndex: '2',
              marginTop: '5%',
            }}
          >
            <h1>The story behind how our company was founded</h1>
            <p className="text-muted">
              Exponent Finserv was founded to bridge the gap between traditional financial services and modern
              needs. Driven by a vision to empower businesses and individuals. From humble beginnings, we have grown
              into a trusted partner, committed to innovation, trust, and enabling financial success for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
