import React from 'react';
import PropTypes from 'prop-types';

import OverallSentiment from 'pages/analysis/content/OverallSentiment';
import EntityMentions from 'pages/analysis/content/EntityMentions';
import ReviewsList from 'pages/analysis/content/ReviewsList';

function Content({reviews}) {
  return (<div>
    <OverallSentiment reviews={reviews} />
    <EntityMentions reviews={reviews} />
    <ReviewsList reviews={reviews} />
  </div>);
}

Content.propTypes = {
  reviews: PropTypes.array
};

Content.defaultProps = {
  reviews: []
};

export default Content;
