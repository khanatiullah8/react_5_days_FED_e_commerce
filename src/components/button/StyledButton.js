import styled from "styled-components";

const StyledButton = styled.button.attrs({type: 'button'})`
  padding: 10px 20px;
  border: none;
  border-radius: ${props => props.theme.radiusDefault};
  font-size: 14px;
  font-weight: 600;
  outline: none;
  text-transform: capitalize;
  transition: transform .3s;

  &:hover { transform: scale(1.05); }

  &.banner-btn {
    padding: 15px 30px;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.grayDarkest};
    font-size: 16px;
  }

  &.addToCart-btn {
    background-color: ${props => props.theme.pink};
    color: ${props => props.theme.white};
  }

  &.price-filter-btn {
    background-color: ${props => props.theme.blueMid};
    color: ${props => props.theme.white};
  }

  &.clear-filter-btn {
    background-color: ${props => props.theme.pink};
    color: ${props => props.theme.white};
  }
`

const SubmitButton = styled(StyledButton).attrs({type: 'submit'})`
  background-color: ${props => props.theme.grayDarkest};
  color: ${props => props.theme.white};
`

export default StyledButton;
export { SubmitButton }