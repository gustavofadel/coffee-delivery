import styled from 'styled-components'

export const BenefitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  iconBackgroundColor: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBackgroundColor }) => iconBackgroundColor};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`
