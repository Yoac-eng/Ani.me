import styled from 'styled-components'

export const EpisodeWrapper = styled.div`
  height: 8.5rem;
  padding: 0.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  #episode-banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('https://picsum.photos/200/300');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 50%;

    #episode-duration {
      position: absolute;
      right: 0;
      bottom: 0;

      padding: 0.35rem;

      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      line-height: 1.7rem;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  span {
    color: var(--gray);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: var(--gray);

    #anime-name {
      width: fit-content;

      font-size: 1.05rem;
      font-weight: 500;
    }

    #anime-name:hover {
      border-bottom: 1px solid var(--gray);
    }

    .minor-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      a {
        margin-left: auto;
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`
