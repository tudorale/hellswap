import Head from 'next/head'
import styles from '../styles/Trade.module.css'
import Navbar from "../components/Navbar/Navbar";
import {useState} from "react";
export default function Home() {

  const [yourOfferSrc, setYourOfferSrc] = useState("/nfts/nft12.jpg")
  const [reciversSrc, setReciversSrc] = useState("/nfts/nft13.jpg")

  const applyOffer = (img) => {
    setYourOfferSrc(img.target.src)
  }

  const applyReciverOffer = (img) => {
    setReciversSrc(img.target.src)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>HellSwap / TRADE NFTS</title>
        <meta name="description" content="Trade NFTs with your blood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <div className={styles.grid}>
        <div className={styles.c1}>
          <div className={styles.step1}>
            <p className={styles.stepNumber}>Step <span>1</span></p>
            <p className={styles.info}>Connect your wallet</p>
            <div className={styles.wallet}>
              Phantom
              <div></div>
            </div>
            <p className={styles.status}>Connected</p>
          </div>

          <div className={styles.step2}>
            <p className={styles.stepNumber}>Step <span>2</span></p>
            <p className={styles.info}>Sellect your offer</p>
            <p className={styles.subTitle}>Your NFTs</p>
            <div className={styles.nftsGrid}>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyOffer.bind(this)} />
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.c2}>
          <h1>TRADE YOUR NFT</h1>
          
          <div className={styles.trading}>
            <div className={styles.overlay}></div>
            <h1 className={styles.under}>WITH A DROP OF YOUR <span>BLOOD</span></h1>
            <div className={styles.content}>
              <div className={styles.yourOffer}>
                <p>YOUR OFFER</p>
                <img src={yourOfferSrc}/>
                <p>SOL OFFERED</p>
                <div className={styles.value}>0.69</div>
              </div>
              <div className={styles.arrows}>
                <svg width="53" height="57" viewBox="0 0 53 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.21484 36.9722L18.4053 54.1681" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M50.7863 36.9722H2.21484" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M50.7871 20.1807L34.5966 2.98473" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.21568 20.1807H50.7871" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.reciversOffer}>
                <p>RECEIVER&apos;S OFFER</p>
                <img src={reciversSrc}/>
                <p>SOL ASKED</p>
                <div className={styles.value}>0</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.c3}>
          <div className={styles.step3}>
            <p className={styles.stepNumber}>Step <span>3</span></p>
            <p className={styles.info}>Add Reciver&apos;s Wallet Address</p>
            <div className={styles.walletTwo}>
              Phantom
              <div></div>
            </div>
            <p className={styles.status}>Wallet added</p>
          </div>

          <div className={styles.step4}>
            <p className={styles.stepNumber}>Step <span>4</span></p>
            <p className={styles.info}>Pick NFT You Want</p>
            <p className={styles.subTitle}>Receiver&apos;s NFT</p>
            <div className={styles.nftsGrid}>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft13.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
              <div>
                <img src="/nfts/nft12.jpg" alt="NFT" onClick={applyReciverOffer.bind(this)}/>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00649C0 3.67869 0.527468 2.40527 1.46637 1.46637C2.40527 0.527468 3.67869 0 5.00649 0C6.3343 0 7.60772 0.527468 8.54662 1.46637C9.48552 2.40527 10.013 3.67869 10.013 5.00649C10.013 6.3343 9.48552 7.60772 8.54662 8.54662C7.60772 9.48552 6.3343 10.013 5.00649 10.013C3.67869 10.013 2.40527 9.48552 1.46637 8.54662C0.527468 7.60772 0 6.3343 0 5.00649H0ZM4.72079 7.14927L7.6032 3.54593L7.08252 3.12939L4.62467 6.20071L2.88374 4.75016L2.45652 5.26283L4.72079 7.14994V7.14927Z" fill="white" fillOpacity="0.67"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      
      
      
      </div>

      <div className={styles.makeTrade}>
        MAKE A TRADE PROPOSAL
      </div>
    </div>
  )
}
