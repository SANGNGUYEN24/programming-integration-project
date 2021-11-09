import Header from "../components/Header";
import SearchBar from "../components/SearchBar/SearchBar";

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const results = await fetch(
    "https://api.themoviedb.org/3/list/1?api_key=1e847192b47af5b50b8e751f0dccb12f&language=en-US"
  ).then((res) => res.json());

  return {
    props: {
      results: results.items,
    },
  };
}

const Search = ({ results }) => {
  return (
    <div>
      <Header />
      <SearchBar results={results} />
    </div>
  );
};

export default Search;
