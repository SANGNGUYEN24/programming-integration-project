import Image from "next/image";
import style from "../styles/thumbnail.module.css";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ results }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className={style.thumbnail}>
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${results.backdrop_path || results.poster_path}` ||
          `${BASE_URL}${results.poster_path}`
        }
        width={1920}
        height={1080}
        alt={`#`}
      />
      <div className={style.wrapper}>
        <p className={style.overview}>{results.overview} </p>
        <h2 className={style.title}>
          {results.title || results.original_name}
        </h2>
        <p className={style.vote}>
          {results.media_types && `${results.media_types} ●`}{" "}
          {results.release_date || results.first_air_date} ●{" "}
          <ThumbUpIcon className={style.thumbIcon} /> {results.vote_count}
        </p>
      </div>
    </div>
  );
};

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
