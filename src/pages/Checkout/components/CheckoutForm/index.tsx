import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  AddressFormContainer,
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
    </CheckoutFormContainer>
  )
}
