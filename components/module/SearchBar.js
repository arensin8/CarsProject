import { useState } from "react";
import styles from "./SerachBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const router = useRouter();

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please enter min and max values!");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Entre min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Entre max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
