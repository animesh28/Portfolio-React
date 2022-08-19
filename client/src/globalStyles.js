import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *,*::after,*::before,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 h1,h2,h3,h4,h5,h6 {
    display: inline-block;
 }

 body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
    caret-color: rgba(0,0,0,0) !important;
 }

 input {
   caret-color: rgba(0,0,0,1) !important;
 }

 .st0{fill:#2f3131;}
	.st1{fill:#E6EBE0;}
	.st2{fill:#CBCCCA;}
	.st3{fill:#426E86;}
	.st4{fill:#F4F1BB;}

#mail-icon {
	width:90px;
	cursor: pointer;
}
`;

export default GlobalStyles;
