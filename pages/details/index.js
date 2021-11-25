import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Movie from "../../components/Movie";
import Header from "../../components/Header";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
// getstaticProps(contex)
export async function getServerSideProps(context) {
  //
  // https://api.themoviedb.org/3/movie/${context}/credits?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US
  //

  //console.log(context.query.object)
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.object}?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );

  const data = await res.json();
  
  if (!data) {
    return {
      notFound: true,
    };
  }
  const res1 = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.object}/credits?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );

  const data1 = await res1.json();
  
  if (!data1) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data, data1:data1 }, // will be passed to the page component as props
  };
}
function About({ data,data1 }) {
  const Router = useRouter();
  //console.log(Router.query)
  console.log(data1);
  return (
    <div>
      <Movie data={data} data1={data1} />
    </div>
  );
}

export default withRouter(About);
