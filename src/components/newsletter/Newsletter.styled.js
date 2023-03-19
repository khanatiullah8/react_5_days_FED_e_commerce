import styled from "styled-components";

const StyledNewsletter = styled.section`
  padding: 40px 0;

  .newsletter-wrapper {
    padding: 60px 5%;
    border-radius: ${props => props.theme.radiusDefault};
    background-color: ${props => props.theme.blueLight};
  }

  .section-subtitle-icon { background: ${props => props.theme.blueMid}; }
  .section-subtitle { color: ${props => props.theme.blueMid}; }

  .newsletter-form {
    display: flex;
    align-items: center;

    .input-group {
      width: 390px;
      margin-right: 20px;
    }

    input[type=email] {
      width: 100%;
      color: ${props => props.theme.grayDarkest};
    }

    input[type=submit] {
      background-color: ${props => props.theme.grayDarkest};
      color: ${props => props.theme.white};
      font-weight: 600;
      text-transform: capitalize;
      transition: all .3s;

      &:hover {
        background-color: ${props => props.theme.blueMid};
      }
    }

    input {
      padding: 20px 30px;
      border: none;
      font-size: 16px;
      border-radius: ${props => props.theme.radiusDefault};
    }
  }
`

export default StyledNewsletter