import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceCard = ({title}) => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <div className="py-3">
      <div className="card border-0 rounded-3">
        <div className="card-body p-3">
          <img
            src="src/assets/images/hero-1.jpg"
            alt="Placeholder"
            className="img-fluid rounded text-center"
            style={{ border: "2px solid #ddd" }}
          />
          <h4 className="card-title mt-3 mb-4">{title}</h4>
          <p className=" badge bg-dark rounded-circle d-flex align-items-center justify-content-center mb-1" style={{width:'35px',height:'35px'}}>
          <i className=" fa-solid fa-arrow-right fa-rotate-by fa-xl" style={{ "--fa-rotate-angle": "-45deg" }}></i>
          </p>
        </div>
      </div>
      </div>
    </a>
  );
};

export default ServiceCard;
