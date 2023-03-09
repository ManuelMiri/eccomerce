
import styles from "../CartWidget/CartWidget.module.css"
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  
  return (
    <div className={styles.CartWidget}>
      <span>0</span>
      <BsFillCartCheckFill color="blue" size={30}  />
    </div>
  );
};

export default CartWidget;