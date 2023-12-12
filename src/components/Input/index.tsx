import { InputHTMLAttributes, forwardRef } from 'react'
import { RegularText } from '../Typography'
import { InputContainer, InputWrapper, RightText, StyledInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightText?: string
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ rightText, error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer hasError={!!error}>
          <StyledInput ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputContainer>

        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
