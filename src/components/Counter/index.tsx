import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, Icon } from './styles'

interface CounterProps {
  quantity: number
  size?: 'medium' | 'small'
}

export function Counter({ quantity, size = 'medium' }: CounterProps) {
  const decreaseCounterDisabled = quantity < 1

  return (
    <CounterContainer size={size}>
      <Icon disabled={decreaseCounterDisabled}>
        <Minus size={14} weight="fill" />
      </Icon>

      <input type="number" value={quantity} readOnly />

      <Icon>
        <Plus size={14} weight="fill" />
      </Icon>
    </CounterContainer>
  )
}
