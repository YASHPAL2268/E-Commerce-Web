import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'

const CartDesign = () => {
    
    const [cart, setCart] = useState(null);
    const userId = localStorage.getItem('userId');
    const fetchCart = async () => {
        const res = await axios.get(`http://localhost:3000/api/cart/${userId}`)
        setCart(res.data);
    }

    useEffect(() => {
        fetchCart()
    }, [])

    console.log(cart,"cart");

    const removeFromCart = async (productId) =>{

        await axios.delete(`http://localhost:3000/api/cart/${userId}/${productId}`);
         fetchCart()
    }
    return (
        <>
        {cart?.items.map(({productId,quantity}) =>(
   <section className='cart-section' style={{ margin: "100px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cart-items">
                                <div className="cart-header mb-3">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5>Product</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Price</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Quantity</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Total</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="product-info d-flex align-items-center justify-content-between ">
                                                <div className="product-image">
                                                    <img src={`http://localhost:3000/uploads/${productId.image}`} className='img-fluid' alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h6 className="product-title">{productId.name}</h6>
                                                    {/* <div className="product-meta">
                                                        <span className="product-color">Color: Black</span>
                                                        <span className="product-size">Size: M</span>
                                                    </div> */}
                                                    <div className="remove-product">
                                                        <button onClick={ () => removeFromCart(productId._id)}>
                                                        <FaRegTrashCan /> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="price-tag">
                                                <span className="current-price">{productId.price}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="item-total">
                                                <span>{quantity}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="item-total">
                                                <span>{productId.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3">
                            <div className="cart-summary">
                                <h4 className="summary-title">Order Summary</h4>
                                <div className="summary-item d-flex justify-content-between">
                                    <span className="summary-label">Subtotal</span>
                                    <span className="summary-value">$269.96</span>
                                </div>

                                <div className="summary-item shipping-item">
                                    <span className="summary-label">Shipping</span>
                                    <div className="shipping-options">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="shipping" id="standard" checked="" />
                                            <label className="form-check-label" for="standard">
                                                Standard Delivery - $4.99
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="shipping" id="express" />
                                            <label className="form-check-label" for="express">
                                                Express Delivery - $12.99
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="shipping" id="free" />
                                            <label className="form-check-label" for="free">
                                                Free Shipping (Orders over $300)
                                            </label>
                                        </div>
                                    </div>


                                </div>

                                <div className="summary-item">
                                    <span className="summary-label">Tax</span>
                                    <span className="summary-value">$27.00</span>
                                </div>

                                <div className="summary-item disc ">
                                    <span className="summary-label">Discount</span>
                                    <span className="summary-value">-$0.00</span>
                                </div>

                                <div className="summary-total">
                                    <span className="summary-label">Total</span>
                                    <span className="summary-value">$301.95</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ))}
         
        </>
    )
}

export default CartDesign