// components/CreateHouse.tsx
import React, { useState } from "react";
import styles from "./CreateHouse.module.css";

interface HouseData {
  name: string;
  address: string;
  kind: "Rooms" | "House";
}

const CreateHouse: React.FC = () => {
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

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "auto",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={houseData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={houseData.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="kind">Kind:</label>
        <select
          id="kind"
          name="kind"
          value={houseData.kind}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="Rooms">Rooms</option>
          <option value="House">House</option>
        </select>
      </div>
      <button type="submit" className={styles.button}>
        Create House
      </button>
    </form>
  );
};

export default CreateHouse;
