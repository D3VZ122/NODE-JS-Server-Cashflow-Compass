import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
console.log("Firebase Config:", process.env.firebaseConfig);
const firebaseConfig = JSON.parse(process.env.firebaseConfig); // Parse the string into an object

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const server = express();

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
