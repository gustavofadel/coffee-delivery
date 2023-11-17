import { ReactNode } from 'react'
import { BenefitContainer, IconContainer } from './styles'

interface BenefitProps {
  icon: ReactNode
  iconBackgroundColor: string
  text: string | ReactNode
}

export function Benefit({ icon, iconBackgroundColor, text }: BenefitProps) {
  return (
    <BenefitContainer>
      <IconContainer iconBackgroundColor={iconBackgroundColor}>
        {icon}
      </IconContainer>

      {typeof text === 'string' ? <p>{text}</p> : text}
    </BenefitContainer>
  )
}
