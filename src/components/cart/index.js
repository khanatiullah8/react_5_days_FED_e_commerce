import React, { useEffect } from 'react'
import StyledCart from './Cart.styled';
import Wrapper from '../wrapper/Wrapper';
import Button from '../button/Button';
import { useSelector } from 'react-redux'
import CartCard from './CartCard';
import CartOverView from './CartOverView';
import { removeAllCart } from '../../reducers/CartSlice';
import { useDispatch } from 'react-redux';
import Loader from '../loader/Loader';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts.cart);
  const cartTitleArr = ['product', '', 'price', 'quantity', 'subtotal', 'remove'] 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <StyledCart>
      <Wrapper>
        <div className="title-btn-container">
          <h2 className="section-title">your cart</h2>
          {cartProducts && cartProducts.length > 0 && (
            <Button onclick={() => dispatch(removeAllCart([]))}>
              clear shopping cart
            </Button>
          )}
        </div>

        {cartProducts && cartProducts.length > 0 && <CartOverView />}

        <ul className="cart-items-title">
          {cartTitleArr &&
            cartTitleArr.map((title, i) => (
              <li key={i}>
                <span>{title}</span>
              </li>
            ))}
        </ul>

        <div className="cart-items-container">
          {cartProducts &&
            cartProducts.length > 0 &&
            cartProducts.map((item) => {
              return <CartCard key={item.id} {...item} />;
            })}
        </div>

        {cartProducts && cartProducts.length < 1 && (
          <Loader>your cart is empty</Loader>
        )}
      </Wrapper>
    </StyledCart>
  );
}

export default Cart