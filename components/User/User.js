import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
import st from "./UserProfile.module.scss";
import Results from "../Results";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "@firebase/firestore";
import { useState, useEffect } from "react";
//import {db} from "../../utils/firebase";

import { QuerySnapshot } from "@firebase/firestore";
// const clientCredentials = {
//   apiKey: "AIzaSyCJI0l0RlCESg_z8pj7tzLnQY_Lu3GkGFU",
//   authDomain: "blogproject-73eb1.firebaseapp.com",
//   projectId: "blogproject-73eb1",
//   storageBucket: "blogproject-73eb1.appspot.com",
//   messagingSenderId: "1035680621092",
//   appId: "1:1035680621092:web:221743378a0d6e26fc6eb1",
//   measurementId: "G-YD9TN48HBY",
// };
// const app = initializeApp(clientCredentials);

// const db = getFirestore(app);

// const Blog = collection(db, "BlogTest");



async function getCities(db) {
  const citiesCol = collection(db, "BlogTest");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => {
    doc.data();
  });
  return cityList;
}

let arr = getCities(db);
//console.log(arr)

export default function User(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // const collectionRef = collection(db,"BlogTest/MovieList")
    // const q = query(collectionRef);

    const movies = onSnapshot(doc(db, "BlogTest", "MovieList"), (doc) => {
      //setMovies(QuerySnapshot.docs.map(doc=>doc.data()))
      setMovies(doc.data());
    });
    return movies;
  }, []);
  console.log(movies.Movie);
  return (
    <div>
      <div className={st.SectionWrapper}>
        <h1 className={st.h1}> Welcome Khoa </h1>
        <p className={st.p}> Your email: retdkhoa@gmail.com </p>
        <Image
          layout="fixed"
          className={st.bgimg}
          src="/footer2.jpg"
          width={100}
          height={100}
        />
        <hr className={st.divider}></hr>
      </div>

      <h1 className={st.title}>Your PlayList</h1>
      <div className={st.playList}>
        {movies.Movie?.map((mov) => (
          <div className={st.container}>
            {/* <Image className={st.item}/> */}
            <Image
              layout="responsive"
              className={st.img}
              src={mov?.url}
              width={60}
              height={40}
            />
            <div className={st.content}>
              <h2 className={st.maincontent}>{mov.name} </h2>
              <h3 className={st.subcontent}>Rating: {mov.rating}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const querySnapShot = await getDocs(q);
//   const cityList = querySnapShot.map((doc) => {
//     console.log(doc.data());
//   });

//   const citiesCol = collection(db, "BlogTest");
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map((doc) => {
//        doc.data();
//     });

//   return {
//     props: { entries: cities },
//   };
// }
