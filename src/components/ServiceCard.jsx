import PropTypes from "prop-types";

const ServiceCard = ({ title, src, link }) => {
  return (
    <div>
      <a href={link} style={{ textDecoration: "none" }}>
        <div className="py-3">
          <div className="card border-0 rounded-3 custom-card">
            <div className="card-body p-3">
              <img
                src={src}
                alt={`${title} illustration`} // Improved alt text for accessibility
                className="img-fluid rounded text-center"
                style={{
                  width: "100%",
                  border: "2px solid #ddd",
                  objectFit: "cover", // Ensures zoom-in without stretching
                }}
                onError={(e) => (e.target.src = "/fallback-image.png")} // Fallback image if src fails
              />
              <h4 className="card-title mt-3 mb-4">{title}</h4>
              <p
                className="badge bg-dark rounded-circle d-flex align-items-center justify-content-center mb-1"
                style={{ width: "35px", height: "35px" }}
              >
                <i
                  className="fa-solid fa-arrow-right fa-rotate-by fa-xl custom-arrow"
                  style={{ "--fa-rotate-angle": "-45deg" }}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired, // Ensures 'title' is a required string
  src: PropTypes.string.isRequired,   // Ensures 'src' is a required string
  link: PropTypes.string.isRequired,  // Ensures 'link' is a required string
};

export default ServiceCard;