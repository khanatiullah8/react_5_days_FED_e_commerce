import styled from "styled-components";

const StyledFilterSidebar = styled.aside`

  > *:not(:last-child) { margin-bottom: 20px; }
  
  > * {
    padding: 14px 10px;
    border-radius: ${props => props.theme.radiusDefault};
    background-color: ${props => props.theme.grayLight};
    box-shadow: ${props => props.theme.cardShadow};
  }

  .clear-filter {text-align: center; }

  /* search-filter component styling starts here */
  .header-form {
    position: relative;

    .input-search {
      width: 100%;
      padding: 12px 27px 12px 12px;
      border: none;
      border-radius: ${props => props.theme.radiusDefault};
      background-color: ${props => props.theme.blueLight};
      color: ${props => props.theme.grayMid};
      font-size: 16px;
    }

    .search-icon {
      position: absolute;
      top: 50%;
      right: 5px;
      color: ${props => props.theme.grayMid};
      font-size: 18px;
      transform: translateY(-50%);
    }
  }
  /* search-filter component styling ends here */

  /* price-filter component styling starts here */
  .range-filter-form {
    text-align: center;

    .input-group {
      width: 100%;
      height: 20px;
      margin: 10px 0;
      position: relative;
    }
    
    input[type=range] {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      appearance: none;
      background-color: transparent;
      transform: translate(-50%, -50%);
      cursor: pointer;
      outline: none;
      
      &::-webkit-slider-runnable-track {
        height: 0;
        appearance: none;
      }
    
      &::-webkit-slider-thumb {
        width: 15px;
        height: 15px;
        border-radius: ${props => props.theme.radius50};
        appearance: none;
        background-color: ${props => props.theme.blueMid};
        transform: translateY(-50%);
        transition: all .3s;

        &:active {
          box-shadow: inset 0 0 0 3px ${props => props.theme.blueMid};
          background-color: ${props => props.theme.grayLight};
        }
      }
    }
    
  }

  .range-track {
    width: 100%;
    height: 5px;
    border-radius: ${props => props.theme.radiusDefault};
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${props => props.theme.blueMid};
    text-indent: -99999px;
    transform: translate(-50%, -50%);
  }

  .range-value {
    width: fit-content;
    padding: 8px 15px;
    border-radius: ${props => props.theme.radiusDefault};
    margin: 0 auto 20px;
    position: relative;
    background-color: ${props => props.theme.blueMid};
    color: ${props => props.theme.grayLight};
    font-size: 14px;
    font-weight: 600;

    &::before {
      content: '';
      border: 8px solid transparent;
      position: absolute;
      top: 100%;
      left: 50%;
      border-top-color: ${props => props.theme.blueMid};
      transform: translateX(-50%);
    }

    span {
      margin: 0 6px;
    }
  }
  /* price-filter component styling ends here */

  /* category-filter component styling starts here */
  .product-category-lists {
    > * {
      width: fit-content;
      margin-bottom: 8px;
      display: block;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
      text-transform: capitalize;

      &:last-child { margin-bottom: 0; }
      
      .category-name {
        margin-right: 5px;
        color: ${props => props.theme.blueMid};
      }

      .category-count {
        color: ${props => props.theme.grayDark};
      }
    }
  }
  /* category-filter component styling ends here */
`

export default StyledFilterSidebar;