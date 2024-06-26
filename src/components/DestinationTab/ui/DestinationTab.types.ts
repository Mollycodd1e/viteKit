import { ReactNode } from 'react'

type destinationSizesWidth = 'auto' | 'full'

export const DESTINATIONS_VARIANTS = {
	whiteStroke: 'whiteStroke',
}

export type destinationSizesVariant = keyof typeof DESTINATIONS_VARIANTS

type destinationSizes = 'large' | 'medium'

interface IDestinationProps {
	size?: destinationSizes
	size_m?: destinationSizes
	size_l?: destinationSizes
	checked?: boolean
	destination?: {
		destName?: string
		color?: string
	}
	routes?: {
		type?: ReactNode
		text?: string
	}[]
	onChange?: () => void
	children?: string | ReactNode
	variant?: destinationSizesVariant
	width?: destinationSizesWidth
	additionalClass?: string
	isLoading?: boolean
	as?: 'button' | 'link'
}

export type ComponentProps = IDestinationProps & React.ButtonHTMLAttributes<HTMLLabelElement>

