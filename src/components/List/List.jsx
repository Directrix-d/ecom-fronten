import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import axios from 'axios';
const List = ({ categoryid, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            categoryid
              ? `http://localhost:3300/product?category=${categoryid}`
              : "http://localhost:3300/product?new=true"
          );
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, [categoryid]);
  
    useEffect(() => {
      categoryid &&
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    }, [products, categoryid, filters]);
  
    useEffect(() => {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }, [sort]); 
    
  return (
    <div className="flex flex-wrap  justify-around gap-10 p-0 sm:p-5">
    {categoryid
      ? filteredProducts
          .slice(0, 14)
          .map((product) =>  <Cards product={product} key={product._id} />)
      : products
          .slice(0, 7)
          .map((product) =>  <Cards product={product} key={product._id}/>)}
  </div>

  )
}

export default List