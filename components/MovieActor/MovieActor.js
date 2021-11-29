import classes from "./MovieActor.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

const ActorCard = ({ actorInfo }) => {
  // Base Image Url
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className={classes.MovieCardWrapper}>
      <div>
        <Image alt="Movie"
          src={`${BASE_IMAGE_URL}${actorInfo.profile_path}`}
          width={180}
          height={180}
          objectFit="cover"
          layout="fixed"
          className={classes.ActorImage}
        />
      </div>
      <p>{actorInfo.name}</p>
    </div>
  );
};

const SlickNextArrow = ({ onClick }) => {
  return (
    <div className={classes.NextArrow} onClick={onClick}>
      <ArrowCircleRightIcon />
    </div>
  );
};

const SlickPrevArrow = ({ onClick }) => {
  return (
    <div className={classes.PrevArrow} onClick={onClick}>
      <ArrowCircleLeftIcon />
    </div>
  );
};

export default function MovieActor({ movieActors }) {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.SectionWrapper}>
      <div className={classes.SectionTitle}>
        <h3>Actors</h3>
      </div>
      <div className={classes.ListMovieWrapper}>
        <Slider {...settings}>
          {movieActors.cast.slice(0, 5).map((actor, index) => {
            return <ActorCard key={index} actorInfo={actor} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
