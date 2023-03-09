import styles from "../ProductCard/ProductCard.module.css";
import React from 'react'

const ProductCard = ({title, price}) => {

    const saludar =()=>{
        console.log("hola")   
            }
   
  return (
    <div>
        <h1 className={styles.color}> 
            {title} 
        </h1>

        <h2> 
            {price} 
        </h2>

        <button onClick={saludar}>saludar</button>
    </div>
  )
}

export default ProductCard