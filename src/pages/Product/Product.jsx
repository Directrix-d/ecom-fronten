import React, { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  // console.log(id)
  const [product, setProduct] = useState({});
  const[quantity,setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
 
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3300/product/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log("Error in getting Products by id", err);
      }
    };
    getProduct();
  }, [id]);
  const handleQuanity = (type)=>{
    if(type === "dec"  ){
      quantity>1  &&  setQuantity(quantity-1)
    }
  else
  {
  setQuantity(quantity+1)
  }
  }
  const handleCart = () => {
    dispatch(addToCart({ ...product, quantity, color, size }));
  };
 

  return (
    <>
      <div className="flex mt-[20px] h-[auto] p-[10px] mb-[80px] md:p-[50px] flex-col md:flex-row">
        <div className=" flex-1 block md:hidden mt-6">
          <img
            src={product.img1}
            className="w-full h-[70vh] md:h-[90vh] object-cover  z-[1]"
          />
        </div>
        <div className=" w-full flex-1 hidden md:flex justify-center overflow-hidden relative group">
          <img
            className="mainImg xl:w-[78%] h-full object-cover absolute z-[1] px-auto"
            src={product.img1}
          />
          <img
            className="secondImg xl:w-[78%] h-full object-cover absolute group-hover:z-[2] px-auto"
            src={product.img2}
          />
        </div>
        <div className="flex-[1] p-0 sm:p-3 md:px-[50px] md:py-0 md:w-[70%]">
          <h1 className="text-[30px] font-bold md:text-[40px] mb-3">
            {product.title}
          </h1>
          <h1 className="text-[#535665] text-xl opacity-80 font-normal pl-0 pr-5 pt-[5px] md:pb-3.5">
            {product.desc}
          </h1>
          <h1 className="text-[#535665] text-xl opacity-80 font-normal pl-0 pr-5 pt-[5px] md:pb-3.5">
            {product.company}
          </h1>
          <p className="mx-0 my-3 border-y-2 py-3">
            Washed and faded like an old favorite, this layerable fabric which
            makes a great choice for women who like to play in the comfort of
            soft cotton.
          </p>
          <span className="font-thin text-[40px]">₹ {product.price}</span>
          <p>
            <span className="text-[#03a685] font-bold text-sm block ml-0 mr-2.5 mt-[5px] mb-0">
              inclusive of all taxes
            </span>
          </p>
          <div className="w-full md:w-3/4 flex justify-between mx-0 my-[30px] ">
            <div className="flex items-center">
              <span className="text-xl font-extralight">COLOR</span>
              {product && product.color ? (
        <select className="ml-2.5 p-[5px] w-[70px] bg-gray-200 rounded-md">
            {product.color.map((color, index) => (
                <option key={index} className="hover:bg-[teal]">
                    {color}
                </option>
            ))}
        </select>
    ) : (
        <p>Loading sizes...</p>
    )}

           

            </div>
             
            <div className="flex items-center">
    <span className="text-xl font-extralight">SIZE</span>
    {product && product.size ? (
        <select className="ml-2.5 p-[5px] w-[70px] bg-gray-200 rounded-md">
            {product.size.map((size, index) => (
                <option key={index} className="hover:bg-[teal]">
                    {size}
                </option>
            ))}
        </select>
    ) : (
        <p>Loading sizes...</p>
    )}
</div>



            <div className="flex items-center font-bold">
              <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer border-[none] bg-[#e9e9ed] rounded-md">
                <AddIcon onClick = {()=>handleQuanity("inc")} />
              </div>
              <span className="w-[40px] h-[40px] border flex items-center justify-center mx-[5px] my-0 rounded-[10px] border-none">
                {quantity}
              </span>
              <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer border-[none] bg-[#e9e9ed] rounded-md">
                <RemoveIcon onClick = {()=>handleQuanity("dec")}/>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 flex justify-between md:justify-start items-center">
            <button onClick = {handleCart } className=" w-[200px] bg-[#ff3e6c] flex justify-center items-center cursor-pointer font-medium p-[15px] border-2 border-solid border-[#ff3e6c] text-white hover:bg-[#f8f4f4] hover:text-[#ff3e6c] mr-2">
              <span>
                <AddShoppingCartIcon />
              </span>
              <span className="font-bold ml-1">ADD TO CART</span>
            </button>
          </div>

          <div className="mt-[23px] border-t-[3.5px] border-t-[rgb(234,234,236)] border-solid"></div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-1 mx-2 mt-2">
              <h4 className="text-[#535665] text-base font-bold uppercase m-0">
                Delivery
              </h4>
              <div>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  100% Original Products
                </p>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  Pay on delivery might be available
                </p>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  Easy 30 days returns and exchanges
                </p>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  Try & Buy might be available
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1  mx-2 mt-2">
              <h4 className="text-[#535665] text-base font-bold uppercase m-0">
                Product Details
              </h4>
              <div>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  Product color may slightly vary due to photographic lighting
                </p>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  Do not Iron on the Leather Patch
                </p>
                <p className=" w-[90%] align-top mx-0 my-[5px] text-[#535665] text-base">
                  Machine wash cold
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
