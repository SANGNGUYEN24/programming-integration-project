import classes from "./MoviePlaying.module.scss";

export default function MoviePlaying() {
  return (
    <div className={classes.SectionWrapper}>
      <div className={classes.playerContainer}>
        <iframe
          className={classes.player}
          src="https://www.youtube.com/embed/ZMeFnwsxh6s?autoplay=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </div>
  );
}
