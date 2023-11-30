import styled from 'styled-components'

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const FormSectionContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormSectionTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`
