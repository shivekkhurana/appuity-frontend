import React from 'react';

import Shimmer from 'components/Shimmer';

function LoadingSidebar() {
  return (<div className=''>
    <Shimmer shape='rectangle' dimensions={{height: 94, width: 94}} />

    <div className='mt3'>
      <Shimmer shape='rectangle' dimensions={{height: 48, width: 148}} />
    </div>

    <div className='mt4'>
      <div className='mt3'>
        <Shimmer shape='rectangle' dimensions={{height: 32, width: 204}} />
      </div>
      <div className='mt3'>
        <Shimmer shape='rectangle' dimensions={{height: 32, width: 204}} />
      </div>
      <div className='mt3'>
        <Shimmer shape='rectangle' dimensions={{height: 32, width: 204}} />
      </div>
    </div>
  </div>);
}

export default LoadingSidebar;
