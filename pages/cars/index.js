import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import React from "react";

const Details = () => {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
