import React from 'react';
import PropTypes from 'prop-types';

import 'components/Shimmer.css';

function Shimmer({shape, dimensions}) {
  return (<div className='shimmer'>
    <div
      className='db'
      style={{
        height: dimensions.height, width: dimensions.width, backgroundColor: '#E7E4E4',
        borderRadius: shape === 'rectangle' ? 4 : '100%'
      }} 
    />
  </div>)
}

Shimmer.propTypes = {
  shape: PropTypes.oneOf(['rectangle', 'circle']).isRequired,
  dimensions: PropTypes.any.isRequired
};

export default Shimmer;
