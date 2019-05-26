import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream } = this.props;

    fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    const { editStream } = this.props;

    editStream(this.props.match.params.id, formValues);
  };

  render() {
    const { stream } = this.props;

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={this.onSubmit}
          btnSubmitText="Update"
        />
      </div>
    );
  }
}

StreamEdit.propTypes = {
  history: PropTypes.object.isRequired,
  fetchStream: PropTypes.func,
  editStream: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  editStream,
  fetchStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
