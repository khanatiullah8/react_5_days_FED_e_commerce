import React from 'react'
import Button from '../button/Button';
import { addToCart } from '../../reducers/CartSlice';
import { useDispatch } from 'react-redux';
import { openModal } from '../../reducers/ModalSlice';

const ProductCard = ({ item, filteredProducts, i }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleImageClick = () => {
    dispatch(openModal({items: filteredProducts(), index: i}))
    document.documentElement.classList.add('overflow-hidden')
  }

  const { title, price, images } = item;
  return (
    <li className="product-item">
      <figure className='product-figure'>
        <img src={images[0]} className='product-img' alt={title} onClick={handleImageClick} />
      </figure>
      <div className="product-item-info">
        <h4 className="product-item-title">{title}</h4>
        <h5 className="product-price">${price}</h5>
        <div>
          <Button className='addToCart-btn' onclick={() => handleAddToCart(item)}>add to cart</Button>
        </div>
      </div>
  </li>
  );
}

export default ProductCard