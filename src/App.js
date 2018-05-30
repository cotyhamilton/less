import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './common/Navbar';
import Landing from './Landing';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import PostList from './common/PostList';
import Profile from './common/Profile';
import * as firebase from 'firebase';

/* 
state model after login

state = {
  email,
  follow: [<userId>,<userId> ... ],
  name,
  post,
  userId,
  username,
  zipcode
}

*/

class App extends Component {
  constructor() {
    super();
    this.state = {};

    // On / if user is logged in send to /home and get user data
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/home');
        this.getInitialState(user.uid);
      }

      // On / if user is logged out push to landing page
      else {
        this.props.history.push('/');
        let nullState = {...this.state};

        // set state to null to keep lower components from rendering user data on logout
        for (let p in nullState) {
          if (nullState.hasOwnProperty(p)) {
            nullState[p] = null;
          }
        }
        this.setState({...nullState});
      }
    });
  }

  // request all user data from firebase and set as state
  getInitialState = (userId) => {
    firebase.database().ref(`/${userId}/`).on('value', dataSnapshot => {
      this.setState(dataSnapshot.val());
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar user={{ name: this.state.name, userId: this.state.userId }} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/home" render={(props) => ( <PostList user={this.state} /> )} />
          <Route path="/:user" component={Profile} />
        </Switch>
      </div>
    )
  }
}

export default (App);
