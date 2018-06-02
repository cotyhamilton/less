import React, { Component } from 'react';
import Menu from '../Menu';
import './Navbar.css';
import Search from '../Search';

/*

this.props.user = { name, userId }

*/

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      showMenuButton: false
    };
  }

  // when props change due to authentication
  // show or hide the menu button
  // menu button is for authenticated users
  static getDerivedStateFromProps(props, prevState) {
    if (!props.user.name) {
      return {showMenuButton: false};
    } else {
      return {showMenuButton: true };
    }
  }

  // update state when menu is toggled
  // Menu componenent depends on this value
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div className="Navbar form-row align-items-center">
        <Search />
        {this.state.showMenuButton ?
          <button onClick={this.toggleMenu} className="btn menu-icon">&#9776;</button> :
          null}
        <Menu onClick={this.toggleMenu} visible={this.state.showMenu} user={this.props.user} />
      </div>
    );
  }
}

export default (Navbar);
