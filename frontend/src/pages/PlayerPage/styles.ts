import styled from "styled-components";

export const Related = styled.section`
    margin-top: 4rem;

    strong {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 19px;
    color: var(--white);
    }

    .grid {
        margin-top: 2.8rem;
        
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.755rem 2.4rem;
    }
`