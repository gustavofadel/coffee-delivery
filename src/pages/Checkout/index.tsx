import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  function handleConfirmOrder(data: CheckoutFormData) {
    console.log(data)
  }

  const { handleSubmit } = checkoutForm

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
