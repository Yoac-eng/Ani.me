import styled from 'styled-components'

export const SearchAnimeWrapper = styled.main`
  padding-top: calc(3.6rem + var(--navbar-height));
`

export const SearchResultsWrapper = styled.section`
  margin-top: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: ${({ theme }) => theme.titleColor};
    margin-right: auto;
  }
  .not-found-container {
    margin-top: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    .not-found-message {
      font-family: 'Rubik', sans-serif;
      font-size: 1.3rem;
      line-height: 21.33px;
      color: ${({ theme }) => theme.titleColor};
      margin-right: auto;
    }
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }

  @media (min-width: 980px) {
    .not-found-container {
      .not-found-message {
        font-size: 1.6rem;
        line-height: 19.3px;
      }
    }

    strong {
      font-size: 1.6rem;
      line-height: 19.3px;
    }

    .title {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }

    .grid {
      width: 100%;

      grid-template-columns: repeat(auto-fill, minmax(14.4rem, 1fr));
    }
  }

  @media (min-width: 1920px) {
    .not-found-container {
      .not-found-message {
        font-size: 1.8rem;
        line-height: 21.3px;
      }
    }

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
