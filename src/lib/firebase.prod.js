import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase} from '../seed';
// we need to seed the db
const config = {
  apiKey: "AIzaSyBC0Smwo4Ya21DkIelBNzZmTbEAYLWSVsM",
  authDomain: "netflix-40bb4.firebaseapp.com",
  databaseURL: "https://netflix-40bb4.firebaseio.com",
  projectId: "netflix-40bb4",
  storageBucket: "netflix-40bb4.appspot.com",
  messagingSenderId: "782693976867",
  appId: "1:782693976867:web:d9678011e3ec41c7891a96",
};
const firebase = Firebase.initializeApp(config);
// seed radimo samo jednom da nebi duplirali zapise u firebase bazi
//seedDatabase(firebase);
export {firebase};