import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{text}</ButtonContainer>
}
