export const checkBedroomsCount = (сount: number | null) => {
	if (typeof сount !== 'number' || сount < 0) {
		return 'нет спален'
	}

	const lastDigit = сount % 10
	const lastTwoDigits = сount % 100

	if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
		return `${сount} спален`
	}

	switch (lastDigit) {
		case 1:
			return `${сount} спальня`
		case 2:
		case 3:
		case 4:
			return `${сount} спальни`
		default:
			return `${сount} спален`
	}
}

