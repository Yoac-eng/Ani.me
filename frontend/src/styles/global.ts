import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::root {
        --primary-color: #00A3FF;
        --secondary-color: #151B26;
        --dark-color: #06090F;
        
        --gray: #BFBFBF;
        --white: #FFFFFF;
    }
`