import MoviePlaying from "../../../components/MoviePlaying/MoviePlaying";
import MovieDescription from "../../../components/MovieDescription/MovieDescription";
import MovieRalated from "../../../components/MovieRelated/MovieRelated";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer/Footer";
import MovieActor from "../../../components/MovieActor/MovieActor";

export async function getServerSideProps(context) {
  const movieId = context.query.m;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );
  const movieDetail = await res.json();
  const res1 = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );
  const movieActors = await res1.json();
  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );
  const movieVideos = await res2.json();
  const res3 = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US`
  );
  const movieSimilars = await res3.json();

  if (!movieDetail || !movieActors || !movieVideos || !movieSimilars) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movieDetail: movieDetail,
      movieActors: movieActors,
      movieVideos: movieVideos,
      movieSimilars: movieSimilars,
    },
  };
}

const Home = ({ movieDetail, movieActors, movieVideos, movieSimilars }) => {
  return (
    <>
      <Header />
      <MoviePlaying movieVideos={movieVideos} />
      <MovieDescription movieDetail={movieDetail} movieActors={movieActors} />
      <MovieRalated movieSimilars={movieSimilars} />
      <MovieActor movieActors={movieActors} />
      <Footer />
    </>
  );
};

export default Home;
