import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "dotenv/config";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  // insert collection or collection route (shouldnt end with document)
  const querySnapshot = await getDocs(
    collection(db, "categorys/burgers/products")
  );
  let data = [];
  querySnapshot.forEach((doc) => {
    data = [
      ...data,
      {
        id: doc.id,
        ...doc.data(),
      },
    ];
  });
  return data;
}
