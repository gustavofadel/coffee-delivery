import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { RegularText, TitleText } from '../../../../components/Typography'
import { CartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/format-money'
import { CartItem } from '../CartItem'
import {
  ConfirmationSectionContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from './styles'

export function SelectedCoffees() {
  const { cartItems, cartItemsTotalPrice, cartQuantity } =
    useContext(CartContext)

  const deliveryPrice = 3.5

  const formattedItemsPrice = formatMoney(cartItemsTotalPrice)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)
  const formattedTotalPrice = formatMoney(cartItemsTotalPrice + deliveryPrice)

  const submitCheckoutFormDisabled = cartQuantity < 1

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
            <RegularText>R$ {formattedItemsPrice}</RegularText>
          </div>

          <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ {formattedDeliveryPrice}</RegularText>
          </div>

          <div>
            <RegularText size="l" weight={700} color="subtitle">
              Total
            </RegularText>
            <RegularText size="l" weight={700} color="subtitle">
              R$ {formattedTotalPrice}
            </RegularText>
          </div>

          <Button
            text="Confirmar pedido"
            disabled={submitCheckoutFormDisabled}
            type="submit"
          />
        </ConfirmationSectionContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
