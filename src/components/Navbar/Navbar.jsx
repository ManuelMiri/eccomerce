

import styles from "./Navbar.module.css";



const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
      
      <img
        src="https://res.cloudinary.com/dzsymxvys/image/upload/v1677377345/depositphotos_197550170-stock-illustration-automotive-car-logo-vector-design_ouwftw.webp"
        alt=""
        style={{width: "10%", objectFit: "cover"}}
      />
      
      <ul className={styles.containerList}>
        <a href="#arriba" title="Todas">Todas</a>
        <a href="#arriba" title="Todas">Urbanas</a>
        <a href="#arriba" title="Todas">Deportivas</a>
      </ul>
      </div>
    </div>
    );
};

export default Navbar;