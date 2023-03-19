import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledBanner = styled.section`
  padding: 50px 0;
  background-color: ${props => props.theme.pinkLight};

  .banner-slider {
    > * {
      display: none;
      overflow: hidden;
      align-items: center;
      justify-content: space-between;
    }

    .banner-figure {
      width: 50%;
      flex-shrink: 0;
    }

    .slide.active { 
      display: flex;
      
      .banner-figure { animation: ${slideLeft} .5s ease-in forwards; }
      .slide-text { animation: ${slideUp} .5s ease-in forwards; }
    }
  }


  .section-subtitle-icon { background: ${props => props.theme.pink}; }
  .section-subtitle { color: ${props => props.theme.pink}; }
  
  .section-title {
    font-size: 40px;
    text-transform: capitalize;
  }

`

export default StyledBanner;