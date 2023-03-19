import styled from "styled-components";

const StyledLogin = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  background-color: ${(props) => props.theme.blueMid};
  place-items: center;

  .login-wrapper {
    > *:first-child {
      margin-bottom: 20px;
      text-align: center;
    }
  }

  .form-container {
    max-width: 320px;
    width: 100%;
    padding: 30px 15px;
    border-radius: ${(props) => props.theme.radiusDefault};
    margin: auto;
    background-color: ${(props) => props.theme.grayLight};
    box-shadow: ${(props) => props.theme.cardShadow};
  }

  .section-title {
    margin: 0;
    margin-bottom: 35px;
    font-size: 26px;
    letter-spacing: normal;
    text-align: center;
  }

  .input-group {
    margin-bottom: 50px;
    position: relative;
    z-index: 1;

    .placeholder {
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 15px;
      color: ${(props) => props.theme.grayDarkest};
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
      transform: translateY(-50%);
      transition: all 0.3s;
    }

    .bg-span {
      width: 100%;
      height: 100%;
      border-radius: ${(props) => props.theme.radiusDefault};
      overflow: hidden;
      position: absolute;
      z-index: -2;
      bottom: 0;
      left: 0;
      text-indent: -99999px;

      &::before {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${(props) => props.theme.blueMid};
        transition: all 0.3s;
      }
    }

    .error-alert {
      position: absolute;
      bottom: -50%;
      left: 15px;
      color: ${(props) => props.theme.red};
      font-size: 12px;
      opacity: 0;
      text-transform: capitalize;
      visibility: hidden;

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }

    input {
      width: 100%;
      padding: 10px 15px;
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.grayLight};
      font-size: 16px;
      transition: all 0.3s;

      &:focus ~ .bg-span::before { height: 100%; }
      &:focus ~ .placeholder { top: -25%; }
    }

    .bg-span.active::before { height: 100%; }
    .placeholder.active { top: -25%; }
  }

  .input-control {
    text-align: center;

    > * {
      position: relative;
      z-index: 1;

      &::before {
        content: "";
        width: 0;
        height: 100%;
        border-radius: inherit;
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        background-color: ${(props) => props.theme.blueMid};
        transition: all 0.3s;
      }

      &:hover::before {
        width: 100%;
        right: unset;
        left: 0;
      }
    }
  }
`;

export default StyledLogin;