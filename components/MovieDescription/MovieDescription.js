import classes from "./MovieDescription.module.scss";
import Image from "next/image";
import FavoriteIcon from "../../public/favorite_icon.svg";
import ShareIcon from "../../public/share_icon.svg";
import ThumbnailImage from "../../public/film_image.jpg";
import Link from "next/link";

export default function MovieDescription({ movieVideos, movieDetail, movieActors }) {
  // Get movie trailer
  let trailerUrl;
  for (let i = 0; i < movieVideos.results.length; i++) {
    if (movieVideos.results[i].type === "Trailer") {
      trailerUrl = movieVideos.results[i].key;
    }
  }

  // Base Image Url
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  // Get director:
  let director;
  for (let i = 0; i < movieActors.crew.length; i++) {
    if (movieActors.crew[i].job === "Director") {
      director = movieActors.crew[i];
      break;
    }
  }

  // Get 10 actors:
  let actors = "";
  let numberActors = 0;
  for (let i = 0; i < movieActors.cast.length; i++) {
    if (numberActors > 10) break;
    actors += `${movieActors.cast[i].name}, `;
    numberActors++;
  }
  actors += ". . .";

  // Get genres:
  let genres = "";
  movieDetail.genres.forEach((genre) => {
    genres += `${genre.name}, `;
  });

  //

  return (
    <div className={classes.SectionContainer}>
      <div className={classes.LeftIntro}>
        <div className={classes.Col1}>
          <Image
            src={`${BASE_IMAGE_URL}${
              movieDetail.poster_path || movieDetail.backdrop_path
            }`}
            width={720}
            height={1080}
            objectFit="contain"
          />
        </div>
        <div className={classes.Col2}>
          <div className={classes.FilmTitle}>
            <h4>{movieDetail.title}</h4>
            <h5>{movieDetail.original_title}</h5>
          </div>
          <div className={classes.UserAction}>
            <ul className={classes.ListInline}>
              <li className={classes.FollowBtn}>
                <a>
                  <span>
                    <Image src={FavoriteIcon} width={20} />
                  </span>
                  <p>Follow</p>
                </a>
              </li>
              <li className={classes.ShareBtn}>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://youtu.be/${trailerUrl}`}>
                  <a>
                    <span>
                      <Image src={ShareIcon} />
                    </span>
                    <p>Share</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.FilmDesc}>
            <span>Overview</span>
            <p>
              {movieDetail.overview}
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.RightIntro}>
        <div className={classes.TableDescription}>
          <table>
            <tbody>
              <tr>
                <td>Time</td>
                <td>{movieDetail.runtime} minutes</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>{director.name}</td>
              </tr>
              <tr>
                <td>Cast</td>
                <td>{actors}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{movieDetail.original_language.toUpperCase()}</td>
              </tr>
              <tr>
                <td>Genres</td>
                <td>{genres}</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>{movieDetail.release_date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
