import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseGrid from '../../../layouts/base-grid';
import { handleFetchStreams } from '../../../../store/actions';

const StreamList = class extends Component {
  componentDidMount() {
    const { handleFetchStreams } = this.props;
    handleFetchStreams();
  }
  
  render() {
    const { streams } = this.props;
    if (!streams.length) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft> </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight> </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          { streams.map(function iterateStreams(item) {
              return (
                <div className="radius bordered shadow card">
                  <div className="card-section">
                    <h6><b><u>Default stream credentials</u></b> <br/> <b>url:</b> rtmp://localhost/live <br/> <b>Stream key:</b> 1 </h6>
                    <Link type="button" to={ `/` } className="primary radius bordered shadow button">Copy to stream software</Link>
                  </div>
                </div>
              );
            }).reverse() }
        </BaseGrid.CellMainContent>
      </BaseGrid>
    );
  }
};

StreamList.defaultProps = {
  streams: [],
  handleFetchStreams: () => {},
};

export default connect(
  ({ streams = {} }) => ({ 
    streams: Object.values(streams),
  }),
  { handleFetchStreams }
)(StreamList);
