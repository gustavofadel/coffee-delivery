import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { addItemToCartAction } from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addItemToCart: (newItem: CartItem) => void
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

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addItemToCart(newItem: CartItem) {
    dispatch(addItemToCartAction(newItem))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.items,
        cartQuantity,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
