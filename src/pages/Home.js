import React, {Component} from 'react';

import Container from 'components/Container';
import AppLink from 'pages/home/AppLink';
import appList from 'pages/home/appList';
import arrowRight from 'images/arrow-right.png';
import colors from 'utils/colors';
import {chunk} from 'utils/array';
import {getParam} from 'utils/string';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStoreUrl: ''
    }

    this.onUrlChange = this.onUrlChange.bind(this);
    this.onAnalyseClick = this.onAnalyseClick.bind(this);
  }

  onUrlChange(e) {
    this.setState({playStoreUrl: e.target.value});
  }

  onAnalyseClick() {
    const playStoreId = getParam(this.state.playStoreUrl, 'id');
    if (playStoreId) {
      this.props.history.push(`/analysis/${playStoreId}`);
    } else {
      this.setState({error: true});
    }
  }

  componentWillMount() {
    document.title = 'Appuity - The easiest way to analyse Play Store reviews'
  }

  render() {
    return (<div>
      <Container>
        <div className='w-100 center w-60-ns center mt0 mt6-ns'>
          <div className='mt4'>
            <div className=''>
              <div style={{fontSize: 32, fontWeight: 200, color: colors.textBlack}}>
                Enter your app’s play store url
              </div>
              <div className='cf mt3'>
                <div className='w-100 w-80-ns fl-ns' style={{fontSize: 32}}>
                  <input type='text' className='w-100 outline-0 ba b--black-10 pa2'
                    style={{borderRadius: 4, fontWeight: 200, color: colors.textGray}}
                    value={this.state.playStoreUrl}
                    onChange={this.onUrlChange}
                  />
                </div>
                <div className='mt3 mt0-ns ph0 ph1-ns w-100 w-20-ns fl-ns'>
                  <div className='white ttu tc pa3 pointer dim'
                    style={{
                      backgroundColor: colors.primaryBlue, fontSize: 16,
                      fontWeight: 700, borderRadius: 4, height: 54
                    }}
                    onClick={this.onAnalyseClick}
                  >
                    Analyse <img src={arrowRight} alt='Right arrow' />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt5'>
              <div style={{fontSize: 24, fontWeight: 200, color: colors.textGray}}>
                Or choose an app from below
              </div>
              <div className='mt3'>
                {chunk(appList, 4).map((chunk, i) => (<div key={i} className='w-100 w-50-ns fl-ns'>
                  {chunk.map((app, j) => (<div key={j}>
                    <AppLink icon={app.icon} name={app.name} playStoreId={app.playStoreId} />
                  </div>))}
                </div>))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>)
  }
}

export default Home;