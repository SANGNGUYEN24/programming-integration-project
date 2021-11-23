import login from "./Login.module.scss";
import React from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../pages/firebase_config";

const signInWithGoogle = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithPopup(firebaseAuth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export default function LoginForm() {

  return (
    <div className={login.body}>
      <div className={login.LoginField}>
        <h1>Login to PIP</h1>
        <form>
          <GoogleLoginButton onClick={signInWithGoogle} />
          <FacebookLoginButton onClick={() => alert("Hello")}>
            <span>Log in with Facebook</span>
          </FacebookLoginButton>
        </form>
      </div>
    </div>
  );
}
