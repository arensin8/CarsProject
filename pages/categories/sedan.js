import CategorizedCarsList from "@/components/templates/CategorizedCarsList";
import carsData from "@/data/carsData";
import React from "react";

const Sedan = () => {
  const sedanCars = carsData.filter((car) => car.category === "sedan");
  return <CategorizedCarsList data={sedanCars} />;
};

export default Sedan;
