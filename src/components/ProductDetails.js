import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
//context
import { ProductsContext } from '../context/productsContextProvider';
import styles from './ProductDetails.module.css'
const ProductDetails = () => {
    
    const data = useContext(ProductsContext)
    const {id} = useParams();
    const product = data[id-1];
    const {image,title,description,price,category} = product;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='goooooo' />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}</span>
                    <Link to="/products">go to home</Link>
                </div>
            </div>
            

        </div>
    );
};

export default ProductDetails;