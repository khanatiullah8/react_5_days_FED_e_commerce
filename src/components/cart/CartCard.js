import React from 'react'
import { AddIcon, CloseIcon, MinusIcon } from '../../assets/icons'
import { removeFromCart, incrementQty, decrementQty } from '../../reducers/CartSlice'
import { useDispatch } from 'react-redux'

const CartCard = ({ id, title, images, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <ul className="cart-items">
      <li className="item-img">
        <figure className="item-figure">
          <img src={images[0]} alt={title} />
        </figure>
      </li>
      <li className="item-title">
        <span>{title}</span>
      </li>
      <li className="item-price">
        <span>${price}</span>
      </li>
      <li className="item-quantity">
        <MinusIcon onclick={()=>dispatch(decrementQty(id))} classname={quantity === 1 ? 'disabled' : ''} />
        <span className='qty'>{quantity}</span>
        <AddIcon onclick={()=>dispatch(incrementQty(id))} />
      </li>
      <li className="item-price item-subtotal">
        <span>${price*quantity}</span>
      </li>
      <li className="item-remove">
        <CloseIcon onclick={()=>dispatch(removeFromCart(id))} />
      </li>
    </ul>
  );
}

export default CartCard