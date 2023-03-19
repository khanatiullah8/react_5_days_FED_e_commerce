import React from 'react'
import { useSelector } from 'react-redux';

const CartOverView = () => {
  const cartProducts = useSelector((state) => state.cartProducts.cart);

  let totalItems = cartProducts.reduce((acc, cur) => acc += cur.quantity, 0)
  let totalPrice = cartProducts.reduce((acc, cur) => acc += cur.quantity*cur.price, 0)

  return (
    <ul className="cart-overview">
      <li className="total-items">
        <span>total items</span> : <span>{totalItems}</span>
      </li>
      <li className="total-price">
        <span>total price</span> : <span>${totalPrice}</span>
      </li>
    </ul>
  )
}

export default CartOverView