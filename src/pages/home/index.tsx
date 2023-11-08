// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import HouseCard from "@/components/HouseCard";
import CreateHouse from "@/components/CreateHouse";

interface House {
  id: number;
  name: string;
  address: string;
  kind: string;
}
const Home: NextPage = () => {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch(
        "http://127.0.0.1:8080/houses?page_id=1&page_size=10",
      );
      const data = await response.json();
      console.log(data);
      setHouses(data);
    };
    fetchHouses().catch(console.error);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Rent Track Dashboard</title>
        <meta name="description" content="Manage your properties with ease." />
        {/* Other head elements */}
      </Head>

      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="Rent Track Logo"
          className={styles.logo}
          width={100}
          height={50}
        />
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            <Image src="/avatar.jpg" alt="User Avatar" width={40} height={40} />
          </div>
          <span className={styles.userName}>Alex Doe</span>
        </div>
      </header>

      <nav className={styles.navigation}>{/* Navigation items */}</nav>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          {/* Replace with actual data */}
          {houses.map((house) => (
            <div key={house.id} className={styles.houseItem}>
              <HouseCard
                id={house.id}
                name={house.name}
                address={house.address}
                kind={house.kind}
              />
              {/* Add more house details here */}
            </div>
          ))}
        </aside>

        <section className={styles.content}>
          <h1 className={styles.title}>Welcome to Your Dashboard</h1>
          <CreateHouse />
        </section>
      </main>

      <footer className={styles.footer}>{/* Footer content */}</footer>
    </div>
  );
};

export default Home;
