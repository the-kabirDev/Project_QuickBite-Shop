import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB73v4YDIIdRqg9NxkHv_2TuwaLsfNrUAs",
  authDomain: "quickbite-93109.firebaseapp.com",
  projectId: "quickbite-93109",
  storageBucket: "quickbite-93109.appspot.com",
  messagingSenderId: "353781346859",
  appId: "1:353781346859:web:f79de70caa772b8060f06e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
