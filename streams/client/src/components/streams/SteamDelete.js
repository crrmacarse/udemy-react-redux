import React from "react";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";
import Modal from "../Modal";

class StreamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchStream } = this.props;

    fetchStream(id);
  }

  handleDelete = () => {
    const { stream, deleteStream } = this.props;

    stream && deleteStream(stream.id);
  };

  renderContent() {
    const { stream } = this.props;

    return !stream
      ? "Are you sure you want to delete this stream"
      : `Are you sure you want to delete the stream with title: ${
          stream.title
        }`;
  }

  renderActions() {
    return (
      <>
        <button onClick={this.handleDelete} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return { stream: state.streams[id] };
};

const mapDispatchToProps = {
  fetchStream,
  deleteStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
