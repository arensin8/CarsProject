import CategorizedCarsList from "@/components/templates/CategorizedCarsList";
import carsData from "@/data/carsData";
import React from "react";

const Sport = () => {
  const sportCars = carsData.filter((car) => car.category === "sport");
  return <CategorizedCarsList data={sportCars} />;
};

export default Sport;
