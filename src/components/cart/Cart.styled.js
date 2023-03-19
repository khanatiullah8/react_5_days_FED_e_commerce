import styled from "styled-components";

const StyledCart = styled.section`
  padding: 40px 0;

  .title-btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-title {
    font-size: 28px; 
    text-transform: capitalize;
  }

  .cart-overview {
    width: fit-content;
    border-radius: ${props => props.theme.radiusDefault};
    margin: 10px 0 20px auto;
    background-color: ${props => props.theme.blueMid};
    color: ${props => props.theme.grayLight};

    > * {
      padding: 8px 20px;
      font-size: 15px;
      text-transform: capitalize;
      
      > *:last-child { font-weight: 600; }
    }
  }

  .cart-items-title,
  .cart-items {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1.5fr 1fr 1.5fr 1fr .7fr;

    > * {
      padding: 18px 15px;
      color: ${props => props.theme.grayDarkest};
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  .cart-items-title {
    > * { background-color: ${props => props.theme.grayLight}; }
  }

  .cart-items {
    border-bottom: 1px solid ${props => props.theme.blueLight};

    .item-price { color: ${props => props.theme.grayDark}; }
    
    .item-quantity {
      display: flex;
      align-items: center;

      .qty {
        min-width: 40px;
        margin: 0 4px;
        text-align:center;
      }

      .disabled { pointer-events: none; }
    }

    .item-remove {
      > * { margin: 0 auto; }
    }

    .item-remove, 
    .item-quantity {
      > *:not(.qty) {
        padding: 5px;
        border: 2px solid transparent;
        border-radius: ${props => props.theme.radius50};
        background-color: ${props => props.theme.grayLight};
        color: ${props => props.theme.grayDark};
        cursor: pointer;
        font-size: 30px;
        transition: all .3s;

        > * {stroke-width: 1}

        &:hover {
          border-color: ${props => props.theme.pink};
          color: ${props => props.theme.pink};
        }
      }
    }
  }

  .item-figure {
    width: 80px;
    height: 80px;

    img {
      height: 80px;
      object-fit: contain;
    }
  }
`

export default StyledCart