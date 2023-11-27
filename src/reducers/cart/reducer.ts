import { produce } from 'immer'
import { Coffee } from '../../pages/Home/components/CoffeeCard'
import { ActionTypes } from './actions'

export interface CartItem extends Coffee {
  quantity: number
}

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

    default:
      return state
  }
}
