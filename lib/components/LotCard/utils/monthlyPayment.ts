export const formatPayment = (payment: string) => {
	return `Ежемесячный платеж от ${Number(payment.replace(/\s/g, '')).toLocaleString()} ₽`
}

