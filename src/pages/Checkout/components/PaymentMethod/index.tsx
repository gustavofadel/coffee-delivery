import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentMethod = forwardRef<HTMLInputElement, PaymentMethodProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentMethodContainer>
        <input type="radio" id={id} name="paymentMethod" ref={ref} {...props} />

        <label htmlFor="id">
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    )
  },
)
