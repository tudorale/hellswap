import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
function index() {
  return (
      <div className={styles.home}>
        <Head>
            <title>HellSwap / TRADE NFTS</title>
            <meta name="description" content="Trade NFTs with your blood" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
      </div>
  );
}

export default index;
