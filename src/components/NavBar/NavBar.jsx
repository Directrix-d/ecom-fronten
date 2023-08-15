import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cart = useSelector((state)=>state.cart)

  const [openCart, setOpenCart] = useState(false);


  return (
    <div className='h-[50px] md:h-[60px] fixed z-[100] shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] bg-gradient-to-l from-fuchsia-400 to-blue-600 top-0  text-white w-full'>
    
        <div className='wrapper flex justify-between items-center flex-wrap mt-2'>
          <div className='left flex  space-x-7'>
            <div className='logo'>
              <Link to='/'>Ecom</Link>
            </div>
            <div className='logo'>
              <Link to='/products/men'>MEN</Link>
            </div>
            <div className='logo'>
              <Link to='/products/women'>WOMEN</Link>
            </div>
           
            <div className='logo'>
              <Link to='/products/accessories'>ACCESSORIES</Link>
            </div>
          </div>
          <div className='right flex items-center space-x-7 '>
            <div className='search border border-gray-300 rounded-lg flex items-center p-2'>
              <SearchIcon className='mr-2' />
              <input
                type='text'
                placeholder='Search Products'
                className='outline-none focus:ring focus:ring-cyan-600 focus:border-cyan-600 flex-grow rounded-lg w-[160px]'
              />
            </div>
            <div className='login hover:text-blue-200'>
              <Link to = '/login' >
              <LoginIcon   />
              </Link>
            </div>
            <div className='login hover:text-blue-200'>
              <FavoriteBorderIcon  />
            </div>
            <div onClick={() => setOpenCart(!openCart)}>
                <ShoppingCartOutlined />
                <span className="text-xs w-5 h-5 bg-[#2879fe] text-[white] absolute flex items-center justify-center rounded-[50%] right-2.5 top-2.5">
                   {cart.products.length}
                </span>
              </div>

          </div>
        </div>
        {openCart && <Cart />}
      </div>
   
  );
};

export default NavBar;