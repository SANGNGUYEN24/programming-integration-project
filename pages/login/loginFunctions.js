// import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
// import { useState, useContext } from "react";
// import UserContext from "../UserContext.js";

// const signInWithGoogle = async () => {
//   // const { user, signIn } = useContext(UserContext);
//   // const [password, setPassword] = useState("");
//   // const [message, setMessage] = useState("");

//   const firebaseAuth = getAuth();
//   const provider = new GoogleAuthProvider();
//   var authenticated = false;
//   await signInWithPopup(firebaseAuth, provider)
//     .then((res) => {
//       console.log(res);
//       authenticated = true;
//       const username = res.user.displayName;
//       console.log(username);
//       // signIn(username);
//     })
//     .catch((err) => {
//       console.log(err);
//       authenticated = false;
//     });
//   return Promise.resolve(authenticated);
// };

// export default signInWithGoogle;
