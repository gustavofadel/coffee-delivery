import { Button } from '../../../../components/Button'
import { RegularText, TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CartItem } from '../CartItem'
import {
  ConfirmationSectionContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CartItem item={{ ...coffees[0], quantity: 1 }} />
        <CartItem item={{ ...coffees[5], quantity: 1 }} />

        <ConfirmationSectionContainer>
          <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ 29,70</RegularText>
          </div>

          <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ 3,50</RegularText>
          </div>

          <div>
            <RegularText size="l" weight={700} color="subtitle">
              Total
            </RegularText>
            <RegularText size="l" weight={700} color="subtitle">
              R$ 33,20
            </RegularText>
          </div>

          <Button text="Confirmar pedido" type="submit" />
        </ConfirmationSectionContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
