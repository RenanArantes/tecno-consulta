import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0px 5px;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        min-height: 100%;
    }
    body { 
      background: rgb(255,0,0);
      background: linear-gradient(180deg, rgba(255,0,0,1) 13%, rgba(255,0,0,0.4305214185393258) 100%);
        -webkit-font-smoothing: antialiased important;
    }
    body, input, buttom {
        color: #222;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        cursor: pointer;
    }
`