export const formatPrice = (
	price: string | number | null,
	perMetr?: boolean,
	direction?: number | null
) => {
	if (!price && direction === 2) return ''

	const symbol = perMetr ? ' ₽/м²' : ' ₽'

	const res = Number(price).toLocaleString() + symbol

	return res
}
