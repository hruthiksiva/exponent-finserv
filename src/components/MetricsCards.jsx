import React from 'react';
import PropTypes from 'prop-types';

const MetricsCards = (props) => {
  return (
    <div className='text-center col-sm-6 col-md-3'>
      <div className="badge py-5 col-lg-12 rounded-4" style={{ backgroundColor: '#e3dfdc', color: '#050330' }}>
        <h1 className='fw-bold'>{props.title}</h1>
      </div>
      <h5 className="pt-4">{props.describe}</h5>
    </div>
  );
};

// Add prop types validation
MetricsCards.propTypes = {
  title: PropTypes.string.isRequired,  // Marks 'title' as a required string
  describe: PropTypes.string,          // 'describe' is optional
};

export default MetricsCards;
