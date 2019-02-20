import React, {Component} from 'react';
import { connect } from "react-redux";

import { getUsers, registerUser } from "../../actions";

class Register extends Component {

  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error: ''
  };

  handleInputEmail = (event) => {

  };

  handleInputPassword = (event) => {

  };

  handleInputName = (event) => {

  };

  handleInputLastname = (event) => {

  };

  submitForm = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user</h2>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register);