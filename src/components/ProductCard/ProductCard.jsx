import styles from "../ProductCard/ProductCard.module.css";
import React from 'react'

const ProductCard = ({title, price}) => {

    
   
  return (
    <div>
        <h1 className={styles.color}> 
            {title} 
        </h1>

        <h2> 
            {price} 
        </h2>

        
    </div>
  )
}

export default ProductCard