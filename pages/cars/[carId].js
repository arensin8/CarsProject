import CarDetails from "@/components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

const carDetail = () => {
  const router = useRouter();
  const carId = router.query.carId;
  const carDetails = carsData[carId - 1];
  
  return <CarDetails {...carDetails} />;
};

export default carDetail;
