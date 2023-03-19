import styled from "styled-components";

const StyledFooter = styled.footer`

  /* footer top */
  .footer-top {
    padding: 30px 0;
    border-top: 1px solid ${props => props.theme.blueLight};
    border-bottom: 1px solid ${props => props.theme.blueLight};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    a { color: ${props => props.theme.grayDark}; }

    h4 {
      margin-bottom: 24px;
      color: ${props => props.theme.grayDarkest};
      font-size: 18px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .footer-support-info {

      p {
        width: 65%;
        color: ${props => props.theme.grayDark}; 
        text-transform: capitalize; 
      }
      > *:not(:last-child) { margin-bottom: 14px; }

      a {
        display: inline-flex;
        align-items: center;

        > * { margin-right: 12px}

        &:hover { color: ${props => props.theme.grayDarkest}; }
      }
    }


    .footer-account,
    .footer-quick-link {
      li {
        margin-bottom: 14px;
        display: block;
      }

      a {
        padding: 3px 0;
        position: relative;
        
        &::before {
          content: '';
          width: 0;
          height: 2px;
          position: absolute;
          right: 0;
          bottom: 0;
          background-color: ${props => props.theme.grayDarkest};
          transition: all .3s;
        }

        &:hover { 
          color: ${props => props.theme.grayDarkest};
          &::before {
            width: 100%;
            right: unset;
            left: 0;
          }
        }
      }
    }
  }

  /* footer bottom */
  .footer-bottom {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: capitalize;

    .footer-social {
      display: flex;
      align-items: center;

      > *:not(:last-child) { margin-right: 15px; }

      a {
        color: ${props => props.theme.grayMid};
        font-size: 18px;

        &:hover { transform: scale(1.1); }
      }
    }

    .facebook-icon:hover { color: ${props => props.theme.facebook}; }
    .instagram-icon:hover { color: ${props => props.theme.instagram}; }
    .twitter-icon:hover { color: ${props => props.theme.twitter}; }
    .youtube-icon:hover { color: ${props => props.theme.youtube}; }
    .dribbble-icon:hover { color: ${props => props.theme.dribbble}; }
    .pinterest-icon:hover { color: ${props => props.theme.pinterest}; }

    p {
      color: ${props => props.theme.grayMid};
      font-size: 14px;
    }
  }
`

export default StyledFooter;