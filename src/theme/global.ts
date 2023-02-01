import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
      @import url('https://fonts.cdnfonts.com/css/futura-pt');

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

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5px;
        }
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
