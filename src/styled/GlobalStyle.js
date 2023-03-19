import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* ==========================================================================
   1. CSS Reset Code
   ========================================================================== */

/* 1.1. Eric Meyers Reset
   http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
   ========================================================================== */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

/* Force scrollbar */
html {
  overflow-y: scroll;
  scroll-behavior: smooth;
}

/* Align radios and text inputs with their label */

input[type='radio'] { vertical-align: text-bottom; }

/* Hand cursor on clickable input elements */
label,
input[type='button'],
input[type='submit'],
button {
  cursor: pointer;
}

strong {
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
}

em { font-style: italic; }

img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}

sub,
sup {
  vertical-align: baseline;
  position: relative;
  font-size: 55%;
  line-height: 0;
}

sup { top: -.7em; }
sub { bottom: -.25em; }

/* 1.2. Clear Fix
   ========================== */

.cf:before,
.cf:after {
  display: table;
  content: " ";
}

.cf:after { clear: both; }
.cf { *zoom: 1; }

/*for all*/

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  box-sizing: border-box;
  font-family: sans-serif;
}

span { display: inline-block; }

a { 
  display: inline-block;
  text-decoration: none; 
  transition: all .3s;
}

li {
  display: inline-block;
  list-style-type: none;
}

input,
button {
  outline: none;
}

svg { display: block; }
p { line-height: 1.5; }
p::first-letter { text-transform: capitalize; }
html.overflow-hidden { overflow: hidden; }

/* common styling */

.section-title {
  margin: 15px 0 25px;
  color: ${props => props.theme.grayDarkest};
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 1px;

  &::first-letter { text-transform: capitalize; }
}

.section-subtitle-box {
  display: flex;
  align-items: center;
}

.section-subtitle-icon {
  width: 25px;
  height: 25px;
  border-radius: ${props => props.theme.radius50};
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.white};
  justify-content: center;
}

.section-subtitle {
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
}

.filter-title {
  margin-bottom: 12px;
  color: ${props => props.theme.grayDarkest};
  font-size: 16px;
  font-style: italic;
  font-weight: 600;
  text-transform: uppercase;
}

`;

export default GlobalStyle;
