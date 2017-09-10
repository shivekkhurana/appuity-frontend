import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function AppLink({icon, name, playStoreId}) {
  return (<div className='pa2 pa0-ns fl w-25'>
    <Link className='pointer dim' to={`/analysis/${playStoreId}`}><img src={icon} alt={name}/></Link>
  </div>)
}

AppLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playStoreId: PropTypes.string.isRequired,
}
