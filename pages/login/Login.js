import login from "../../components/login/Login.module.scss";
import React from "react";
import router from "next/router";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useState, useContext } from "react";
import UserContext from "../UserContext.js";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

export default function LoginForm() {
  const { signIn } = useContext(UserContext);

  const signInWithGoogle = async () => {

    const firebaseAuth = getAuth();
    const provider = new GoogleAuthProvider();
    var authenticated = false;
    await signInWithPopup(firebaseAuth, provider)
      .then((res) => {
        console.log(res);
        authenticated = true;
        // const username = res.user.displayName;
        console.log(res);
        const userName = res.user.displayName;
        const userEmail = res.user.email;
        const userUid = res.user.uid;
        signIn(userName, userEmail, userUid);
      })
      .catch((err) => {
        console.log(err);
        authenticated = false;
      });
    return Promise.resolve(authenticated);
  };

  return (
    <div className={login.body}>
      <div className={login.LoginField}>
        <h1>Login to PIP</h1>
        <form>
          <GoogleLoginButton
            onClick={async () => {
              const auth = await signInWithGoogle();
              // console.log("Authenticated: ", auth);
              if (auth == true) {
                router.replace("../");
              }
            }}
          />
          <FacebookLoginButton onClick={() => alert("Hello")}>
            <span>Log in with Facebook</span>
          </FacebookLoginButton>
        </form>
      </div>
    </div>
  );
}
