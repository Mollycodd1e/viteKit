import { ReactNode } from 'react'

type btnWidth = 'auto' | 'full'

export const TAG_VARIANTS = {
	red: 'red',
	gray: 'gray',
}

export type tagVariant = keyof typeof TAG_VARIANTS

type tagSizes = 'medium' | 'tiny'

interface MobileButtonProps {
	size?: tagSizes
	children?: string | ReactNode
	variant?: tagVariant
	width?: btnWidth
	additionalClass?: string
}

export type ComponentProps = MobileButtonProps & React.HTMLAttributes<HTMLDivElement>

