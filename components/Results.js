import style from "../styles/results.module.css";
import FlipMove from "react-flip-move";
import Link from "next/link";
import { useRouter } from "next/router";
import Thumbnail from "./Thumbnail";
function Results({ results }) {
  //console.log(results[1]);
  const router = useRouter();

  // onClick={() => router.push(`/?genre=${key}`)}
  return (
    <FlipMove className={style.wrapper}>
      {results?.map((res, idx) => (
        <Link
          key={idx}
          href={{
            pathname: "/details",
            //query:{id:res.id}
            query: { object: JSON.stringify(res.id) },
          }}
        >
          <a>
            <Thumbnail key={res.id} results={res} />
          </a>
        </Link>
      ))}
    </FlipMove>
  );
}

export default Results;
