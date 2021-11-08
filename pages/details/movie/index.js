import MoviePlaying from "../../../components/MoviePlaying/MoviePlaying";
import MovieDescription from "../../../components/MovieDescription/MovieDescription";
import MovieRalated from "../../../components/MovieRelated/MovieRelated";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <MoviePlaying />
      <MovieDescription />
      <MovieRalated />
    </>
  );
};

export default Home;
