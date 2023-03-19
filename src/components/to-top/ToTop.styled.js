import styled from "styled-components";

const StyledToTop = styled.div`
  width: 45px;
  height: 45px;
  border-radius: ${props => props.theme.radiusDefault};
  display: grid;
  position: fixed;
  right: 40px;
  bottom: 40px;
  background: ${props => props.theme.facebook};
  color: ${props => props.theme.white};
  cursor: pointer;
  opacity: 0;
  place-items: center;
  transition: transform .3s;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    transform: translateY(-5px);
  }
`

export default StyledToTop;