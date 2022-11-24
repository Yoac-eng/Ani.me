import styled from 'styled-components'

type EpisodeWrapperProps = {
  episodeImageUrl: string
}

export const EpisodeWrapper = styled.div<EpisodeWrapperProps>`
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

    background-image: url(${(props) => props.episodeImageUrl});
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
    color: ${({ theme }) => theme.secondaryTextColor};
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 45%;

    white-space: nowrap;

    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: var(--gray);

    #anime-name {
      width: fit-content;

      font-size: 1.05rem;
      font-weight: 500;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    #anime-name:hover {
      border-bottom: 1px solid var(--gray);
    }

    #episode-name {
      color: ${({ theme }) => theme.titleColor};

      overflow: hidden;
      text-overflow: ellipsis;
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
