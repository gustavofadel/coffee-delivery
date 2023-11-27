import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import illustration from '../../assets/success-illustration.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { RegularText, TitleText } from '../../components/Typography'
import { OrderDetailsContainer, SuccessContainer } from './styles'

export function Success() {
  const { colors } = useTheme()

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
                Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={illustration} alt="" />
      </section>
    </SuccessContainer>
  )
}
