import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Movie from "../../components/Movie";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import User from "../../components/User/User";
import {db,auth} from "../firebase_config"

function ProfilePage() {
    
    //console.log(Router.query)
    //console.log(data1);
    
    return (
      <>
        <Header/>
  
        <User />
        
        <Footer/>
      </>
    );
  }
  
  export default withRouter(ProfilePage);
  