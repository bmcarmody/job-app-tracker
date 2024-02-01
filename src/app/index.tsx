import { useUser } from "@clerk/clerk-react";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { isSignedIn } = useUser();

  console.log('Is Signed In', isSignedIn);
  return (
    <>
      <Head>
        <title>Job App Tracker</title>
        <meta name="description" content="A job tracker personal project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        this is a test
      </main>
    </>
  );
};

export default Home;
