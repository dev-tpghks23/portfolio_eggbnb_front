import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const PALETTE = theme.PALETTE;

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
        letter-spacing: 0.3px;
        font-family: 'Pretendard-Regular' !important;
    }

    body {
        font-size: 16px;
        &::-webkit-scrollbar{
            width: 8px;
            background-color: ${PALETTE.gray[100]};
        }
        &::-webkit-scrollbar-thumb{
            
            background-color: ${PALETTE.yellow};
            border-radius: 5px;
        }
    }

    p, button {
        font-size: 14px;
    }

    span.tag { 
        font-size: 12px;
    }

`;

export default GlobalStyle;