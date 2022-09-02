import styled from "styled-components";

export const AnimeCardWrapper = styled.div`
    width: 14.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .845rem;

    a {

        background-image: url("https://source.unsplash.com/random");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        position: relative;
        
        display: block;

        width: 100%;
        height: 195px;
        
        border-radius: 12px;

        p {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            bottom: 1.120rem;

            z-index: 1;

            font-weight: 500;
            font-size: 1.226rem;
            font-family: "Inter", sans-serif;
            line-height: 13.79px;
            color: var(--gray);
        }

    }

    a::after {
        position: absolute;
        content:"";
        
        height:100%;
        width:100%;

        top:0;
        left:0;

        border-radius: 11px;

        background: linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%);
    }

    strong {
        font-size: 1.4rem;
        font-family: "Rubik", sans-serif;
        line-height: 17px;
    }
`