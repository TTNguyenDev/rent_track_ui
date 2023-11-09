// components/HouseCard.tsx
import React from "react";
import styles from "./HouseCard.module.css";
import { useRouter } from "next/router";

interface HouseCardProps {
  id: number;
  name: string;
  address: string;
  kind: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ id, name, address, kind }) => {
  const router = useRouter();

  const showRentalUnit = () => {
    router.push(`/rental-unit/${id}`);
  };
  return (
    <div onClick={showRentalUnit} className={styles.card}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardAddress}>{address}</p>
        <p className={styles.cardKind}>{kind}</p>
      </div>
    </div>
  );
};

export default HouseCard;
