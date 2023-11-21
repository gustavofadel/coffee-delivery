import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { RegularText, TitleText } from '../../../../components/Typography'
import { formatMoney } from '../../../../utils/format-money'
import {
  Actions,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tag,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <Tag key={`${coffee.id}-${tag}`}>{tag}</Tag>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>

      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text">
            {formattedPrice}
          </TitleText>
        </div>

        <Actions>
          <Counter quantity={1} />

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Actions>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
