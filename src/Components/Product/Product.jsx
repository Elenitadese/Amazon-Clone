import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

function Product() {
  const [products, setproducts] = useState([]); // ✅

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setproducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.products_container}>
      {products.map((singleproduct) => (
        <ProductCard product={singleproduct} key={singleproduct.id} />
      ))}
    </div>
  );
}

export default Product;
