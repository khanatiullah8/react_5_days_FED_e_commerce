import styled from "styled-components";

const StyledLogo = styled.h1`
  a {
    border: 2px solid ${props => props.loginWhite ? props.loginWhite : props.theme.blueMid};
    border-radius: ${(props) => props.theme.radiusDefault};
    color: ${props => props.loginWhite ? props.loginWhite : props.theme.blueMid};
    cursor: pointer;
    font-size: 26px;
    font-weight: 600;
    text-shadow: 1px 1px 3px ${props => props.theme.blueMid};
    text-transform: uppercase;

    > * {
      padding: ${props => props.loginWhite ? '4px 10px' : '2px 4px'};
      
      &:first-child {
        background-color: ${props => props.loginWhite ? props.loginWhite : props.theme.blueMid};
        color: ${props => props.loginBlue ? props.loginBlue : props.theme.white};
      }
    }
  }
`

export default StyledLogo;