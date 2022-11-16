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
    color: var(--white);
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

    background-image: ${(props) =>
      props.trailerBackgroundImage
        ? `url(${props.trailerBackgroundImage})`
        : `url(${'/bigImageNotFound.jpeg'})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    div {
      margin-left: 1.792rem;
      margin-bottom: 1.684rem;

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
`

export const LastUpdates = styled.section`
  margin-top: 4.026rem;

  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: var(--white);
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }

  .button {
    display: block;

    margin-top: 3.68rem;
    padding-block: 0.4rem;
    background: var(--secondary-color);
    border-radius: 4px;

    line-height: 32px;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    text-align: center;
  }
`

export const Recent = styled.section`
  margin-top: 4.8rem;

  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: var(--white);
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }
`
