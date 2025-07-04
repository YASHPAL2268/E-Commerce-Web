import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:3000/api/add/product")
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
 
  return (
    <>
      <div className="container my-3">
        <div className="row ">
          <div className="text-center">
            <h2>Best Sellers</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          {
            products.map((product) => {
              return (
                <Card product={product}   key={product._id} id={product._id} imgUrl={`http://localhost:3000/uploads/${product.image}`} title={product.name} price={product.price} brand={product.brand} category={product?.category?.name} />
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default Shop