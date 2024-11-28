import Link from "next/link";
import React from "react";
import styles from "./AllCarsButton.module.css";

const AllCarsButton = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">See All Cars</Link>
    </div>
  );
};

export default AllCarsButton;
