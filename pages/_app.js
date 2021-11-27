import "antd/dist/antd.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "next/app";
import app from "./firebase_config";
import UserContext from "./UserContext.js";
import Router from "next/router";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useState, useContext } from "react";

// function MyApp({ Component, pageProps })
export default class MyApp extends App {
  state = {
    user: null,
  };

  componentDidMount = () => {
    const user = localStorage.getItem("pip-user");
    if (user) {
      this.setState({
        user,
      });
    } else {
      Router.push("/login");
    }
  };

  signIn = (username, password) => {
    localStorage.setItem("pip-user", username);

    this.setState(
      {
        user: username,
      },
      () => {
        Router.push("/");
      }
    );
  };

  signInWithGoogle = async () => {
    // const { signIn } = useContext(UserContext);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [message, setMessage] = useState("");

    const firebaseAuth = getAuth();
    const provider = new GoogleAuthProvider();
    var authenticated = false;
    await signInWithPopup(firebaseAuth, provider)
      .then((res) => {
        console.log(res);
        authenticated = true;
        localStorage.setItem("pip-user", username);
        this.setState(
          {
            user: res.user.displayName,
          },
          () => {
            Router.push("/");
          }
        );
      })
      .catch((err) => {
        console.log(err);
        authenticated = false;
      });
    // return Promise.resolve(authenticated);
  };

  signOut = () => {
    localStorage.removeItem("pip-user");
    this.setState({
      user: null,
    });
    Router.push("/login");
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          signIn: this.signInWithGoogle,
          signOut: this.signOut,
        }}
      >
        <Component {...pageProps} />;
      </UserContext.Provider>
    );
  }
}
// export default MyApp;
