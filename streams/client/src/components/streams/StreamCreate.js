import React from "react";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    const { createStream } = this.props;

    createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} btnSubmitText="Submit" />
      </div>
    );
  }
}

const mapDispatchToProps = {
  createStream
};

export default connect(
  null,
  mapDispatchToProps
)(StreamCreate);
