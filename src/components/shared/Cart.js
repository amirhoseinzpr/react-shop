import React, { useContext } from 'react';
//context
import { CartContexct } from '../../context/CratContextProvider';
import { shorten } from '../../helpers/function';
//MaterialUi
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Cart.module.css'

const Cart = (props) => {
    const{dispatch} = useContext(CartContexct);
    const {image,title,price,quantity} = props.data;
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='products' />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type : "DECREASE" , payload :props.data})}>-</button> :
                    <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload :props.data})}><DeleteIcon/></button>
                }
                <button onClick={() => dispatch({type : "INCREASE" , payload :props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;