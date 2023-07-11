import React ,{useContext} from  'react';
import { Link } from 'react-router-dom';
//function
import { isInCart, quantityCount, shorten } from '../../helpers/function';
//context
import { CartContexct } from '../../context/CratContextProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './product.module.css'

const Product = ({productData}) => {
    const {state , dispatch} = useContext(CartContexct)
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='nooop' style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>

                <div className={styles.buttonContainer}>
                    {
                        isInCart(state , productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE" , payload : productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM" , payload : productData})} >Add To Cart</button>
                    }
                    {quantityCount(state , productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type : "DECREASE" , payload :productData})}>-</button>}
                    {quantityCount(state , productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type : "REMOVE_ITEM" , payload :productData})}><DeleteIcon sx={{color :"white", width :"20px" , margin :0 , padding :0}}/></button>}
                    {quantityCount(state , productData.id) > 0 && <span className={styles.counter}>{quantityCount(state , productData.id)}</span>}
                </div>
            </div>
        </div>
    );
};

export default Product;