import Thumbnail from "./Thumbnail";
import style from "../styles/results.module.css";
import Link from "next/link";

function Results({ results }) {
  //console.log(results);
  return (
    <div className={style.wrapper}>
      {results.map((res) => (
        <Link href="/details" key={res.id}>
          <a>
            <Thumbnail results={res} />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Results;
