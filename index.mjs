import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7PieLa3L4xfe7x7AtW68YgI_Pw-xArI",
  authDomain: "cash-flow-compass.firebaseapp.com",
  databaseURL: "https://cash-flow-compass-default-rtdb.firebaseio.com",
  projectId: "cash-flow-compass",
  storageBucket: "cash-flow-compass.appspot.com",
  messagingSenderId: "511858751589",
  appId: "1:511858751589:web:aa37dddc689bfc5384ae8c",
  measurementId: "G-XN46QBPYDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const transactionsRef = ref(database, 'transactions/x120');


get(transactionsRef)
  .then((snapshot) => {
    console.log(snapshot.val());
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
