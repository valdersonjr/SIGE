import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
      @import url('http://fonts.cdnfonts.com/css/futura-pt');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: Inter, 'Times New Roman', Times, serif;
        font-size: 16px;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      html,
      body {
        height: 100%;
        width: 100%;
      }

      footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        padding-bottom: 2.5rem;
        background-color: #fff;
      }

      #root {
        height: 100%;
      }

`;
