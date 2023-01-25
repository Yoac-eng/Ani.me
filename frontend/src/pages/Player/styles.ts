import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  padding-top: calc(5.4rem + var(--navbar-height));
`

export const Related = styled.section`
  margin-top: 4rem;

  strong {
    font-family: 'Rubik', sans-serif;
    font-size: 1.4rem;
    line-height: 17px;
    color: ${({ theme }) => theme.titleColor};
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }

  @media (min-width: 980px) {
    strong {
      font-size: 1.6rem;
      line-height: 19.3px;
    }

    .title {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }

    .grid {
      grid-template-columns: repeat(auto-fill, minmax(14.4rem, 1fr));
    }
  }

  @media (min-width: 1920px) {
    strong {
      font-size: 1.8rem;
      line-height: 21.3px;
    }

    .title {
      font-size: 3.2rem;
      line-height: 3.782rem;
    }

    .grid {
      margin-top: 4rem;

      grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    }
  }
`
