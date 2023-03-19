import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px 0;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: ${props => props.theme.grayLight};
  box-shadow: 0 0 6px ${props => props.theme.grayMid};

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-menu {

    a {
      padding: 5px 10px;
      margin: 10px;
      color: ${props => props.theme.grayMid};
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: capitalize;

      &.active { color: ${props => props.theme.pink}; }
      &:hover { color: ${props => props.theme.pink}; }
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    > * { flex-shrink: 0; }
    > *:not(:last-child) { margin-right: 15px; }

    .cart-btn {
      position: relative;

      .cart-count {
        padding: 1px 5px;
        border: 2px solid ${props => props.theme.grayLight};
        border-radius: ${props => props.theme.radius50};
        position: absolute;
        top: -10%;
        right: -10%;
        background-color: ${props => props.theme.blueMid};
        color: ${props => props.theme.white};
        font-size: 13px;
      }
    }
  
    .cart-btn,
    .logout-btn {
      a, .logout {
        width: 40px;
        height: 40px;
        border-radius: ${props => props.theme.radius50};
        display: flex;
        color: ${props => props.theme.grayDarkest};
        position: relative;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        transition: all .3s;
        
        &::before {
          content: '';
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          background-color: ${props => props.theme.pink};
          transform: scale(0);
          transition: transform .3s ease-in;
        }
        
        &:hover {
           color: ${props => props.theme.grayLight};
          &::before { transform: scale(1); }
        }
      }
    }
  }
`;

export default StyledHeader;