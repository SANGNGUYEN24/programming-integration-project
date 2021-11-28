import "antd/dist/antd.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "next/app";
import app from "./firebase_config";
import UserContext from "./UserContext.js";
import Router from "next/router";

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
      Router.push("/");
    }
  };

  signIn = (username) => {
    localStorage.setItem("pip-user", username);
    console.log("called sign in");

    this.setState(
      {
        user: username,
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
          user: this.state.user,
          signIn: this.signIn,
        }}
      >
        <Component {...pageProps} />;
      </UserContext.Provider>
    );
  }
}
// export default MyApp;
