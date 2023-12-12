import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import {
  addItemToCartAction,
  changeCartItemQuantityAction,
  cleanCartAction,
  removeCartItemAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotalPrice: number
  addItemToCart: (newItem: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const cartQuantity = cartState.items.length

  const cartItemsTotalPrice = cartState.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addItemToCart(newItem: CartItem) {
    dispatch(addItemToCartAction(newItem))
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    dispatch(changeCartItemQuantityAction(cartItemId, type))
  }

  function removeCartItem(cartItemId: number) {
    dispatch(removeCartItemAction(cartItemId))
  }

  function cleanCart() {
    dispatch(cleanCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.items,
        cartQuantity,
        cartItemsTotalPrice,
        addItemToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
