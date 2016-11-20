const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor () {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.changeBitrate = this.changeBitrate.bind(this);
    this.changeResolution = this.changeResolution.bind(this);
  }

  changeBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  changeResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: Object.assign({}, this.state.settings.video, {resolution: '720p'})})
    })
  }

  render () {
    return (
      <div>
        <button className='bitrate' onClick={this.changeBitrate}>Change the Bitrate</button>
        <button className='resolution' onClick={this.changeResolution}>Change the Resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;
