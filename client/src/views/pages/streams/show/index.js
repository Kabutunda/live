import React, { createRef, Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import BaseGrid from '../../../layouts/base-grid';
import { handleFetchStream } from '../../../../store/actions';

const StreamShow = class extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }

  componentDidMount() {
    const { handleFetchStream} = this.props;
    handleFetchStream(1);
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
    if (!stream) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft> </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight> </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          <video 
            ref={ this.videoRef } 
            className="video-container radius bordered shadow"
            controls
          />
        </BaseGrid.CellMainContent>
      </BaseGrid>
    );
  }
};

StreamShow.defaultProps = {
  stream: null,
  match: null,
  handleFetchStream: () => {},
};

export default connect(
  ({ streams  }) => ({ stream: streams }),
  { handleFetchStream },
)(StreamShow);
