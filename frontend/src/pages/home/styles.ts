import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top: calc(3.6rem + var(--navbar-height));
`
interface HomeMainProps {
  trailerBackgroundImage: string | undefined
}

export const HomeMain = styled.main<HomeMainProps>`
  margin-top: 4.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.026rem;

  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: ${({ theme }) => theme.titleColor};
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;

    p {
      font-family: 'Inter', sans-serif;
      font-size: 1.4rem;
      line-height: 16.93px;
      color: ${({ theme }) => theme.secondaryTextColor};
    }
  }

  #main-pannel {
    position: relative;

    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;

    height: 16.447rem;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;

    background-image: ${(props) =>
      props.trailerBackgroundImage
        ? `url(${props.trailerBackgroundImage})`
        : `url(${'/bigImageNotFound.jpeg'})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    div {
      margin: auto 1.792rem 1.684rem 1.792rem;

      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.891rem;

      z-index: 1;

      strong {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 16.59px;
        text-transform: uppercase;
        color: var(--white);
      }

      p {
        max-width: 22.727rem;
        font-family: 'Poppins', sans-serif;
        font-size: 0.8rem;
        line-height: 12.8px;
        color: var(--gray);
      }
    }
  }

  a::after {
    position: absolute;
    content: '';

    height: 100%;
    width: 100%;

    top: 0;
    left: 0;

    background: linear-gradient(
      269.96deg,
      rgba(6, 9, 15, 0.41) 0.04%,
      rgba(6, 9, 15, 0.8) 99.5%
    );
  }

  @media (min-width: 980px) {
    header {
      .title {
        font-size: 2.4rem;
        line-height: 2.4rem;
      }
      p {
        font-size: 1.8rem;
        line-height: 2.9rem;
      }
    }

    #main-pannel {
      height: 30rem;

      div {
        margin-bottom: 3rem;

        strong {
          font-size: 2.2rem;
          line-height: 3.5rem;
        }
        p {
          max-width: 57rem;

          font-size: 1.5rem;
          line-height: 2.88rem;

          max-height: 20rem;
          overflow: hidden;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    gap: 4rem;

    header {
      .title {
        font-size: 3.2rem;
        line-height: 3.8rem;
      }
      p {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }
    }

    #main-pannel {
      height: 40rem;

      div {
        margin-bottom: 4rem;

        strong {
          font-size: 3rem;
          line-height: 6.4rem;
        }
        p {
          font-size: 1.8rem;
        }
      }
    }
  }
`

export const LastUpdates = styled.section`
  margin-top: 4.026rem;

  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: ${({ theme }) => theme.titleColor};
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }

  @media (min-width: 980px) {
    .title {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }

    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1920px) {
    margin-top: 4rem;

    .title {
      font-size: 3.2rem;
      line-height: 3.782rem;
    }

    .grid {
      margin-top: 4rem;

      grid-template-columns: repeat(6, 1fr);
    }
  }
`

export const MostPopular = styled.section`
  margin-top: 4.8rem;

  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: ${({ theme }) => theme.titleColor};
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }
`
