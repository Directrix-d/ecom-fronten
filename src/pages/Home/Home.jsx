import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/cart/Cart'

const Home = () => {
  return (
    <div className="home w-full h-full">
        <Slider/>
        <FeaturedProducts type = "Popular"/>
         <FeaturedProducts type = "Trending"/>
         <Categories/>
         <FeaturedProducts type = "Most Sold"/>
         <Contact/>
       
        
    </div>
  )
}

export default Home