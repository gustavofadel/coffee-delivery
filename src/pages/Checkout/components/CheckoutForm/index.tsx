import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'
import { RegularText, TitleText } from '../../../../components/Typography'
import { PaymentMethod } from '../PaymentMethod'
import {
  AddressFormContainer,
  CheckoutFormContainer,
  FormSectionContainer,
  FormSectionTitle,
  PaymentMethodOptionsContainer,
} from './styles'

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

export function CheckoutForm() {
  const { colors } = useTheme()

  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <FormSectionTitle>
          <MapPinLine size={22} color={colors['yellow-dark']} />

          <div>
            <RegularText color="subtitle">Endereço de Entrega</RegularText>
            <RegularText size="s">
              Informe o endereço onde deseja receber seu pedido
            </RegularText>
          </div>
        </FormSectionTitle>

        <AddressFormContainer>
          <Input type="number" placeholder="CEP" className="cep" />
          <Input placeholder="Rua" className="street" />
          <Input type="number" placeholder="Número" className="number" />
          <Input
            placeholder="Complemento"
            className="complement"
            rightText="Opcional"
          />
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
        </AddressFormContainer>
      </FormSectionContainer>

      <FormSectionContainer>
        <FormSectionTitle>
          <CurrencyDollar size={22} color={colors.purple} />

          <div>
            <RegularText color="subtitle">Pagamento</RegularText>
            <RegularText size="s">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </RegularText>
          </div>
        </FormSectionTitle>

        <PaymentMethodOptionsContainer>
          {Object.entries(paymentMethods).map(([key, { icon, label }]) => (
            <PaymentMethod
              key={label}
              id={key}
              icon={icon}
              label={label}
              value={key}
            />
          ))}
        </PaymentMethodOptionsContainer>
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
