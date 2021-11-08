import classes from "./MovieRelated.module.scss";
import Image from "next/image";
import { relatedFilm } from "../CLONEDATA/CLONEDATA.js";
import Slider from "react-slick";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

const MovieCard = ({ img, name }) => {
  return (
    <div className={classes.MovieCardWrapper}>
      <Image src={img} />
      <p>{name}</p>
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

export default function MovieRalated() {
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
        <h3>Nội dung liên quan</h3>
      </div>
      <div className={classes.ListMovieWrapper}>
        <Slider {...settings}>
          {relatedFilm.map((film, index) => {
            return <MovieCard key={index} img={film.img} name={film.name} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
