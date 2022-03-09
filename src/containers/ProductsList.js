import { useSelector, useDispatch } from 'react-redux'; // obtiene la info del store
import { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import { setProducts } from '../redux/actions/ProductActions';
import axios from 'axios';

export const ProductsList = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  const API = 'https://fakestoreapi.com/products';
  const getProducts = async () => {
    const response = await axios
      .get(API)
      .catch((err) => console.log('Error', err));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log('products: ', products);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

