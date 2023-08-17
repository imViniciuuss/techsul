import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;   
    }

    body{
      background-color: #fff;
    }

    *, button, input{
        border: 0;

    }

    a{
        text-decoration: none;
    }

    ul, li{
        list-style: none;
    }

  `;
