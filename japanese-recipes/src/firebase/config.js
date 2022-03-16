import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI6jrsWUqcGatKrr_kedzaq7R0fJ3R85M",
  authDomain: "cooking-japanes-react-web.firebaseapp.com",
  projectId: "cooking-japanes-react-web",
  storageBucket: "cooking-japanes-react-web.appspot.com",
  messagingSenderId: "322015304536",
  appId: "1:322015304536:web:c01311760557bfce83232d",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
