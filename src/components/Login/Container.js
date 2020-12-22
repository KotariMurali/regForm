import React, { Component } from 'react'
import Presentation from './Presentation'
export class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailId: "",
      password: "",
      check: false,
      error: "",
      showPassword: false,
    }
  }
  handleEmailChange = (e) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const checkemail = emailPattern.test(e.target.value);
    this.setState({
      emailId: e.target.value,
      check: checkemail,
    });
    if (checkemail === false && this.state.emailId.length > 1) {
      this.setState({
        error: "Invalid Email-Id",
      });
    } else {
      this.setState({
        error: " ",
      });
    }
  };
  handlePasswordChange = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  handleClear = () => {
    this.setState({
      emailId: "",
      Password: "",
    });
  };
  render() {
    return (
      <div>
        <Presentation
          {...this.state}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleClear={this.handleClear}

        />
      </div>
    )
  }
}

export default Container
