import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Modal from "../components/Modal";

// import { useSession } from "next-auth/react";
// import Feed from "../components/Feed";

const Home: NextPage = () => {
  // const { data: session } = useSession();
  // if (!session) return <Feed />;

  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header />
      {/* <Feed /> */}
    </div>
  );
};

export default Home;
