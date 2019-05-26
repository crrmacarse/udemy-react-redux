import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    const { fetchStream } = this.props;
    const { id } = this.props.match.params;

    fetchStream(id);
  }

  renderStream() {
    const { stream } = this.props;

    return !stream ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1>{stream.title}</h1>
        <h2>{stream.description}</h2>
      </div>
    );
  }

  render() {
    return <div>{this.renderStream()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return { stream: state.streams[id] };
};

const mapDispatchToProps = {
  fetchStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamShow);
