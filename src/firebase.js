import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBs81UEeHvt-dZteDVD6LNNRU4HAXAGVD8",
  authDomain: "rollingstore-jli.firebaseapp.com",
  databaseURL: "https://rollingstore-jli.firebaseio.com",
  projectId: "rollingstore-jli",
  storageBucket: "rollingstore-jli.appspot.com",
  messagingSenderId: "243698205582",
  appId: "1:243698205582:web:f5ce93a2c5977c50b3dadf",
};

firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase;
export { firebaseApp };
