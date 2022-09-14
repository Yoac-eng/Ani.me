import styled from "styled-components";

export const AnimeBanner = styled.figure`
    margin-top: calc(var(--navbar-height) + 1rem);

    position: relative;
    display: flex;
    justify-content: center;
    
    #bg-image{
      height: 35rem;

      filter: blur(4px);
      -webkit-filter: blur(4px);
    }

    #main-image{
      max-width: 90%;
      height: 100%;            
      position: absolute;
      z-index: 1;
    }


`