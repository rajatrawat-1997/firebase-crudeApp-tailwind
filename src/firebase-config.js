import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBk9Wj858HvIInjrSUoyzRbmvhWyztR55U",
    authDomain: "crudapp-3da64.firebaseapp.com",
    projectId: "crudapp-3da64",
    storageBucket: "crudapp-3da64.appspot.com",
    messagingSenderId: "576363619395",
    appId: "1:576363619395:web:a3184517973ed383bd20f6"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
