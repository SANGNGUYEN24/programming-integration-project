import Head from "next/head";
import FilterBar from "../components/FIlterBar/FilterBar";
import Header from "../components/Header";
import Results from "../components/Results";
import dateFormat from "dateformat";
import Footer from "../components/Footer/Footer";

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
  return (
    <div>
      <Head>
        <title>PIP</title>
        <meta
          name="description"
          content="Welcome to the PIP - an storage of many interesting movies with all genres from around the world. This will bring you to an amazing experience movie watching"
        />
      </Head>

      <Header />
      <FilterBar />

      <Results results={results.results} />
      <Footer />
    </div>
  );
}
