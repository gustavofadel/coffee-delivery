import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'
import { PaymentMethod } from '../PaymentMethod'
import { PaymentMethodOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    icon: <CreditCard size={16} />,
    label: 'Cartão de Crédito',
  },
  debit: {
    icon: <Bank size={16} />,
    label: 'Cartão de Débito',
  },
  money: {
    icon: <Money size={16} />,
    label: 'Dinheiro',
  },
}

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { icon, label }]) => (
        <PaymentMethod
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
