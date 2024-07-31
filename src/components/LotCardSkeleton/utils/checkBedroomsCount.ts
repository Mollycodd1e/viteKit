export const checkBedroomsCount = (count?: number | null) => {
	if (!count || typeof count !== 'number' || count < 0) {
		return 'нет спален'
	}

	const lastDigit = count % 10
	const lastTwoDigits = count % 100

	if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
		return `${count} спален`
	}

	switch (lastDigit) {
		case 1:
			return `${count} спальня`
		case 2:
		case 3:
		case 4:
			return `${count} спальни`
		default:
			return `${count} спален`
	}
}

