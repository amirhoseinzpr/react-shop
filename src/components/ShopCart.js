import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContexct } from '../context/CratContextProvider';
//Component
import Cart from './shared/Cart'
import styles from './ShopCart.module.css'

const ShopCart = () => {
    const {state , dispatch} = useContext(CartContexct);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
            {state.selectedItem.map(item => <Cart key={item.id} data ={item} />)}
            </div>
            {
                state.itemsCounter >0 && <div className={styles.payments}>
                    <p><span>Total Items :</span>{state.itemsCounter}</p>
                    <p><span>Total Payment :</span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch({type : "CHECKOUT" })}>Check out</button> 
                        <button className={styles.clear} onClick={() => dispatch({type : "CLEAR" })}>clear</button> 
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out Successfully</h3>
                    <Link to = "/products">Buy More</Link>
                </div>
            }
                        {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to = "/products">Shop</Link>
                </div>
            }
        </div>
    );
}

export default ShopCart;