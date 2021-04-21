import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCKP5-EbdTvEwZ4nHsCphffOlsvQ8gGCgs",
  authDomain: "fire-2e083.firebaseapp.com",
  projectId: "fire-2e083",
  storageBucket: "fire-2e083.appspot.com",
  messagingSenderId: "200064053314",
  appId: "1:200064053314:web:b3f04fcd409a827a807ddb"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;