import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgtV-qFYn-D1BfMvQm7hyNFmAbL94utXc",
  authDomain: "linkedin-local-abeokuta.firebaseapp.com",
  projectId: "linkedin-local-abeokuta",
  storageBucket: "linkedin-local-abeokuta.firebasestorage.app",
  messagingSenderId: "815945763145",
  appId: "1:815945763145:web:412a26a7840b53b3edb298",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// Reference to the 'registrations' collection

//Example usage:
// const newRegistration = {
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "jane.doe@example.com",
// };

// register(newRegistration);

//fetching data

// async function fetchRegistrations() {
//   const querySnapshot = await getDocs(registrationsRef);
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   });
// }

// fetchRegistrations();
