import Head from "next/head";
import requests from "../utils/requests";
import Headers from "../components/Headers";
import Nav from "../components/Nav";
import Results from "../components/Results";
export default function Home({results}) {
   
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Headers />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
