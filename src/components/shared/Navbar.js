import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContexct } from '../../context/CratContextProvider';
//MaterialUi
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from '../shared/Navbar.module.css'
const Navber = () => {

    const{state} = useContext(CartContexct)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to ="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to ="/cart"><AddShoppingCartIcon sx={{width:'50px' , color:'#0b499b'}}/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navber;