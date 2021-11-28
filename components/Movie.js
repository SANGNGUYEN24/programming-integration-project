import styles from "../styles/movie.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { getFirestore, collection,setDoc, getDoc,addDoc,doc,updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import UserContext from "../pages/UserContext.js";
import {db} from "../pages/firebase_config"
//import 'firebase/compat/firestore';
console.log(db)

function Movie({ data, data1 }) {
  // console.log(data1.cast)
  //const {title,...obj}={...this.data}
  //console.log(data.production_companies[0]);
  const { userName, userEmail, userUid } = useContext(UserContext);
  console.log(useContext(UserContext))
  let [cast1, cast2, cast3] = data1.cast;
  let company = data.production_companies[0];
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  console.log(db)
  // const Blog = db.collection('BlogTest');
  const updateFirebase = async (event) => {
    //console.log(data)
    event.preventDefault();
    console.log(collection(db,"bookmarks"))
    console.log(typeof userUid)
    const docu = doc(db, "bookmarks",userUid);
    const docSnap = await getDoc(docu);

    if (docSnap.exists()) {
      updateDoc(docu, {
        Movie: arrayUnion({
          name: data.title,
          rating: data.vote_average,
          url: `${BASE_URL}${data.poster_path}`,
        }),
      });
    } else {
      setDoc(doc(db,"MovieList",userUid), {
        Movie: [
          {
            name: data.title,
            rating: data.vote_average,
            url: `${BASE_URL}${data.poster_path}`,
          },
        ],
      });
    }
  };

  return (
    <div className={styles.container}>
      <Image
        layout="fill"
        className={styles.bgimg}
        src={
          `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
          `${BASE_URL}${data.poster_path}`
        }
        width={200}
        height={400}
      />
      <div className={styles.detail}>
        {/* phan poster */}
        <div className={styles.poster}>
          {/* <img className={styles.img} src="/poster.jpg" /> */}
          <Image
            className={styles.img}
            layout="responsive"
            src={
              `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
              `${BASE_URL}${data.poster_path}`
            }
            width={240}
            height={300}
            alt={`#`}
          />
          <button className={styles.btn}>Xem phim ngay</button>
          <button onClick={updateFirebase} className={styles.btn}>
            Add movie
          </button>
        </div>
        {/* phan information */}
        <div className={styles.info}>
          <h1>{data.title}</h1>
          <h2>{data.original_title}</h2>
          <div className={styles.cate}>
            <div className={styles.tag}>
              <p className={styles.content}>Phiêu Lưu</p>
            </div>
            <div className={styles.tag}>
              <p className={styles.content}>Kỳ thú</p>
            </div>
            <div className={styles.shareTag}>
              <Link href="https://www.facebook.com/sharer/sharer.php?u=https://youtu.be/ZMeFnwsxh6s">
                <a className={styles.fbShare}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                  </svg>{" "}
                  Chia sẻ
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.origin}>
            <p className={styles.originName}>
              Đạo Diễn: <span>{company.name}</span>
            </p>
            <p className={styles.originName}>
              Quốc Gia: <span>{company.origin_country}</span>
            </p>
            <p className={styles.originName}>
              Khởi Chiếu: <span>{data.release_date}</span>
            </p>
          </div>
          <div className={styles.descript}>{data.overview}</div>
          {/* List actor */}
          <div className={styles.section}>
            <p className={styles.sectionTitle}>Diễn Viên</p>
            <div className={styles.list}>
              <div className={styles.content}>
                <Image
                  layout="fixed"
                  className={styles.actorImg}
                  src={`${BASE_URL}${cast1.profile_path}`}
                  width={120}
                  height={120}
                  alt={`#`}
                />
                <p className={styles.actorName}> {cast1?.name}</p>
                <p className={styles.subName}> {cast1?.character} </p>
              </div>
              <div className={styles.content}>
                <Image
                  layout="fixed"
                  className={styles.actorImg}
                  src={`${BASE_URL}${cast2.profile_path}`}
                  width={120}
                  height={120}
                  alt={`#`}
                />
                <p className={styles.actorName}> {cast2?.name}</p>
                <p className={styles.subName}> {cast2?.character}</p>
              </div>
              <div className={styles.content}>
                <Image
                  layout="fixed"
                  className={styles.actorImg}
                  src={`${BASE_URL}${cast3.profile_path}`}
                  width={120}
                  height={120}
                  alt={`#`}
                />
                <p className={styles.actorName}> {cast3?.name} </p>
                <p className={styles.subName}> {cast3?.character}</p>
              </div>
            </div>
          </div>

          {/* List Movie */}

          {/* <div className={styles.section}>
            <p className={styles.sectionTitle}>Phim tương tự</p>
            <div className={styles.list}>
              <div className={styles.content}>
                <img
                  className={styles.movieImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.MoiveName}> HP Chap1</p>
                <p className={styles.subName}> 2018 </p>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.movieImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.MoiveName}> HP Chap1</p>
                <p className={styles.subName}> 2018 </p>
              </div>
              <div className={styles.content}>
                <img
                  className={styles.movieImg}
                  src="https://dummyimage.com/400x400"
                />
                <p className={styles.MoiveName}> HP Chap1</p>
                <p className={styles.subName}> 2018 </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Movie;
