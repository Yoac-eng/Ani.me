import styled from "styled-components";

export const HomeMain = styled.main`
    
    margin-top: 4.8rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.026rem;
    
    header {
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .6rem;


        strong {
            font-family: "Rubik", sans-serif;
            font-size: 1.8rem;
            line-height: 21.33px;
            color: var(--white);
        }

        p {
            font-family: "Inter", sans-serif;
            font-size: 1.4rem;
            line-height: 16.93px;
            color: var(--gray);
        }
    }

    a {
        position: relative;

        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column;

        height: 16.447rem;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        
        background-image: url("https://source.unsplash.com/random");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        div {
            margin-left: 1.792rem;
            margin-bottom: 1.684rem;

            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: .891rem;

            z-index: 1;

            strong {
                font-family: "Rubik", sans-serif;
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 16.59px;
                text-transform: uppercase;
                color: var(--white);
            }

            p {
              max-width: 22.727rem;
              font-family: "Poppins", sans-serif;
              font-size: .8rem;
              line-height: 12.8px;
              color: var(--gray);
            }
        }
    }

    a::after {
        position: absolute;
        content:"";
        
        height:100%;
        width:100%;

        top:0;
        left:0;

        background: linear-gradient(269.96deg, rgba(6, 9, 15, 0.41) 0.04%, rgba(6, 9, 15, 0.8) 99.5%);
    }
`