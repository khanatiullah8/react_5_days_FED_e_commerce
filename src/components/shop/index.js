import React from 'react'
import OurProducts from '../products/index';
import Wrapper from '../wrapper/Wrapper';
import StyledShop from './Shop.styled';

const Shop = () => {
  return (
    <StyledShop>
      <Wrapper className='shop-wrapper'>
        <OurProducts />
      </Wrapper>
    </StyledShop>
  )
}

export default Shop;