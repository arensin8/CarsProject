import AllCarsButton from "@/components/module/AllCarsButton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

const index = () => {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllCarsButton />
      <CarsPage data={cars} />
    </>
  );
};

export default index;
