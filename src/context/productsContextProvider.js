import React ,{useState , useEffect ,createContext} from 'react';
//API
import { getProducts } from '../services/api';


export const ProductsContext = createContext();


const ProductsContextProvider = ({children}) => {

    const [porducts,setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setProducts(await getProducts());
        }
        fetchAPI();
    },[]);

    return (
        <ProductsContext.Provider value = {porducts}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;