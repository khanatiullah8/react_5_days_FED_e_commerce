import styled from "styled-components";

const StyledKeyFeatures = styled.section`
  padding: 50px 0;

  .key-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    > * {
      padding: 10px 0;
      display: flex;
      align-items: center;
      font-size: 15px;
    }

    .feature-icon {
      margin-right: 15px;
      color: ${props => props.theme.blueMid};
      font-size: 46px;
    }

    h5 {
      margin-bottom: 8px;
      color: ${props => props.theme.grayDarkest};
      font-weight: 600;
      text-transform: capitalize;
    }

    p { color: ${props => props.theme.grayDark}; }
  }
`

export default StyledKeyFeatures;