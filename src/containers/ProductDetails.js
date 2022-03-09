import { useEffect } from "react"; //efecto secundario, hook nativo
import { useDispatch, useSelector } from "react-redux"; //entrega un action al reducer, obtiene la info del store, redux
import { useParams } from "react-router"; //obtego un parametro, router
import { selectedProduct, removeSelectedProduct } from "../redux/actions/ProductActions"; //accion
import axios from "axios"; //libreria de peticiones 

export const ProductDetails = () => {
  const { productID } = useParams();
  const product = useSelector(state => state.product);
  const { image, description, price, category, title } = product;
  const dispatch = useDispatch();
  console.log('details: ', product);

  const API = 'https://fakestoreapi.com/products/';
  console.log('productID: ', productID);

  const getDetails = async () => {
    const response = await axios
      .get(API + productID)
      .catch(err => console.log('Error: ', err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productID && productID !== '') getDetails();
    return ()=> dispatch(removeSelectedProduct());
  }, [productID]);

  return (
    <div className="ui grid container">

      {Object.keys(product).length === 0 ? <div> LOADING... </div> : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">:</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2> <a className="ui teal tag label">$ {price}</a> </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex='0'>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content"> Add to cart </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}

    </div>
  );
};
