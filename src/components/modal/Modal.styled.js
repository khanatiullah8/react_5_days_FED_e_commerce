import styled, { keyframes } from "styled-components";

const popUp = keyframes`
  0% { transform: translate(-50%, -50%) scale(0); }
  100% { transform: translate(-50%, -50%) scale(1); }
`

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.6));

  .modal-content {
    width: 340px;
    height: 340px;
    position: fixed;
    z-index: 11;
    top: 50%;
    left: 50%;
    box-shadow: 0 0 8px ${props => props.theme.grayDarkest};
    transform: translate(-50%, -50%);

    &.active { animation: ${popUp} .3s linear forwards; }

    .close-modal {
      width: 36px;
      height: 36px;
      border-radius: ${props => props.theme.radiusDefault};
      display: inline-flex;
      position: absolute;
      z-index: 11;
      top: -14px;
      right: -14px;
      align-items: center;
      color: ${props => props.theme.grayDark};
      background-color: rgba(0,0,0,.8);
      cursor: pointer;
      font-size: 24px;
      font-weight: 600;
      justify-content: center;
      text-align: center;
      transition: all .3s;

      &:hover { color: ${props => props.theme.grayLight}; }
    }

    .modal-slider-control {
      width: fit-content;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      > * {
        padding: 12px;
        border-radius: ${props => props.theme.radiusDefault};
        background-color: ${props => props.theme.grayDarkest};
        color: ${props => props.theme.grayDark};
        cursor: pointer;
        font-size: 20px;
        transition: all .3s;

        > * { stroke-width: 1; }

        &:hover { color: ${props => props.theme.grayLight} }
        &:not(:last-child) { margin-right: 20px; }
      }
    }

    figure {
      height: 100%;
      border-radius: ${props => props.theme.radiusDefault};
      margin-bottom: 10px;
      overflow: hidden;
      position: relative;

      figcaption {
        width: 100%;
        padding: 10px 5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        background-color: rgba(0,0,0,.7);
        color: ${props => props.theme.grayLight};
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
        transform: translateX(-50%);
      }
      
      img {
        height: 100%;
        object-fit: cover;
      }
    }

  }
`

export default StyledModal;