import styled from 'styled-components'

export const SeeMoreButtonWrapper = styled.button`
  display: block;
  width: 100%;

  margin-top: 2.5rem;
  padding-block: 0.4rem;

  background: ${({ theme }) => theme.buttonBackgroundColor};

  border-radius: 0.4rem;
  border-color: ${({ theme }) => theme.buttonBackgroundColor};
  border-style: solid;

  line-height: 32px;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;

  text-align: center;

  @media (min-width: 980px) {
    max-width: 18rem;

    margin-inline: auto;
  }
`
