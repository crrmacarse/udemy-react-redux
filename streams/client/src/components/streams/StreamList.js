import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    const { fetchStreams } = this.props;

    fetchStreams();
  }

  renderAdmin(stream) {
    const { userId } = this.props;

    return (
      stream.userId === userId && (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      )
    );
  }

  renderCreateStream() {
    const { isSignedIn } = this.props;

    return (
      !!isSignedIn && (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    );
  }

  renderList() {
    const { streams } = this.props;

    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateStream()}
      </div>
    );
  }
}

StreamList.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  streams: PropTypes.array.isRequired,
  userId: PropTypes.string,
  isSignedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = {
  fetchStreams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
