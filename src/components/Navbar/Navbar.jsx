

import styles from "./Navbar.module.css";
import   CartWidget  from "../CartWidget/CartWidget";


const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
      
      <img
        src="https://res.cloudinary.com/dzsymxvys/image/upload/v1678377892/cheese-logo-template-suitable-for-restaurant-cheese-production-and-food-industry-logo-vector_gy6v2z.jpg"
        alt="Logo Quesos"
        style={{width: "4%", objectFit: "cover", padding:"5%"}}
      />
      
      <ul className={styles.containerList}>
        <a href="#arriba" title="Inicio">Inicio</a>
        <a href="#arriba" title="Lista Precios">Lista Precios</a>
        <a href="#arriba" title="Contacto">Contacto</a>
      </ul>
      <CartWidget/>
      </div>
    </div>
    );
};

export default Navbar;