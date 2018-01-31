import * as firebase from 'firebase';
import 'firebase/firestore';

let db;
const provider = new firebase.auth.GithubAuthProvider();

if (typeof document !== 'undefined') {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'eslint-wizard.firebaseapp.com',
    projectId: 'eslint-wizard',
  });

  /* eslint-disable no-console */
  firebase.auth().onAuthStateChanged((user) => {
    if (user) { console.log('user signed in', user); }
    else { console.log('user signed out'); }
  });
  /* eslint-enable no-console */

  db = firebase.firestore();
}

export const apiLogin = () => firebase.auth().signInWithPopup(provider);
// export const apiCreate = (collectionId, name) =>
//   db.collection(collectionId).add({ name });
