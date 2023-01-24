import styled from 'styled-components'

interface AnimeCardProps {
  backgroundImage: string | undefined
}

export const AnimeCardWrapper = styled.div<AnimeCardProps>`
  width: 14.4rem;

  color: ${({ theme }) => theme.titleColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.845rem;

  a {
    background-image: ${(props) =>
      props ? `url(${props.backgroundImage})` : 'none'};
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
      bottom: 1.12rem;

      z-index: 1;

      font-weight: 500;
      font-size: 1.226rem;
      font-family: 'Inter', sans-serif;
      line-height: 13.79px;
      color: var(--gray);

      white-space: nowrap;
    }
  }

  a::after {
    position: absolute;
    content: '';

    height: 100%;
    width: 100%;

    top: 0;
    left: 0;

    border-radius: 11px;

    background: ${({ theme }) => theme.cardGradient};
  }

  strong {
    font-size: 1.4rem;
    font-family: 'Rubik', sans-serif;
    line-height: 17px;
  }

  @media (min-width: 1920px) {
    width: 18rem;

    gap: 1.6rem;

    a {
      height: 25.4rem;

      p {
        font-size: 1.8rem;
      }
    }
  }
`
