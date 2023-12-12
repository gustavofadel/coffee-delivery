import { CartItem } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  CLEAN_CART = 'CLEAN_CART',
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

export function removeCartItemAction(cartItemId: number) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      cartItemId,
    },
  }
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}
