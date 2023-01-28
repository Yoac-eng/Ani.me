import styled from 'styled-components'

export const NotFoundWrapper = styled.main`
  padding-top: 8rem;
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  img {
    width: min(36rem, 80%);
    height: auto;
  }

  #notfound-label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    h1 {
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      color: var(--primary-color);
    }

    p {
      font-family: 'Rubik', sans-serif;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.secondaryTextColor};

      .page-link {
        color: var(--primary-color);
      }

      .page-link:hover {
        border-bottom: 1px solid var(--primary-color);
      }
    }
  }

  @media (min-width: 1920px) {
    #notfound-label {
      h1 {
        font-size: 3.2rem;
        line-height: 3.782rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.963rem;
      }
    }
  }
`
