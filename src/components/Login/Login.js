import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    // React state
    this.state = {
      ui_username: "",
      username: "",
      ui_password: ""
    };
  }

  // by using arrow functions, we retain value of 'this', and don't need to bind 'this' in the constructor
  handleChange = e => {
    this.setState({
      // get computed property name and set its matching value
      // (works only if the name matches what's in state! but is a nice way to generalize form changes on different types of inputs)
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // prevent page refresh
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        console.log("logged in!");
        // redirect to home page once logged in
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  render() {
    // pull values out of state
    const { ui_username, ui_password } = this.state;
    // get props passed in from Main.js
    // ('history' comes from react-router)
    const { heading, buttonText, errors, history, removeError } = this.props;
    // listen for a change in route; if change occurs, invoke removeError()
    history.listen(() => {
      removeError();
    });
    return (
      <div>
        <div>
          <div class="page login-page">
            <div class="container-fluid">
              <div class="form-outer text-center d-flex align-items-center">
                <div class="form-inner">
                  <div class="logo text-uppercase">
                    <span>Welcome To</span>
                    <strong class="text-primary"> Mahalaksha</strong>
                  </div>
                  <h2>{heading}</h2>
                  <form
                    method="post"
                    class="text-left form-validate"
                    onSubmit={this.handleSubmit}
                  >
                    {errors.message && (
                      <div className="alert alert-danger" role="alert">
                        {errors.message}
                      </div>
                    )}
                    <div class="form-group-material">
                      <label for="email" class="label-material">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        id="email"
                        name="ui_username"
                        onChange={this.handleChange}
                        value={ui_username}
                      />
                      {/* <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" class="input-material"/> */}
                    </div>
                    <div class="form-group-material">
                      <label for="login-password" class="label-material">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control "
                        id="password"
                        name="ui_password"
                        onChange={this.handleChange}
                        value={ui_password}
                      />
                    </div>
                    <div class="form-group text-center">
                      {/* <a id="login" href="index.html" class="btn btn-primary">Login</a> */}
                      <button
                        className="btn btn-primary btn-block btn-lg"
                        type="submit"
                      >
                        {buttonText}
                      </button>
                    </div>
                  </form>
                </div>
                <div class="copyrights text-center">
                  <p>
                    Developed by{" "}
                    <a
                      href="https://fsjars.com"
                      class="external"
                      target="_blank"
                    >
                      FSJARS
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
