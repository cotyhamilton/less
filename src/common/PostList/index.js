import React, { Component } from 'react';
import Post from '../Post';
import './PostList.css';
import * as firebase from 'firebase';
import Form from '../Form';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.getAllPosts(user.uid);
      }
      else {
        this.setState({ posts: [] })
      }
    })
  }

  getAllPosts = (uid) => {
    firebase.database().ref(`/${uid}/follow/`).on('value', dataSnapshot => {
      let following = dataSnapshot.val();
      following.forEach((uid) => {
        this.getPost(uid)
      })
    })
  }

  getPost = (uid) => {
    firebase.database().ref(`/${uid}/`).on('value', dataSnapshot => {
      let data = dataSnapshot.val();
      let newPosts = [...this.state.posts];
      newPosts = newPosts.filter(post => post.name !== data.name);
      this.setState({ posts: [{ text: data.post, name: data.name, uid:data.userId}, ...newPosts] });
    })
  }

  handleSubmit = (data) => {
    let post = (data[''])
    firebase.database().ref(firebase.auth().currentUser.uid + '/post/').set(post);
  };

  render() {
    return (
      <div className="postList">
        <div className="text-right">
          <Form submit={this.handleSubmit}>
            <textarea className="form-control m-3" rows="3" />
          </Form>
        </div>
        {this.state.posts ? this.state.posts.map((post, i) => (
          <Post key={i} post={post.text} author={post.name} uid={post.uid} />
        )) : null}
      </div>
    );
  }
}

export default (PostList);
