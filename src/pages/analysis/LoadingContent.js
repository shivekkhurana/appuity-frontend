import React from 'react';

import Shimmer from 'components/Shimmer';

function LoadingContent() {
  return (<div className=''>
    <Shimmer shape='rectangle' dimensions={{height: 36, width: 398}} />
    <div className='mt3'>
      <Shimmer shape='rectangle' dimensions={{height: 56, width: 220}} />
    </div>

    <div className='mt4'>
      <Shimmer shape='rectangle' dimensions={{height: 36, width: 540}} />
    </div>

    <div className='mt3'>
      <div className='dib mr2'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 75}} />
      </div>

      <div className='dib mr2'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 95}} />
      </div>

      <div className='dib mr2'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 75}} />
      </div>

      <div className='dib'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 95}} />
      </div>
    </div>

    <div className='mt2'>
      <div className='dib mr2'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 95}} />
      </div>

      <div className='dib mr2'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 55}} />
      </div>

      <div className='dib mr2'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 95}} />
      </div>

      <div className='dib'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 95}} />
      </div>
    </div>

    <div className='mt4'>
      <Shimmer shape='rectangle' dimensions={{height: 36, width: 540}} />
    </div>

    <div className='mt3 cf'>
      <div className='w-10 fl-ns'>
        <Shimmer shape='circle' dimensions={{height: 56, width: 56}} />
      </div>
      <div className='w-80 fl-ns'>
        <Shimmer shape='rectangle' dimensions={{height: 24, width: 55}} />
        <div className='mt2'>
          <Shimmer shape='rectangle' dimensions={{height: 136, width: 540}} />
        </div>
      </div>
    </div>
  </div>)
}

export default LoadingContent;
