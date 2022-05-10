import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyCpCWJn-RJOsxB-7B1SgWoxDlBeZ7pif64',
  authDomain: 'react-app-9e44a.firebaseapp.com',
  projectId: 'react-app-9e44a',
  storageBucket: 'react-app-9e44a.appspot.com',
  messagingSenderId: '501468706580',
  appId: '1:501468706580:web:edeb2fe030916c9f963401',
}

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();