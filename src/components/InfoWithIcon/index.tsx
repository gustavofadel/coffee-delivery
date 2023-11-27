import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  iconBackgroundColor: string
  text: string | ReactNode
}

export function InfoWithIcon({
  icon,
  iconBackgroundColor,
  text,
}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBackgroundColor={iconBackgroundColor}>
        {icon}
      </IconContainer>

      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
