import Head from "next/head";
import FilterBar from "../components/FIlterBar/FilterBar";
import Header from "../components/Header";
// import Nav from "../components/Nav";
import Results from "../components/Results";
import dateFormat from "dateformat";

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const country = context.query.country;
  const year = context.query.year;
  const sortType = context.query.sortType;

  // Query data based on filter:
  const results = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=1e847192b47af5b50b8e751f0dccb12f&with_genres=${genre}&sort_by=${sortType}&year=${year}&with_original_language=${country}&release_date.lte=${dateFormat(
      new Date(),
      "yyyy-mm-dd"
    )}`
  ).then((res) => res.json());

  if (!results) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      results: results,
    },
  };
}

export default function Home({ results }) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>PIP</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <FilterBar />

      <Results results={results.results} />
    </div>
  );
}
