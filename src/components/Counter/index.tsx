import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, IconContainer } from './styles'

interface CounterProps {
  quantity: number
  size?: 'medium' | 'small'
}

export function Counter({ quantity, size = 'medium' }: CounterProps) {
  const decreaseCounterDisabled = quantity < 1

  return (
    <CounterContainer size={size}>
      <IconContainer disabled={decreaseCounterDisabled}>
        <Minus size={14} weight="fill" />
      </IconContainer>

      <input type="number" value={quantity} readOnly />

      <IconContainer>
        <Plus size={14} weight="fill" />
      </IconContainer>
    </CounterContainer>
  )
}
