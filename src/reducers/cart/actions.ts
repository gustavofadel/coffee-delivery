import { CartItem } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
}

export function addItemToCartAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function changeCartItemQuantityAction(
  cartItemId: number,
  type: 'increase' | 'decrease',
) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
      type,
    },
  }
}
