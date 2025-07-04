import axios from 'axios';
import React from 'react'

const Button = ({title, className,product}) => {
   const handleAddToCart = async (product) => {

    const userId = localStorage.getItem("userId");

    try {
      await axios.post("http://localhost:3000/api/cart/add", {
        userId,
        productId: product._id
      })
    }
    catch (err) {
console.log(err , "err")
    }
  }
  return (
    <>
        <button onClick={()=>handleAddToCart(product)}  className={`btn me-2 ${className}`}>{title}</button>
    </>
  )
}

export default Button