import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, IconContainer } from './styles'

interface CounterProps {
  quantity: number
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
}

export function Counter({
  quantity,
  size = 'medium',
  onIncrease,
  onDecrease,
}: CounterProps) {
  const decreaseCounterDisabled = quantity <= 1

  return (
    <CounterContainer size={size}>
      <IconContainer disabled={decreaseCounterDisabled} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconContainer>

      <input type="number" value={quantity} readOnly />

      <IconContainer onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconContainer>
    </CounterContainer>
  )
}
