import React, {Component} from 'react';
import PropTypes from 'prop-types';

import colors from 'utils/colors';

class ReviewsList extends Component {
  highlight(review) {
    // https://stackoverflow.com/questions/2593637/how-to-escape-regular-expression-in-javascript
    let text = review.review_text;

    if (review.analysis.sentiment.error) {
      return text;
    }

    review.analysis.sentiment.sentences.map((s) => {
      const sentimentScore = s.sentiment.score;
      const sentimentBgColor = sentimentScore === 0 ? '#fff' :
        sentimentScore > 0 ? '#CBFCE2' : '#FFE1DA'
      ;

      text = text.replace(
        s.text.content,
        `<span 
          class="pa1 br2" 
          style="background-color: ${sentimentBgColor};"
        >
          ${s.text.content}
        </span>`
      );

      return null;
    });
    return text;
  }

  render() {
    const {reviews} = this.props;
    return (<div>
      <div className='mt3' style={{color: colors.textGray, fontSize: 24, fontWeight: 200}}>
        <span className='mr2' style={{fontWeight: 700}}>Individual Sentiments</span> for last 40 reviews
      </div>

      <div>
        {reviews.map((r, i) => {
          const sentimentScore = r.analysis.sentiment.documentSentiment ? 
            r.analysis.sentiment.documentSentiment.score : false
          ;

          const sentimentColor = !sentimentScore ? colors.textGray : sentimentScore === 0 ? colors.textGray : sentimentScore > 0 ? colors.positiveGreen :
            colors.negativeRed
          ;

          return (<div key={r.id} className='cf mt4'>
            <div className='w-20 tc fl'>
              <img
                className='ba bw2'
                src={r.author.avatar_url} alt={`App Reviewer - ${r.author.name}`}
                style={{
                  height: 80, borderRadius: 80, width: 80,
                  borderColor: sentimentColor, backgroundColor: '#eee'
                }}
              />
              <div className='' style={{color: sentimentColor, fontSize: 32, fontWeight: 700}}>
                {sentimentScore}
              </div>
            </div>
            <div className='w-80 mt1 fl'>
              <div className='mb2' style={{fontSize: 12, color: '#A9A9A9'}}>{r.date}</div>
              <div style={{fontSize: 16, color: colors.textBlack, lineHeight: 1.6}}>
                <span dangerouslySetInnerHTML={{__html: this.highlight(r)}} />
              </div>
            </div>
          </div>);
      })}
      </div>
    </div>);
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

ReviewsList.defaultProps = {
  reviews: []
};

export default ReviewsList;
