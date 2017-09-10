import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import sineWave from 'images/sine-wave.png';
import blueCircle from 'images/blue-circle.png';
import colors from 'utils/colors';

class Container extends Component {
  render() {
    return (<div className='fixed top-0 left-0 bottom-0 right-0 pa2'
      style={{backgroundColor: colors.primaryBlue, backgroundImage: `url(${sineWave})`, color: colors.textBlack}}
    >
      <div className='fixed center bg-white shadow-1 overflow-y-scroll pv3 ph4' style={{
        width: '96%', height: '96%', borderRadius: 16,
        top: '2%', left: '2%',
        background: `#fff url(${blueCircle}) no-repeat 72px 12px`
      }}>
        <div className='w-100 cf'>
          <div className='w-100 w-50-ns tc tl-ns fl-ns b static fixed-ns' style={{fontSize: 32}}>
            <Link className='no-underline pointer' style={{color: colors.textBlack}} to='/'>Appuity</Link>
          </div>
          <div className='w-100 tc tr-ns fl-ns mt2 mt0-ns' style={{fontSize: 16}}>
            The easiest way to analyse Play Store reviews
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    </div>)
  }
}

Container.propTypes = {
  children: PropTypes.element
};

export default Container;