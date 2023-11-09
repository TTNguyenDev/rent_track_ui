import React from "react";
import styles from "./RentalUnitCard.module.css"; // Make sure to create appropriate styles

interface RentalUnitCardProps {
  houseId: number;
  price: number;
  status: string;
  onAddRenter?: (houseId: number) => void; // Optional prop for handling the add renter event
}

const RentalUnitCard: React.FC<RentalUnitCardProps> = ({
  houseId,
  price,
  status,
  onAddRenter,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDetails}>
        <p>House ID: {houseId}</p>
        <p>Price: ${price}</p>
        <p>Status: {status}</p>
      </div>
      {status === "Empty" && onAddRenter && (
        <button
          className={styles.addRenterButton}
          onClick={() => onAddRenter(houseId)}
        >
          Add Renter
        </button>
      )}
    </div>
  );
};

export default RentalUnitCard;
