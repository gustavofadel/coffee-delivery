import { produce } from 'immer'
import { CartItem } from '../../contexts/CartContext'
import { ActionTypes } from './actions'

interface CartState {
  items: CartItem[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.newItem.id,
      )

      const itemPresentInCart = itemIndex >= 0

      return produce(state, (draft) => {
        if (itemPresentInCart) {
          draft.items[itemIndex].quantity = action.payload.newItem.quantity
        } else {
          draft.items.push(action.payload.newItem)
        }
      })
    }

    case ActionTypes.CHANGE_CART_ITEM_QUANTITY: {
      const type = action.payload.type

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.cartItemId,
      )

      const itemPresentInCart = itemIndex >= 0

      return produce(state, (draft) => {
        if (itemPresentInCart) {
          const item = draft.items[itemIndex]

          draft.items[itemIndex].quantity =
            type === 'increase' ? item.quantity + 1 : item.quantity - 1
        }
      })
    }

    default:
      return state
  }
}
