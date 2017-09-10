import React from 'react';
import PropTypes from 'prop-types';

import colors from 'utils/colors';
import outLink from 'images/out-link.png';
import category from 'images/category.png';
import avgRating from 'images/avg-rating.png';
import totalRatings from 'images/total-ratings.png';
import {nFormatter} from 'utils/number';

function Sidebar({app}) {
  return (<div className=''>
    <div>
      <img style={{height: 94, width: 94}} src={app.icon_url} alt={`${app.name} icon`}/>
    </div>

    <div className='mv3' style={{fontSize: 32}}>
      <a
        className='no-underline'
        style={{color: colors.textBlack, fontWeight: 200}}
        href={`https://play.google.com/store/apps/details?id=${app.play_store_id}`}
        target='blank'
      >
        {app.name} <img src={outLink} alt={`${app.name} on Play Store`} />
      </a>
    </div>

    <div className='mt4' style={{color: '#9B9B9B', fontSize: 20, fontWeight: 200}}>
      <div className='mb3'>
        <img className='mr3' alt='' src={category} />{app.category}
      </div>
      <div className='mb3'>
        <img className='mr3' alt='' src={avgRating} />{app.avg_rating} average rating
      </div>
      <div className='mb3'>
        <img className='mr3' alt='' src={totalRatings} />
        {nFormatter(parseFloat(app.total_ratings.replace(/,/g, '')), 1)} total ratings
      </div>
    </div>

    <div className='mt5' style={{fontSize: 16, color: colors.textBlack}}>
      The last review was recorded on {app.last_updated}.

      <div 
        className='ba pa3 tc mt3 b pointer'
        style={{borderColor: colors.primaryBlue, color: colors.primaryBlue, borderRadius: 8}}
      >
        Fetch new data now
      </div>
    </div>
  </div>);
}

Sidebar.propTypes = {
  app: PropTypes.object
};

export default Sidebar;
