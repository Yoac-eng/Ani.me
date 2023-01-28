import styled from 'styled-components'

export const AnimeWrapper = styled.div`
  padding-top: calc(var(--navbar-height) + 1rem);
`

export const AnimeBanner = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1.7rem;

  #bg-image {
    height: 35rem;
    width: 100%;

    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  #main-image {
    max-width: 90%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  @media (min-width: 980px) {
    #bg-image {
      width: 50%;
    }
  }

  @media (min-width: 1920px) {
    #bg-image {
      height: 50rem;
    }
  }
`

export const EpisodesWrapper = styled.section`
  @media (min-width: 1450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 2.755rem 2.4rem;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
