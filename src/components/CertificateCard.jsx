import iafLogo from "../assets/images/resources/IAF Logo.png";
import mmsLogo from "../assets/images/resources/mms-logo.png";
import startupTn from "../assets/images/resources/startuptn.png";
import pngEgg from "../assets/images/resources/pngegg.png";

const CertificationCard = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-4">Our Certifications</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
        <img src={pngEgg} alt="Certification" className="certification-logo" />
        <img src={iafLogo} alt="IAF Certification" className="certification-logo" />
        <img src={mmsLogo} alt="MMS Certification" className="certification-logo" />
        <img src={startupTn} alt="Startup TN Certification" className="certification-logo" />
      </div>
    </div>
  );
};

export default CertificationCard;
