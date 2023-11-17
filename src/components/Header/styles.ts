import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;

  font-size: ${(props) => props.theme.typography['text-s']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme, variant }) => css`
    background: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]};

    span {
      background: ${theme.colors[`${variant}-dark`]};
    }
  `}

  ${({ theme, variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors.purple};
      }
    `}
`
