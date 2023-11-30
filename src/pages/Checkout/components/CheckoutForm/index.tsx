import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RegularText, TitleText } from '../../../../components/Typography'
import { AddressForm } from '../AddressForm'
import { PaymentMethodOptions } from '../PaymentMethodOptions'
import {
  CheckoutFormContainer,
  FormSectionContainer,
  FormSectionTitle,
} from './styles'

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

        <AddressForm />
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

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
