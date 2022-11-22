import App from 'firebase'
import'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUIN2fiiUFriI88d0q2UPUvtVnWHyQ7AQ",
    authDomain: "rubrica-bb2d7.firebaseapp.com",
    projectId: "rubrica-bb2d7",
    storageBucket: "rubrica-bb2d7.appspot.com",
    messagingSenderId: "329707750082",
    appId: "1:329707750082:web:c6d42aec7323df0d37315b"
  };
  
  // Initialize Firebase
  App.initializeApp(firebaseConfig);
  const db=App.firestore()
  const auth=App.auth()

  export{db,auth}
