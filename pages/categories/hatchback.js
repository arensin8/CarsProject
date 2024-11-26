import CategorizedCarsList from "@/components/templates/CategorizedCarsList";
import carsData from "@/data/carsData";

const Hatchback = () => {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");
  return <CategorizedCarsList data={hatchbackCars} />;
};

export default Hatchback;
