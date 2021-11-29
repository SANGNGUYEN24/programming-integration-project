import classes from "./MoviePlaying.module.scss";
import Header from "../Header";

const MoviePlaying = ({ movieVideos }) => {
  let trailerUrl;
  for (let i = 0; i < movieVideos.results.length; i++) {
    if (movieVideos.results[i].type === "Trailer") {
      trailerUrl = movieVideos.results[i].key;
    }
  }

  return (
    <div className={classes.SectionWrapper}>
      <div className={classes.playerContainer}>
        <iframe
          className={classes.player}
          src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </div>
  );
};

export default MoviePlaying;
