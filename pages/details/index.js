import React from "react";
import Movie from "../../components/Movie";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "next/router";

export async function getServerSideProps(context) {
  const movieId = context.query.object;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  const res1 = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );

  const data1 = await res1.json();

  if (!data1) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data, data1: data1, movieId: movieId }, // will be passed to the page component as props
  };
}

function About({ data, data1, movieId }) {
  return (
    <div>
      <Header />

      <Movie data={data} data1={data1} movieId={movieId} />

      <Footer />
    </div>
  );
}

export default withRouter(About);
