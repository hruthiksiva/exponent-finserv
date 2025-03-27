import location1 from "../assets/images/resources/location-1.png";
import location2 from "../assets/images/resources/location-2.png";
import location3 from "../assets/images/resources/location-3.png";
import location4 from "../assets/images/resources/location-4.png";

const offices = [
  {
    name: "Chennai, Tamil Nadu",
    address: "Exponent Finserv Private Limited, No: 4/51, Second Main Road, Rayala Nagar, Ramapuram",
    postal: "India 600 083",
    image: location1
  },
  {
    name: "Bangalore, Karnataka",
    address: "Exponent Finserv Private Limited, #39, NGEF Lane, 2nd Floor, Suite No. 1467, Indiranagar",
    postal: "India 560 038",
    image: location2
  },
  {
    name: "Hyderabad, Telangana",
    address: "Exponent Finserv Private Limited, #203, 2nd Floor Suite No. 117, SBR CV Towers, Sector-I, HUDA Techno Enclave, Madhapur",
    postal: "India 500 081",
    image: location4
  },
  {
    name: "Mumbai, Maharashtra",
    address: "Exponent Finserv Private Limited, Unit no.611, Reliables Pride, Anand Nagar, Opp Heera Panna, Jogeshwari (west)",
    postal: "India 400 102",
    image: location3
  }
];

const OurOffices = () => {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col">
          <p className="text-muted">Get to Know About</p>
          <h2 className="fw-bold">Our Offices</h2>
          <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
        </div>
      </div>
      <div className="row">
        {offices.map((office, index) => (
          <div key={index} className="col-lg-6 col-md-12 mb-5">
            <div className="card border-0 shadow-lg rounded-lg overflow-hidden">
              <div className="card-body text-center bg-light">
                <h5 className="text-primary fw-bold mb-3">{office.name}</h5>
                <p className="mb-2">{office.address}</p>
                <span className="text-muted d-block mb-3">{office.postal}</span>
              </div>
              <div className="text-center bg-white p-3">
                <img
                  src={office.image}
                  alt={office.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffices;
