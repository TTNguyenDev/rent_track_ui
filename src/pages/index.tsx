// pages/index.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rent Track - Property Management Tool</title>
        <meta name="description" content="Manage your properties with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rent Track</h1>

        <p className={styles.description}>
          Your comprehensive property management solution
        </p>

        <div className={styles.grid}>
          <a href="#features" className={styles.card}>
            <h2>Features &rarr;</h2>
            <p>Discover the features that make property management a breeze.</p>
          </a>

          <a href="#pricing" className={styles.card}>
            <h2>Pricing &rarr;</h2>
            <p>Choose the perfect plan for your property management needs.</p>
          </a>

          <a href="#testimonials" className={styles.card}>
            <h2>Testimonials &rarr;</h2>
            <p>See what our customers have to say about Rent Track.</p>
          </a>

          <a href="#contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with us for any queries or support.</p>
          </a>
        </div>

        <div className={styles.discoverMore}>
          <Link href="/home" legacyBehavior>
            <a className={styles.discoverMoreButton}>Discover More</a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        Powered by <span className={styles.logo}>Rent Track</span>
      </footer>
    </div>
  );
};

export default Home;
