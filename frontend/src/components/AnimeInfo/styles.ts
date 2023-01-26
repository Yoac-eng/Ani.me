import styled from 'styled-components'

export const AnimeInfoWrapper = styled.section`
  margin-bottom: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    line-height: 19px;
    color: ${({ theme }) => theme.titleColor};
  }

  span {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.secondaryTextColor};

    word-break: break-all;
  }

  .desc-wrapper {
    .desc {
      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      line-height: 15px;
      color: ${({ theme }) => theme.secondaryTextColor};

      display: flex;
      flex-direction: column;
      gap: 2rem;

      .desc-item {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 17px;
        color: ${({ theme }) => theme.titleColor};
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
      }

      p {
        line-height: 19px;
        letter-spacing: 0.07em;

        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        span {
          margin-inline: auto;

          color: ${({ theme }) => theme.titleColor};

          cursor: pointer;
        }
      }
    }

    .desc-firstEpisode {
      display: none;
    }
  }

  //Start to watch button
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    padding-block: 0.4rem;
    background: var(--primary-color);

    line-height: 32px;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    text-align: center;
  }

  .button:hover {
    transition: 0.3s;
    background-color: var(--secondary-color);
  }

  @media (min-width: 980px) {
    h1 {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }

    span {
      font-size: 1.4rem;
      line-height: 1.5rem;
    }

    .desc-wrapper {
      .desc {
        font-size: 1.4rem;
        line-height: 1.5rem;

        .desc-item {
          font-size: 1.75rem;
          line-height: 2.4rem;
        }

        p {
          font-size: 1.75rem;
          line-height: 2.4rem;
        }
      }
    }
  }

  @media (min-width: 1250px) {
    .desc-wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;

      .desc {
        .button {
          display: none;
        }
      }

      .desc-firstEpisode {
        display: block;

        .button {
          width: 30rem;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    h1 {
      font-size: 3.2rem;
      line-height: 3.2rem;
    }

    span {
      font-size: 1.6rem;
      line-height: 1.963rem;
    }
    .desc-wrapper {
      .desc {
        font-size: 1.6rem;
        line-height: 1.963rem;

        .desc-item {
          font-size: 2rem;
          line-height: 3.2rem;
        }

        .button {
          display: none;
        }

        p {
          font-size: 1.8rem;
          line-height: 2.8rem;
        }
      }

      .desc-firstEpisode {
        display: block;

        .button {
          width: 30rem;
        }
      }
    }
  }
`
