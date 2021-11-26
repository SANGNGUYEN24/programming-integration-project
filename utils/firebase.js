import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const clientCredentials = {
    apiKey: "AIzaSyCJI0l0RlCESg_z8pj7tzLnQY_Lu3GkGFU",
    authDomain: "blogproject-73eb1.firebaseapp.com",
    projectId: "blogproject-73eb1",
    storageBucket: "blogproject-73eb1.appspot.com",
    messagingSenderId: "1035680621092",
    appId: "1:1035680621092:web:221743378a0d6e26fc6eb1",
    measurementId: "G-YD9TN48HBY"
};

// const app = FirebaseApp = initializeApp(firebaseConfig);

const app = initializeApp(clientCredentials);
const db = getFirestore(app);


//console.log(db)
export default {db};








// async function getCities(db) {
//     const citiesCol = collection(db, 'BlogTest');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }

// getCities(db);