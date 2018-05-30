import React, { Component } from 'react';

class Landing extends Component {

  signup = () => {
    this.props.history.push('/signup');
  }

  login = () => {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="flex-box">
        <div className="marketing">
          <h1>less</h1>
          <h3 className="text-muted"><small>a tiny platform for sharing</small></h3>
          <button
          onClick={this.signup}
          className="btn less-btn-light mr-2">
          sign up
          </button>
          <button
          onClick={this.login}
          className="btn less-btn-dark ml-2">
          log in
          </button>
        </div>
      </div>
    );
  }
}

export default (Landing);
