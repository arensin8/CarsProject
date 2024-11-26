import CategorizedCarsList from "@/components/templates/CategorizedCarsList";
import carsData from "@/data/carsData";
import React from "react";

const Suv = () => {
  const suvCars = carsData.filter((car) => car.category === "suv");
  return <CategorizedCarsList data={suvCars} />;
};

export default Suv;
