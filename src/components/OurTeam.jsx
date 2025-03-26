const teamMembers = [
    { name: "Mrs. Umamaheswari A", position: "Managing Director" },
    { name: "Mrs. Jaisree Saravanan", position: "Chief Operating Officer" },
    { name: "Capt R Ananth Kumar", position: "Master Mariner - Chief Mentor" },
    { name: "Arun Sampathkumar", position: "Mentor - Risk Management" },
    { name: "Gurpreet Singh", position: "Mentor - Corporate Banking" },
    { name: "Ashok Kumar R", position: "Business Head - Alliances" }
  ];
  
  const OurTeam = () => {
    return (
      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container-fluid px-lg-5 py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <div className="row mx-lg-5 d-flex justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
                <div className="card border-0 shadow-sm p-4 h-100">
                  <div className="d-flex justify-content-center mb-3">
                    <div
                      className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                      style={{ height: '100px', width: '100px', color: 'white', fontSize: '24px' }}
                    >
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OurTeam;
  