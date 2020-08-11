import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDA_ad7Bdg2drBwq_6gaZvqgnuMAkqE7XQ',
  authDomain: 'catch-of-the-day-1f930.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-1f930.firebaseio.com',
});

const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// this is a defalut export
export default base;
