import * as firebase from 'firebase';

export function signup({email, password, zipcode, username, name}) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        let id = res.user.uid
        firebase.database().ref(`/${id}/`).set({
            email,
            name,
            username,
            zipcode,
            id
        });
    })
    .catch(err => {
        console.log(err);
    });
}

export function login({email, password}) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(err => {
        console.log(err);
    });
}

export function logout() {
    firebase.auth().signOut();
}