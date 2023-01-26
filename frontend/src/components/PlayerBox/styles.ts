import styled from 'styled-components'

export const PlayerBoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  .player-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .player {
      h1 {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 19px;
        color: ${({ theme }) => theme.titleColor};

        margin-bottom: 2.3rem;
      }
    }

    //Display set to none cause those elements should be shown only on mediaquery
    .animeCardContainer {
      display: none;
    }

    .desc-container {
      img {
        display: none;
      }

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
            cursor: pointer;
            margin-inline: auto;
          }
        }

        p .viewMore-link {
          color: ${({ theme }) => theme.titleColor};
        }
      }
    }
  }

  @media (min-width: 980px) {
    .player-container {
      .player-animes-container {
        .player {
          h1 {
            font-size: 2.4rem;
            line-height: 2.4rem;
          }
        }
      }

      .desc-container {
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
  }

  @media (min-width: 1250px) {
    .player-container {
      .desc-container {
        display: flex;
        align-items: flex-start;
        gap: 4rem;

        img {
          display: block;
          width: 18rem;
          height: 28rem;

          border-radius: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .player-container {
      gap: 3rem;

      .player-animes-container {
        display: flex;
        gap: 2rem;

        .player {
          h1 {
            font-size: 3.2rem;
            line-height: 3.2rem;

            margin-bottom: 2.6rem;
          }

          width: min(98rem, 100%);
        }

        .animeCardContainer {
          display: flex;
          flex-direction: column;
          gap: 2.6rem;

          label {
            font-family: 'Rubik', sans-serif;
            font-weight: 400;
            font-size: 3.2rem;
            line-height: 3.2rem;
            color: ${({ theme }) => theme.secondaryTextColor};
          }

          .animeHorizontalCard {
            display: flex;
            width: 29.1rem;
            height: 11.7rem;

            background-color: ${({ theme }) => theme.MenuBackgroundColor};

            .cardInfos {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              gap: 1.3rem;

              padding: 1rem;

              p {
                font-family: 'Rubik', sans-serif;
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 2.133rem;
                color: ${({ theme }) => theme.titleColor};

                overflow: hidden;
              }

              span {
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 1.936rem;
                color: ${({ theme }) => theme.secondaryTextColor};
              }
            }
          }
        }
      }

      .desc-container {
        img {
          width: 22.8rem;
          height: 32.9rem;
        }

        .desc {
          font-size: 1.6rem;
          line-height: 1.963rem;

          .desc-item {
            font-size: 2rem;
            line-height: 3.2rem;
          }

          p {
            font-size: 1.8rem;
            line-height: 2.8rem;
          }
        }
      }
    }
  }
`
