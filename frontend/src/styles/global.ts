import { createGlobalStyle } from 'styled-components'
import '@vime/core/themes/default.css'

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
        --medium-gray: #525252;
        --lighter-gray: #CACACA;
        
        --white: #FFFFFF;
        --lighter-white: #f5f5f5;

        --navbar-height: 3.2rem;
        
        --wrapper-padding: 2.4rem;
    }

    html,
    body {
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.backgroundColor};
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
        padding: var(--wrapper-padding);
    }

    @media(min-width: 980px){
      .wrapper{
        width: 66.6%;
      }
    }
`
