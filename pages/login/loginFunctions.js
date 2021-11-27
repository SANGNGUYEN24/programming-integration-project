import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../firebase_config";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

const signInWithGoogle = async () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  var authenticated = false;
  await signInWithPopup(firebaseAuth, provider)
    .then((res) => {
      console.log(res);
      authenticated = true;
    })
    .catch((err) => {
      console.log(err);
      authenticated = false;
    });
  return Promise.resolve(authenticated);
};

export default signInWithGoogle;
