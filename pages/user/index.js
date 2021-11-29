import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "next/router";
import User from "../../components/User/User";

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
  