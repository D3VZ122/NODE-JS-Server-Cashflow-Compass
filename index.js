import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import express from 'express'; 

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


const server = express(); // Corrected express initialization

server.get("/bulk", (req, res) => {
  const transactionsRef = ref(database, `transactions/${req.accountno}`);
  get(transactionsRef)

    .then((snapshot) => {
      const val = snapshot.val();
      res.json({ message: val });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
