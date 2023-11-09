// components/CreateHouse.tsx
import React, { useState } from "react";
import styles from "./CreateHouse.module.css";

interface HouseData {
  name: string;
  address: string;
  kind: "Rooms" | "House";
}

const CreateHouse = ({ onClose }: any) => {
  const [houseData, setHouseData] = useState<HouseData>({
    name: "",
    address: "",
    kind: "Rooms", // Default selection
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setHouseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/house", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(houseData),
      });

      if (response.ok) {
        console.log("House created successfully");
        // Optionally, clear the form or navigate away
        setHouseData({ name: "", address: "", kind: "Rooms" });
      } else {
        console.error("Failed to create house", response);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Create new house</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={houseData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={houseData.address}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="kind">Kind:</label>
            <select
              id="kind"
              name="kind"
              value={houseData.kind}
              onChange={handleChange}
              required
              className={styles.input}
            >
              <option value="Rooms">Rooms</option>
              <option value="House">House</option>
            </select>
          </div>
          <button type="submit" className={styles.button}>
            Create House
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHouse;
