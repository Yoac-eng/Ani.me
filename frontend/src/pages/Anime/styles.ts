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
`
