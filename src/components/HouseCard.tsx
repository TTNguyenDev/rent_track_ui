// components/HouseCard.tsx
import React from "react";
import styles from "./HouseCard.module.css";

interface HouseCardProps {
  id: number;
  name: string;
  address: string;
  kind: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ name, address, kind }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardAddress}>{address}</p>
      <p className={styles.cardKind}>{kind}</p>
    </div>
  );
};

export default HouseCard;
