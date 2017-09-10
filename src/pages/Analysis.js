import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {clear as clearReviews} from 'modules/app/reviews';
import {fetchByPlayStoreId as fetchAppByPlayStoreId} from 'modules/apps';
import Container from 'components/Container';
import LoadingSidebar from 'pages/analysis/LoadingSidebar';
import Sidebar from 'pages/analysis/Sidebar';
import LoadingContent from 'pages/analysis/LoadingContent';
import Content from 'pages/analysis/Content';


class Analysis extends Component {
  componentWillMount() {
    // setTimeout(() => {
      // this will fetchReviews automatically on successs
      this.props.dispatch(fetchAppByPlayStoreId(this.props.match.params.playStoreId));
    // }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.app).length > 0) {
      document.title = `${this.props.app.name} - Analysis by Appuity`
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearReviews());
  }

  render() {
    const {fetchingApp, app, fetchingReviews, reviews} = this.props;
    return (<div>
      <Container>
        <div className='w-100 center w-80-ns center mt4 mt5-ns cf'>
          <div className='w-100 w-20-ns fl-ns'>
            {fetchingApp ? <LoadingSidebar /> : <Sidebar app={app} />}
          </div>

          <div className='w-100 w-70-ns fl-ns pl0 pl4-ns ml0 ml4-ns bl bw0 bw1-ns b--black-10 overflow-hidden mt4 mt0-ns'>
            {fetchingReviews || fetchingApp ? <LoadingContent /> : <Content reviews={reviews} />}
          </div>
        </div>
      </Container>
    </div>)
  }
}

Analysis.propTypes = {
  fetchingApp: PropTypes.bool,
  app: PropTypes.object,
  fetchingReviews: PropTypes.bool,
  reviews: PropTypes.array
};

Analysis.defaultProps = {
  fetchingApp: true,
  app: {},
  fetchingReviews: true,
  reviews: []
};

function mapStateToProps(state) {
  return {
    fetchingApp: state.apps.fetchingByPlayStoreId,
    app: state.apps.model,
    fetchingReviews: state.app.reviews.fetchingByPlayStoreId,
    reviews: state.app.reviews.collection
  };
}

export default connect(mapStateToProps)(Analysis);
