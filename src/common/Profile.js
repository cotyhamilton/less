import React, { Component } from 'react';
import Post from './Post';
import * as firebase from 'firebase';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getData(this.props.match.params.user);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getData(this.props.match.params.user);
        }
    }

    getData = (uid) => {
        console.log(uid);
        firebase.database().ref(`/${uid}/`).on('value', dataSnapshot => {
            this.setState({ name: dataSnapshot.val().name, post: dataSnapshot.val().post });
        })
    }
    render() {
        return (
            <div className="Profile postList">
                <div>
                    <Post author={this.state.name} post={this.state.post} uid={this.props.match.params.user} />
                </div>
            </div>
        )
    }
}

export default Profile;