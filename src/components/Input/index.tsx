import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer, InputWrapper, RightText, StyledInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer>
          <StyledInput ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputContainer>
      </InputWrapper>
    )
  },
)
