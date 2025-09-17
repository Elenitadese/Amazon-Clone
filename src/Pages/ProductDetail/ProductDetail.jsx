// import React from 'react'
// import LayOut from "../../Components/Layout/LayOut";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { useEffect,useState } from 'react'; 

// import ProductCard from '../../Components/Product/ProductCard';
// const ProductDetail = () => {
//   const { productID } = useParams();
//   // console.log(productID)

//   const [product,setproduct] = useState({})

//   useEffect(() => {
//     axios
//       .get(`${URL}/products/category/${productID}`)
//       .then((res) => {
//         // console.log(res);
//         // console.log(res.data);

//         setproduct(res.data);
//       })

//       .catch((err) => {
//         console.log(err);
//       });


//   }, [])
  
//   return (
//     <LayOut>
//       <ProductCard product={product} />
//     </LayOut>
//   );
// }

// export default ProductDetail

import React, { useEffect, useState } from "react";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../Api/ApiEndPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  const { productID } = useParams();

  const [product, setProduct] = useState({});
   const [Isloading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true);
    
    axios
      .get(`${URL}/products/${productID}`) // Correct endpoint
      .then((res) => {
        setProduct(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, [productID]);
  

  return (
    <LayOut>
     
        {Isloading ? <Loader /> : <ProductCard product={product} />}
    
      {/* <ProductCard product={product} /> */}
    </LayOut>
  );
};

export default ProductDetail;


