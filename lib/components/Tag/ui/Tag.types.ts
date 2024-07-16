import { ReactNode } from 'react'

type tagWidth = 'auto' | 'full'

export const TAG_VARIANTS = {
	red: 'red',
	gray: 'gray',
	shade: 'shade',
	blackGrey: 'blackGrey',
	chineseBlack: 'chineseBlack',
}

export type tagVariant = keyof typeof TAG_VARIANTS

type tagSizes = 'medium' | 'tiny' | 'large' | 'small' | 'preLarge'

interface TagProps {
	size?: tagSizes
	size_m?: tagSizes
	size_l?: tagSizes
	children?: string | ReactNode
	variant?: tagVariant
	width?: tagWidth
	additionalClass?: string
}

export type ComponentProps = TagProps & React.HTMLAttributes<HTMLDivElement>
