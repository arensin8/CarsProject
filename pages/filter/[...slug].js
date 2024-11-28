import CarsPage from "@/components/templates/CarsPage";
import CategorizedCarsList from "@/components/templates/CategorizedCarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

const FilteredCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if (!filteredData.length) return <h3>Not found any car in this range</h3>;

  return <CategorizedCarsList data={filteredData} />;
};

export default FilteredCars;
