import React from "react";

import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;

    fetchUser(userId);
  }

  renderUser() {
    const { user } = this.props;
    if (!user) {
      return <div>Loading</div>;
    }
    return <div className="header">{user.name}</div>;
  }

  render() {
    return <div>{this.renderUser()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  {
    fetchUser
  }
)(UserHeader);
