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
    const { streams, hasSignedInState } = this.props;
    if (!streams.length) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft>
          {/* <h3>All Streams</h3> */}
        </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight>
          { (hasSignedInState) ? <div className="text-right">
              <Link type="button" to="/streams/create" 
                className="button radius bordered shadow social google">
                <span className="google-text no-icon">Create New Stream</span>
              </Link>
            </div> : null }
        </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          { streams.map(function iterateStreams(item) {
              const { id } = item;
              return (
                <div className="radius bordered shadow card">
                  <div className="card-section">
                    <h6><b><u>Default stream credentials</u></b> <br/> <b>url:</b> rtmp://localhost/live <br/> <b>Stream key:</b> 1 </h6>
                    <Link type="button" to={ `/streams/${id}` } className="primary radius bordered shadow button">Goto live stream from here</Link>
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
  currentUserId: null,
  hasSignedInState: null,
  handleFetchStreams: () => {},
};

export default connect(
  ({ streams, auth: { userId: currentUserId, hasSignedInState } = {} }) => ({ 
    streams: Object.values(streams), currentUserId, hasSignedInState,
  }),
  { handleFetchStreams }
)(StreamList);
