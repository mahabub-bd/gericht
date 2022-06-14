import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`



* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  
  a {
    color: unset;
    text-decoration: none;
  }
  
  .slide-bottom {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  
  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  

`;
export default Global;
