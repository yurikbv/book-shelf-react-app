import React, {PureComponent} from 'react';
import { connect } from "react-redux";

import { getUsers, registerUser } from "../../actions";

class Register extends PureComponent {

  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error: ''
  };

  componentWillMount() {
    this.props.dispatch(getUsers())
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.user.register === false) {
      this.setState({error:'Error try again.'})
    } else this.setState({
      name: '',
      lastname: '',
      email: '',
      password: '',
    })
  }

  handleInputEmail = (event) => {this.setState({email: event.target.value});};

  handleInputPassword = (event) => {this.setState({password: event.target.value});};

  handleInputName = (event) => {this.setState({name: event.target.value});};

  handleInputLastname = (event) => {this.setState({lastname: event.target.value});};

  submitForm = (event) => {
    event.preventDefault();
    this.setState({error:''});
    this.props.dispatch(registerUser({
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }, this.props.user.users))
  };

  showUsers = (user) => (
    user.users ?
      user.users.map(item => (
        <tr key={item._id}>
          <th>{item.name}</th>
          <th>{item.lastname}</th>
          <th>{item.email}</th>
        </tr>
      ))
      : null
  );

  render() {
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="enter name"
              value={this.state.name}
              onChange={this.handleInputName}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="enter last name"
              value={this.state.lastname}
              onChange={this.handleInputLastname}
            />
          </div>
          <div className="form_element">
            <input
              type="email"
              placeholder="enter email"
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
          </div>
          <div className="form_element">
            <input
              type="password"
              placeholder="enter password"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </div>
          <button type="submit">Add user</button>
          <div className="error">
            {this.state.error}
          </div>
        </form>
        <div className="current_users">
          <h4>Current users</h4>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
              {this.showUsers(this.props.user)}
            </tbody>
          </table>
        </div>
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