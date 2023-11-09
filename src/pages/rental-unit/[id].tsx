import RentalUnitCard from "@/components/RentalUnitCard";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./rentalunit.module.css";
// ... other imports

interface RentalUnit {
  house_id: number;
  price: number;
  status: string;
}
const RentalUnit: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [rentalUnits, setRentalUnits] = useState<RentalUnit[]>([]);

  useEffect(() => {
    const fetchRentalUnit = async () => {
      if (id) {
        const response = await fetch(
          `http://localhost:8080/rentalunitsByHouse?house_id=${id}&page_id=1&page_size=10`,
        );
        const data = await response.json();
        setRentalUnits(data);
      }
    };

    fetchRentalUnit().catch(console.error);
  }, [id]);

  if (rentalUnits.length === 0) {
    return <div className={styles.emptyState}>No rental units available.</div>;
  }

  return (
    <div className={styles.rentalUnitList}>
      {rentalUnits.map((unit) => (
        <RentalUnitCard
          key={unit.house_id}
          houseId={unit.house_id}
          price={unit.price}
          status={unit.status}
        />
      ))}
    </div>
  );
};

export default RentalUnit;
