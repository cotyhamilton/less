import React, { Component } from 'react';
import { login } from './auth';
import Form from '../common/Form';
import Input from '../common/Input';
import './auth.css';

class Login extends Component {
  handleSubmit = (data) => {
    login(data);
    this.props.history.push('/home');
  };

  render() {
    return (
      <div className="flex-box auth">
        <Form submit={this.handleSubmit}>
          <Input key="1" input_type="email" input_name="email" />
          <Input key="2" input_type="password" input_name="password" />
        </Form>
      </div>
    );
  }
}

export default (Login);
