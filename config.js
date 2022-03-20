import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAfkjKiUIpH8YwOdyvIUPvOcor4RlOEKnU",
  authDomain: "race-55837.firebaseapp.com",
  projectId: "race-55837",
  storageBucket: "race-55837.appspot.com",
  messagingSenderId: "677114525149",
  appId: "1:677114525149:web:6b113e81fbcdfc9c4eb234"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
