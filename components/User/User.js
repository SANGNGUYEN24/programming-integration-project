import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
import st from "./UserProfile.module.scss";
import Results from "../Results";
import { initializeApp } from "firebase/app";
import { useContext } from "react";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  query,
  getDoc,
  onSnapshot,
  QuerySnapshot,
  DocumentSnapshot,
} from "@firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../pages/firebase_config.js";
import UserContext from "../../pages/UserContext.js";

console.log(db);
export default function User(props) {
  const { userName, userEmail, userUid } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  console.log(useContext(UserContext));
  // console.log(doc(db,"bookmarks",userUid))

  useEffect(() => {
    // const collectionRef = collection(db,"BlogTest/MovieList")
    // const q = query(collectionRef);
    console.log(userUid);
    if (userUid) {
      const movies = onSnapshot(doc(db, "bookmarks", userUid), (doc) => {
        setMovies(doc.data());
      });
      return movies;
    }

    return {};
  }, []);
  console.log(movies);

  return (
    <div>
      <div className={st.SectionWrapper}>
        <h1 className={st.h1}> Welcome {userName} </h1>
        <p className={st.p}> {userEmail} </p>
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
        {movies?.Movie?.map((mov) => (
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
