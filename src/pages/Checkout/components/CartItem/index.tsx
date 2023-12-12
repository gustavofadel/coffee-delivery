import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Counter } from '../../../../components/Counter'
import { RegularText } from '../../../../components/Typography'
import { CartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/format-money'
import { Coffee } from '../../../Home/components/CoffeeCard'
import { ActionsContainer, CartItemContainer, RemoveButton } from './styles'

interface ItemDetails extends Coffee {
  quantity: number
}

interface CartItemProps {
  item: ItemDetails
}

export function CartItem({ item }: CartItemProps) {
  const { changeCartItemQuantity } = useContext(CartContext)

  const totalPrice = item.price * item.quantity
  const formattedTotalPrice = formatMoney(totalPrice)

  function handleIncrease() {
    changeCartItemQuantity(item.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(item.id, 'decrease')
  }

  return (
    <CartItemContainer>
      <div>
        <img src={`coffees/${item.photo}`} alt="" />

        <div>
          <RegularText color="subtitle">{item.name}</RegularText>

          <ActionsContainer>
            <Counter
              size="small"
              quantity={item.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedTotalPrice}</p>
    </CartItemContainer>
  )
}
