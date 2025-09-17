import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader"

function Product() {
  const [products, setproducts] = useState([]); // ✅
  const [Isloading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false); // stop loader also on error
      });
  }, []);

  return(
  <>
  {
    Isloading ?(
    <Loader />) : (
    <div className={classes.products_container}>

      {products.map((singleproduct) => (
        <ProductCard product={singleproduct} key={singleproduct.id} />
      ))}

    </div>
    )
  }
  </>
  )
}

export default Product;


