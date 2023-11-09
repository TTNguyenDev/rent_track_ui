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
  const [showCreateHouseModal, setShowCreateHouseModal] = useState(false);

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

  const handleCreateHouseClick = () => {
    setShowCreateHouseModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateHouseModal(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Rent Track Dashboard</title>
        <meta name="description" content="Manage your properties with ease." />
        {/* Other head elements */}
      </Head>

      <header className={styles.header}>
        <Image src="/logo.png" alt="Rent Track Logo" width={100} height={50} />
        <button
          onClick={handleCreateHouseClick}
          className={styles.createHouseButton}
        >
          Create House
        </button>
        <div className={styles.userProfile}>{/* ... */}</div>
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
        </section>
      </main>

      <footer className={styles.footer}>{/* Footer content */}</footer>
      {showCreateHouseModal && <CreateHouse onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
