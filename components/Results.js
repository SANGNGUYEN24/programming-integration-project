import Thumbnail from "./Thumbnail";
import style from "../styles/results.module.css";
import FlipMove from "react-flip-move";
import Link from "next/link";

function Results({ results }) {
  //console.log(results);
  return (
    <FlipMove className={style.wrapper}>
      {results.map((res) => (
        <Link href="/details">
          <a>
            <Thumbnail key={res.id} results={res} />
          </a>
        </Link>
      ))}
    </FlipMove>
  );
}

export default Results;
