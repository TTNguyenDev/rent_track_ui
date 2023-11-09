import RentalUnitCard from "@/components/RentalUnitCard";
import Modal from "@/components/Modal";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./rentalunit.module.css";

interface House {
  id: number;
  name: string;
  address: string;
  kind: string;
}

interface RentalUnit {
  house_id: number;
  price: number;
  status: string;
}

const RentalUnitPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [rentalUnits, setRentalUnits] = useState<RentalUnit[]>([]);
  const [house, setHouse] = useState<House | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        // Fetch House information
        const houseResponse = await fetch(`http://localhost:8080/house/${id}`);
        const houseData: House = await houseResponse.json();
        setHouse(houseData);

        // Fetch Rental Units
        const rentalResponse = await fetch(
          `http://localhost:8080/rentalunitsByHouse?house_id=${id}&page_id=1&page_size=10`,
        );
        const rentalData = await rentalResponse.json();
        setRentalUnits(rentalData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!house) {
    return (
      <div className={styles.emptyState}>
        House information is not available.
      </div>
    );
  }

  const handleAddRenter = (houseId: number) => {
    // Logic to handle the add renter action
    console.log(`Adding renter for house ID: ${houseId}`);
    //TODO: Create renter, create contract
    // Here you might set state to show a modal, or perform other actions
  };

  return (
    <>
      <header className={styles.header}>
        <h1>{house.name}</h1>
        <button className={styles.addButton} onClick={toggleModal}>
          Add Rental Unit
        </button>
      </header>
      {showModal && (
        <Modal onClose={toggleModal}>
          {/* The content of the modal should allow users to input details of a new rental unit */}
          {/* This can be a form that on submission, adds a new rental unit to the list */}
        </Modal>
      )}
      <div className={styles.houseInfo}>
        <p>House's name: {house.name}</p>
        <p>House's address: {house.address}</p>
        <p>House kind: {house.kind}</p>
        {house.kind == "Rooms" ? (
          <p>Number of rooms: {rentalUnits.length}</p>
        ) : (
          <p></p>
        )}
      </div>
      <div className={styles.rentalUnitList}>
        {rentalUnits.length === 0 ? (
          <div className={styles.emptyState}>No rental units available.</div>
        ) : (
          rentalUnits.map((unit) => (
            <div key={unit.house_id}>
              <RentalUnitCard
                houseId={unit.house_id}
                price={unit.price}
                status={unit.status}
                onAddRenter={handleAddRenter}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default RentalUnitPage;
