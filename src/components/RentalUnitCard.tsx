import React from "react";
import styles from "./RentalUnitCard.module.css"; // Make sure to create appropriate styles

interface RentalUnitCardProps {
  houseId: number;
  price: number;
  status: string;
}

const RentalUnitCard: React.FC<RentalUnitCardProps> = ({
  houseId,
  price,
  status,
}) => {
  return (
    <div className={styles.card}>
      <p>House ID: {houseId}</p>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default RentalUnitCard;
