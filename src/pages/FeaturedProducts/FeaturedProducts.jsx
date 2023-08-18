import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get('https://thankful-galoshes-colt.cyclic.cloud/product');
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
        <h1 className='flex-[2] capitalize ml-[14%]'>{type} Products</h1>
        <p className='flex-[3] text-gray-700 mr-[14%]'  >
        The latest in fashion at Eshop, where popular and trending clothes come to life. Our curated collection showcases the hottest styles that are making waves in the fashion world right now. From chic streetwear to elegant evening attire, we've got it all. Elevate your wardrobe with our handpicked selection of clothing that's not only stylish but also reflective of the current fashion zeitgeist.
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
