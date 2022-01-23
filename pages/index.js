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

        <div className={styles.top}>
            <Navbar />

            <div className={styles.topText}>
                <h1>BECOME THE MASTER OF YOUR REALM</h1>
                <h1>IT&apos;S YOUR LAST CHANCE</h1>
                <h1>TO HELP THE HUMANITY</h1>
            </div>
        </div>
      </div>
  );
}

export default index;
