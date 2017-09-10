import React from 'react';
import PropTypes from 'prop-types';

import colors from 'utils/colors';
import minus5 from 'images/smile-scale/-5.png';
import minus4 from 'images/smile-scale/-4.png';
import minus3 from 'images/smile-scale/-3.png';
import minus2 from 'images/smile-scale/-2.png';
import minus1 from 'images/smile-scale/-1.png';
import zero from 'images/smile-scale/0.png';
import plus1 from 'images/smile-scale/1.png';
import plus2 from 'images/smile-scale/2.png';
import plus3 from 'images/smile-scale/3.png';
import plus4 from 'images/smile-scale/4.png';
import plus5 from 'images/smile-scale/5.png';

function getEmoji(averageSentiment) {
  const negativeImages = [minus1, minus2, minus3, minus4, minus5]
  const positiveImages = [plus1, plus2, plus3, plus4, plus5];
  const scaledSentiment = averageSentiment*5;

  return parseInt(scaledSentiment, 10) === 0 ? zero :
    scaledSentiment > 0 ? positiveImages[parseInt(scaledSentiment, 10)] :
    negativeImages[parseInt(-1*scaledSentiment, 10)]
  ;
}

function OverallSentiment({reviews}) {
  const averageSentiment = (reviews
    .filter(r => r.analysis.sentiment.documentSentiment)
    .map(r => r.analysis.sentiment.documentSentiment.score)
    .reduce((acc, current) => acc+current, 0)/reviews.length).toFixed(2)
  ;

  return (<div>
    <div style={{color: colors.textGray, fontSize: 24, fontWeight: 200}}>
      <span className='mr2' style={{fontWeight: 700}}>Overall Sentiment</span>varies from -1 to 1
    </div>
    <div className='w-100 cf pv3'>
      <img
        className='fl mr3'
        style={{height: 64}}
        src={getEmoji(averageSentiment)}
        alt={`Emoji representing average sentiment of ${averageSentiment}`}
      />
      <div style={{
        fontSize: 48, fontWeight: 700,
        color: averageSentiment === 0 ? colors.textBlack :
          averageSentiment > 0 ? colors.positiveGreen : colors.negativeRed,
      }}>
        {averageSentiment}
      </div>
    </div>
  </div>);
}

OverallSentiment.propTypes = {
  reviews: PropTypes.array
};

OverallSentiment.defaultProps = {
  reviews: []
};

export default OverallSentiment;
