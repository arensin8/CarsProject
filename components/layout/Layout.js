import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>ArenCar</h2>
          <p>Chhose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Next.js Car project | ArenCar &copy;
      </footer>
    </>
  );
};

export default Layout;
