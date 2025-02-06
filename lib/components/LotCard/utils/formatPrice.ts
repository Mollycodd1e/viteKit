export const formatPrice = (
	price: string | number | null,
	perMetr?: boolean,
	direction?: number | null
) => {
	if (!price && direction && direction === 2) return ''
	if (!price) return 'Цена по запросу'

	const symbol = perMetr ? ' ₽/м²' : ' ₽'

	const res = Number(price).toLocaleString() + symbol

	return res
}

