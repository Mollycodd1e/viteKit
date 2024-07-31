export const formatPrice = (price: string | number | null, perMetr?: boolean) => {
	if (!price) return 'Цена по запросу'

	const symbol = perMetr ? ' ₽/м²' : ' ₽'

	const res = Number(price).toLocaleString() + symbol

	return res
}

