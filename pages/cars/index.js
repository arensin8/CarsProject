import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import React from "react";

const Details = () => {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
