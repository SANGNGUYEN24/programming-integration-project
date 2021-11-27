import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const results = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchingTrending.url
    }`
  ).then((res) => res.json());

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
      <Nav />

      <Results results={results.results} />
    </div>
    //   );
    // }
  );
}
