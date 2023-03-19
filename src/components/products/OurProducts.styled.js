import styled, { keyframes } from "styled-components";

const anime = keyframes`
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
`

const StyledOurProducts = styled.div`

  .section-subtitle-icon { background: ${props => props.theme.blueMid}; }
  .section-subtitle { color: ${props => props.theme.blueMid}; }
  
  .section-title { text-transform: capitalize; }

  .products-filter-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }

  .product-items-all {
    display: grid;
    align-self: start;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    justify-content: center;
    gap: 30px;
    text-align: center;
  }

  .product-item {
    padding: 10px;
    border-radius: ${props => props.theme.radiusDefault};
    animation: ${anime} .3s linear forwards;
    background-color: ${props => props.theme.grayLight};
    box-shadow: ${props => props.theme.cardShadow};
  }

  .product-figure {
    height: 180px;
    overflow: hidden;
  }

  .product-item img {
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    transition: transform .3s;

    &:hover { transform: scale(1.1); }
  }

  .product-item-info {
    margin-top: 14px;

    > *:not(:last-child) { margin-bottom: 10px; }
  }

  .product-item-title {
    color: ${props => props.theme.grayDark};
    font-size: 15px;
    font-weight: 600;
  }

  .product-price {
    color: ${props => props.theme.grayDarkest};
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .btn-container {
    width: fit-content;
    margin: 30px auto 0;
    text-align: center;
  }
`

export default StyledOurProducts;