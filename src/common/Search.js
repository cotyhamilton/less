import React, { Component } from 'react';
import firebase from 'firebase';

class Search extends Component {
    search = (e) => {
        let name = e.target.value;
        if (name !== '') {
            firebase.database().ref()
            .orderByChild('name')
            .startAt(name)
            .endAt(`${name}\uf8ff`)
            .once('value', data => {
                if (data.val()) {
                    let user = data.val()[Object.keys(data.val())]
                    console.log('name: ', user.name);
                    console.log('user: ', user.userId);
                }
                else {
                    console.log('user not found');
                }
            });
        }
    }

    render() {
        return (
            <form  style={{flex: 11}}>
                <div className="input-group m-3">
                    <input type="text" className="form-control" placeholder="search" onChange={this.search} />
                </div>
            </form>
        );
    }

}

export default Search;