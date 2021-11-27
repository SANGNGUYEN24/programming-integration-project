import login from "../../components/login/Login.module.scss";
import React from "react";
import router from "next/router";
import { useEffect, useState } from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import signInWithGoogle from "./loginFunctions";

export default function LoginForm() {
  return (
    <div className={login.body}>
      <div className={login.LoginField}>
        <h1>Login to PIP</h1>
        <form>
          <GoogleLoginButton
            onClick={async () => {
              const auth = await signInWithGoogle();
              console.log("Authenticated: ", auth);
              if (auth == true) {
                router.replace('../');
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
