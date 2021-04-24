import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed.js";

const config = {
    apiKey: "AIzaSyB12OxCdjTm3_fgy0l9wn2Lc3R7AFRi13Q",
    authDomain: "netflix-clone-1ae3b.firebaseapp.com",
    projectId: "netflix-clone-1ae3b",
    storageBucket: "netflix-clone-1ae3b.appspot.com",
    messagingSenderId: "719152475534",
    appId: "1:719152475534:web:cf1f9e14ef8b15de7d08df"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };