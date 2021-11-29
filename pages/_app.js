import "antd/dist/antd.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "next/app";
import {app,db,auth} from "../utils/firebase_config";
import UserContext from "../utils/UserContext.js";
import Router from "next/router";

export default class MyApp extends App {
  state = {
    userName: null,
    userEmail: null,
    userUid: null,
  };

  componentDidMount = () => {
    const userName = localStorage.getItem("pip-user-userName");
    const userEmail = localStorage.getItem("pip-user-userEmail");
    const userUid = localStorage.getItem("pip-user-userUid");
    if (userName && userEmail && userUid) {
      this.setState({
        userName,
        userEmail,
        userUid        
      });
    } else {
      Router.push("/");
    }
  };

  signIn = (userName, userEmail, userUid) => {
    localStorage.setItem("pip-user-userName", userName);
    localStorage.setItem("pip-user-userEmail", userEmail);
    localStorage.setItem("pip-user-userUid", userUid);
    console.log("called sign in");

    this.setState(
      {
        userName: userName,
        userEmail: userEmail,
        userUid: userUid
      },
      () => {
        Router.push("/");
      }
    );
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider
        value={{
          userName: this.state.userName,
          userEmail: this.state.userEmail,
          userUid: this.state.userUid,
          signIn: this.signIn,
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
// export default MyApp;
