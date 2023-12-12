import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import illustration from '../../assets/success-illustration.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../components/Typography'
import { CheckoutFormData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PaymentMethodOptions'
import { OrderDetailsContainer, SuccessContainer } from './styles'

interface LocationType {
  state: CheckoutFormData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!state) {
    return <></>
  }

  return (
    <SuccessContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>

        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBackgroundColor={colors.purple}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBackgroundColor={colors.yellow}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBackgroundColor={colors['yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={illustration} alt="" />
      </section>
    </SuccessContainer>
  )
}
