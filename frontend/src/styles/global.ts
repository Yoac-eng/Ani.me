import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-weight: 400;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    :root {
        --primary-color: #00A3FF;
        --secondary-color: #151B26;
        --dark-color: #06090F;
        
        --gray: #BFBFBF;
        --white: #FFFFFF;
    }

    html,
    body {
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var( --dark-color);
        color: var(--white);
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: var(--white);
    }

    ul {
        list-style: none;
    }

    .wrapper {
        width: min(36rem, 100%);

        margin-inline: auto;
        padding: 2.4rem;
    }
`