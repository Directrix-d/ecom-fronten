import React from "react";
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import { logout } from "../../redux/loginReducer";

import Cart from "../cart/Cart"
import Logo from '../../Logo';
import svg from '../../logo.svg'

const NavBar = () => {
 
  const cart = useSelector((state) => state.cart);
  
  const [openCart, setOpenCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  console.log(currentUser)
  const dispatch = useDispatch();

  const getProductsdata = async () => {
    const res = await axios.get(
      "https://thankful-galoshes-colt.cyclic.cloud/product"
    );
    setProducts(res.data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getProductsdata();
  }, []);

  const getSearchData = async (qsearch) => {
    console.log(qsearch);
    const res = await axios.get(
      `https://thankful-galoshes-colt.cyclic.cloud/product?search=${qsearch}`
    );
    
    setFilteredData(res.data);
  
  };

  useEffect(() => {
    if (wordEntered === "") {
      setFilteredData([]);
    } else {
      getSearchData(wordEntered);
    }
  }, [wordEntered]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
   
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
   
    
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-[50px] md:h-[60px] fixed z-[3] shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] bg-[#FFFCF7] top-0 inset-x-0 text-black">
      <div className="flex items-center h-full">
        <div className="flex-2 flex  items-center h-full">
          <Link to="/">
            <div className="ml-[2%] flex justify-center items-center">
              <img src= {svg} className=""></img>
              <h1 className="text-black font-bold uppercase px-[17px]">Eshop</h1>
            </div>
          </Link>
          <div className=" float-left leading-[80px] hidden md:flex justify-center items-center h-full lg:px-8">
            <Link to='/products/men' >
              <div className="text-cente leading-[60px] tracking-[0.3px] text-black font-bold uppercase px-[17px] h-full hover:border-b-[5px] hover:border-[#A1B5D8]   hover:text-[#C2D8B9]">
                MEN
              </div>
            </Link>
            <Link to='/products/women' >
              <div className="text-cente leading-[60px] tracking-[0.3px] text-black font-bold uppercase px-[17px] h-full hover:border-b-[5px] hover:border-[#A1B5D8] hover:text-[#C2D8B9]">
                WOMEN
              </div>
            </Link>
            <Link to='/products/accessories'>
              <div className="text-cente leading-[60px] tracking-[0.3px] text-black font-bold uppercase px-[17px] h-full hover:border-b-[5px] hover:border-[#A1B5D8] hover:text-[#C2D8B9]">
                ACCESSORIES
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-between md:justify-end items-center ">
          <div className="">
            <div className="flex items-center ml-[5px] md:ml-[25px] p-[5px] border-[0.5px] border-solid  border-[lightgray]">
              {filteredData.length === 0 ? (
                <Search className="text-[#7a7a7a] text-[20px] sm:mx-4 hover:text-[#C2D8B9] " />
              ) : (
                <ClearIcon
                  className="text-[#7a7a7a] text-[20px] mx-4 hover:text-[white] hover:cursor-pointer"
                  id="clearBtn"
                  onClick={clearInput}
                />
              )}
              <input
                value={wordEntered}
                onChange={handleFilter}
                placeholder="Search for products"
                className="border-[none] bg-[#FFFCF7] w-[160px] md:w-[250px] "
              />
            </div>
            {filteredData.length !== 0 && (
              <div className=" mt-1 max-h-[95vh] divide-y overflow-hidden overflow-y-auto shadow-md rounded-b-[2px] md:ml-[25px] right-0 md:right-[176px] w-full md:w-[318px] absolute">
                {filteredData.slice(0, 15).map((value) => {
                  return (
                    <Link
                    to = {`/Product/${value._id}`}
                    >
                      <div  onClick={clearInput} className=" bg-[#FFFCF7] border-t-2 border-[#3b3a3a] px-2 py-2 flex ">
                        <div className="max-w-[20%] ">
                          <img
                            src={value.img1}
                            alt=""
                            className="max-w-[50px] max-h-[50px] ml-2"
                          />
                        </div>
                        <p className="text-[#aaa] hover:cursor-pointer hover:text-[#C2D8B9] text-[16px] px-2 self-center w-full">
                          {value.title.length > 25
                            ? `${value.title.substring(0, 25)}...`
                            : value.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center ml-2">
            {currentUser === null ? (
              <Link to = '/login' reload >
                <div className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px] hover:text-[#C2D8B9]">
                  <div className="cartIcon">
                    <PersonIcon />
                  </div>
                </div>
              </Link>
            ) : (
              <div
                className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px] hover:text-[#C2D8B9]"
                onClick={logoutHandler}
              >
                <div className="cartIcon ">
                  <LogoutIcon />
                </div>
              </div>
            )}

            <div className="text-[12px] md:text-sm cursor-pointer mk-[10px] md:ml-[25px] pr-5    hover:text-[#C2D8B9]">
              <div onClick={() => setOpenCart(!openCart)}>
                <ShoppingCartOutlined />
                <span className="text-xs w-5 h-5 bg-[#2879fe] text-[white] absolute flex items-center justify-center rounded-[50%] right-2.5 top-2.5">
                  {cart.products.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default NavBar;
