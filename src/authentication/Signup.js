import React, { Component } from 'react';
import { signup } from './auth';
import Form from '../common/Form';
import Input from '../common/Input';
import './auth.css';

class Signup extends Component {

  handleSubmit = (data) => {
    signup(data);
    this.props.history.push("/home");
  }


  render() {
    return (
      <div className="signup auth">
          <Form submit={this.handleSubmit}>
            <Input key="0" input_type="text" input_name="name" placeholder="john doe"/>
            <Input key="1" input_type="number" input_name="zipcode" placeholder="12311" small="for friend suggestions" />
            <Input key="2" input_type="email" input_name="email" placeholder="example@example.com" small="we'll never share your email with anyone else." />
            <Input key="3" input_type="email" input_name="confirm email" placeholder="example@example.com" small="we need an email should you lose access to your account" />
            <Input key="4" input_type="password" input_name="password" placeholder={"•".repeat(12)}/>
            <Input key="5" input_type="text" input_name="username" placeholder="coolGirl4" small="makes it easier for friends to find you"/>
          </Form>
      </div>
    );
  }
}

export default (Signup);