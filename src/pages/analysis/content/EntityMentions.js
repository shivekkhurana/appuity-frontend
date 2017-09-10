import React, {Component} from 'react';
import PropTypes from 'prop-types';

import colors from 'utils/colors';
import {chunk} from 'utils/array';

class EntityMentions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChunks: 1
    };

    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  showMore() {
    this.setState((state) => ({showChunks: state.showChunks + 1}));
  }

  showLess() {
    if (this.state.showChunks > 1) {
      this.setState((state) => ({showChunks: state.showChunks - 1}));
    }
  }

  render() {
    const {reviews} = this.props;
    const entities = reviews
      .filter(r => r.analysis.entity.entities)
      .map(r => r.analysis.entity.entities)
      .reduce((acc, entityList) => [...acc, ...entityList], [])
      .map(entity => entity.name)
    ;
    const entitiesWithFrequency = [...new Set(entities)]
      .map(e => ({name: e, count: entities.filter(e2 => e === e2).length}))
      .sort((a, b) => b.count - a.count)
    ;

    return (<div>
      <div className='mt3' style={{color: colors.textGray, fontSize: 24, fontWeight: 200}}>
        <span className='mr2' style={{fontWeight: 700}}>Entity Mentions</span>features/ objects that were mentioned in reviews
      </div>
      <div className='w-100 cf mt2' style={{color: colors.textBlack}}>
        {chunk(entitiesWithFrequency, 12).filter((ef, i) => i < this.state.showChunks)
          .map((efRow, i) => (<div className='' key={i}>
            {efRow.map((ef, j) => (<div key={j}
              className='br2 pa1 mr2 dib mb2' style={{backgroundColor: '#E8E8E8'}}
            >
              {ef.name} x {ef.count}
            </div>))}
        </div>))}
      </div>

      <div className='tr mv2'>
        {this.state.showChunks > 1 && <span onClick={this.showLess} className='ba br2 b--black-10 f6 pa1 mr2 dib pointer'>
          Show Less
        </span>}
        <span onClick={this.showMore} className='ba br2 b--black-10 f6 pa1 mr2 dib pointer'>
          Show More
        </span>
      </div>
    </div>);
  }
}

EntityMentions.propTypes = {
  reviews: PropTypes.array
};

EntityMentions.defaultProps = {
  reviews: []
};

export default EntityMentions;
