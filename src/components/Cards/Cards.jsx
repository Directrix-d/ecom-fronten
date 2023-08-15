import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({product}) => {
  return (
    <Link  to = {`/Product/${product._id}`}>
    
        <div className="card  w-[280px] flex flex-col  gap-3 mb-[50px]">
            <div className="image w=[100%] h-[400px] overflow-hidden relative group">
                {product.isNew && <span className="absolute top-2 left-2 bg-white text-teal-600 p-[2px] z-[3] text-xs font-medium"> New Arrival</span>}
                <img className="w-[100%] h-[100%] object-cover absolute z-[1]" src={product.img1}></img>
                <img className="w-[100%] h-[100%] object-cover absolute group-hover:z-[2] transition-all duration-300" src = {product.img2}/>

            </div>
            <h2 className="text-black text-lg font-medium">{product.title}</h2>
            <div className="price flex font-medium">
                <h3 className="text-lg font-medium text-[gray] line-through">Rs.{product.price + product.price * 0.3}  </h3>
                <h3 className="text-lg font-semibold ml-5">Rs.{product.price}</h3>
            </div>
        </div>
        
        
    </Link>
  )
}

export default Cards