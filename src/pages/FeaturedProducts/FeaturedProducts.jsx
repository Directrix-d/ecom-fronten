import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get('http://localhost:3300/product');
      setProductData(res.data);
      setLoading(false);
    } catch (err) {
      console.log('Error in getting Products', err);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProductData();
  }, []);

  return (
    <div className='continer mx-[10px] my-[50px] '>
      <div className='top flex items-center justify-between mb-[50px]'>
        <h1 className='flex-[2] capitalize'>{type} Products</h1>
        <p className='flex-[3] text-gray-700'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
          magnam culpa? Possimus assumenda pariatur sapiente quaerat sequi sint
          facilis. Asperiores ratione ullam ad magni vel molestiae veniam
          doloribus, quis illum? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Incidunt beatae autem illo numquam veniam, harum
          corrupti ex iusto, alias eaque nisi iste explicabo consectetur!
          Suscipit assumenda possimus soluta vel earum.
        </p>
      </div>

      <div className='bottom flex flex-wrap justify-center gap-[50px] '>
        {productData
          ?.filter(product => product.type === type)
          .slice(0, 5) // Limit to 5 cards per type
          .map((product, id) => (
            <div key={id}>
              <Cards product={product} key={product._id} />
              

            </div>
          ))}
      </div>


      
    </div>
  );
};

export default FeaturedProducts;
