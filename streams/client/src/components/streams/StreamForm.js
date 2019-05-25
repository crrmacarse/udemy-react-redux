import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  onSubmit = formValues => {
    const { onSubmit } = this.props;

    onSubmit(formValues);
  };

  renderError({ error, touched }) {
    return (
      touched &&
      error && (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    );
  }

  renderInput = ({ input, label, meta }) => {
    const fieldClassName = `field ${meta.error && meta.touched && "error"}`;

    return (
      <div className={fieldClassName}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    const { handleSubmit, btnSubmitText } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary" type="submit">
          {btnSubmitText}
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

StreamForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  btnSubmitText: PropTypes.string.isRequired
};

StreamForm.defaultProps = {
  btnSubmitText: "Submit"
};

export default reduxForm({
  form: "StreamForm",
  validate
})(StreamForm);
