import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0px 0px;
      outline: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      min-height: 100vh;
    }

    body {
      background: rgb(255,0,0);
      background: linear-gradient(180deg, rgba(148,25,35,1) 13%, rgba(178,30,30,0.8) 100%);
        -webkit-font-smoothing: antialiased important;
    }

    @media print {       
      body {
        background: #fff;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background-image: -webkit-linear-gradient(left, #f0f0f0, #f00, #f0f0f0);
      background-image: -moz-linear-gradient(left, #f0f0f0,  #f00, #f0f0f0);
      background-image: -ms-linear-gradient(left, #f0f0f0,  #f00, #f0f0f0);
      background-image: -o-linear-gradient(left, #f0f0f0,  #f00, #f0f0f0);

      @media print {
        background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
      }
    }

    body, input, button {
        color: #222;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
