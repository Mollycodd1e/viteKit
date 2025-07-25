import { ReactNode } from 'react'

export const ROUND_BUTTON_VARIANTS = {
	whiteStroke: 'whiteStroke',
	blackFill: 'blackFill',
	fullGray: 'fullGray',
}

export type roundBtnVariant = keyof typeof ROUND_BUTTON_VARIANTS

export type btnSizes = 'large' | 'medium' | 'small' | 'tiny'

export const sizeMap = {
	large: '24',
	medium: '20',
	small: '16',
	tiny: '12',
}

interface IRoundButtonProps {
	size?: btnSizes
	size_m?: btnSizes
	size_l?: btnSizes
	children?: string | ReactNode
	variant?: roundBtnVariant
	additionalClass?: string
	additionalClassIcon?: string
	iconName?: string
	deg?: string
}

export type ComponentProps = IRoundButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
