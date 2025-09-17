import React, { useState, useEffect} from 'react'
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from 'react-router-dom';

// // to get the final route
import axios from 'axios';
import { URL } from "../../Api/ApiEndPoints";

// import Card from '../../Components/Category/Card'; //incorect

import ProductCard from "../../Components/Product/ProductCard";
import classes from './Result.module.css'

import Loader from "../../Components/Loader/Loader";

const Result = () => {

  const [Result, setResult] = useState([])
  const {categoryName} = useParams()
  // console.log(categoryName)
  const [Isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${URL}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res.data);

        setResult(res.data);
        setIsloading(false);
      })

      .catch((err) => {
        console.log(err);
         setIsloading(false);
      });
  }, [categoryName]); //on page load
  



  return (
    <LayOut>
      {Isloading ? (
        <Loader />
      ) : (
        <div>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category: {categoryName}</p> <hr />
          <div className={classes.products_container}>
            {Result?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </LayOut>
  );
}

export default Result



