import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Minter from '../components/minter'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Something Cool!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mint NFTs with <a href="https://solanapay.com/">SolanaPay!</a>
        </h1>

        <p className={styles.description}>
          Get started by scaning this QR Code with{' '}
          <code className={styles.code}>Phantom Mobile Wallet (Devnet network)</code>
        </p>

      <Minter/>
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://solanapay.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/solpay.svg" alt="Solpay Logo" width={62} height={25} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
