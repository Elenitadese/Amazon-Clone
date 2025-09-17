
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'

import { Link } from "react-router-dom";

function ProductCard({ product, flex, detailDescription }) {
  const { image, title, id, rating, price, description } = product;
  // console.log(product);
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }  `}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
        {detailDescription && (
          <div style={{ maxWidth: "50%", backgroundColor: "#c8aa6aff" }}>
            {description}
          </div>
        )}
        <div className={classes.rating}>
          {/* <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small> */}
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}


export default ProductCard