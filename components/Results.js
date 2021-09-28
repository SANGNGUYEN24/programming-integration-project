import Thumbnail from "./Thumbnail";
import style from "../styles/results.module.css";
import FlipMove from "react-flip-move";

function Results({ results }) {
  console.log(results);
  return (
    <FlipMove className={style.wrapper}>
      {results.map((res) => (
        <Thumbnail key={res.id} results={res} />
      ))}
    </FlipMove>
  );
}

export default Results;
