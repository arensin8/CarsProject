import styles from "./Card.module.css";
import Location from "../icons/Location";

const Card = (props) => {
  const { id, name, model, year, distance, image, locaion, price } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt="image" className={styles.image} />
      <h4 className={styles.title}>{`${name} ${model}`}</h4>
      <p className={styles.detail}>{`${year}. ${distance}km`}</p>
      <div class={styles.footer}>
        <p>$ {price}</p>
        <div className={styles.location}>
          <p>{locaion}</p>
          <locaion />
        </div>
      </div>
    </div>
  );
};

export default Card;