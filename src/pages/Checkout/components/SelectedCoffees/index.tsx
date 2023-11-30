import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { RegularText, TitleText } from '../../../../components/Typography'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItem } from '../CartItem'
import {
  ConfirmationSectionContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from './styles'

export function SelectedCoffees() {
  const { cartItems } = useContext(CartContext)

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

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
