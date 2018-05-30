import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { logout } from '../../authentication/auth';

/*

this.props.user = { name, userId }
this.props.onClick = toggleMenu()
this.props.visible = { showMenu }

*/

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signout = () => {
    // toggle menu
    this.props.onClick();
    logout();
  }

  render() {
    let visibility = "hide";
    this.props.visible ? visibility = "show" : visibility = "hide";
    return (
      <div
        className={`menu ${visibility}`}>
        <ul>
          <li onClick={this.props.onClick} className="h4"><Link to={`${this.props.user.userId}` || "profile"}>{this.props.user.name}</Link></li>
          <li onClick={this.props.onClick} className="h4"><Link to="home">home</Link></li>
          <li key="1" onClick={this.props.onClick} className="h4"><Link to="settings">settings</Link></li>
          <li key="2" onClick={this.signout} className="h4">logout</li>
        </ul>
        <p onClick={this.props.onClick} className="h2 close-menu">x</p>
        </div>
    );
  }
}

export default (Menu);
