import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // obtiene la info del store

export const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.product);
  const renderList = products.map(prod => {
    const { id, title, image, price, category } = prod;
    return (
      <>
        <div className="four column wide" key={id}>
          <Link to={`/product/${id}`} >
            <div className="ui link cards">
              <div className="card">
                <div className="image"> <img src={image} alt={title} /> </div>
                <div className="content">
                  <div className="header"> {title} </div>
                  <div className="meta price">$ {price} </div>
                  <div className="meta"> {category} </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
  })

  return (
    <>
      {renderList}
    </>
  );
};
