import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: <YOURAPIKEY>,
//   authDomain: <YOURAUTHDOAMIN>,
//   projectId: <YOURPROJECTID>,
//   storageBucket: <YOURSTORAGEBUCKET>,
//   messagingSenderId: <YOURMESSAGINGSENDERID>,
//   appId: <YOURAPPID>,
// };

const firebaseConfig = {
  apiKey: "AIzaSyD0X7V0TpvUnQ_Gt2sedAcw4b4JFgwZEtk",
  authDomain: "ecomreduxweb.firebaseapp.com",
  projectId: "ecomreduxweb",
  storageBucket: "ecomreduxweb.appspot.com",
  messagingSenderId: "855852563372",
  appId: "1:855852563372:web:c9dac7e6d0ad7b23a75809"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;