
import styles from "../ItemListContainer/ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
        <h2 className={styles.saludo}>
          {greeting}
        </h2>
    </div>
  );
};

export default ItemListContainer;