import React, { createRef, Component } from 'react';
import flv from 'flv.js';
// import { connect } from 'react-redux';
// import { handleFetchStream } from '../../../../store/actions';

const StreamShow = class extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }

  componentDidMount() {
    // const { handleFetchStream} = this.props;
    // handleFetchStream(1);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer = () => {
    const { stream } = this.props;
    if (this.player || !stream) return;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/1.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  
  render() {
    const { stream } = this.props;
    // if (!stream) return null;
    return (
      <div>
        <div>
          <video 
            ref={ this.videoRef } 
            className="video-container radius bordered shadow"
            controls
          />
        </div>
      </div>
    );
  }
};

// StreamShow.defaultProps = {
//   stream: stream,
//   match: match,
//   // handleFetchStream: () => {},
// };

export default StreamShow;
