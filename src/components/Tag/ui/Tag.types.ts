import { ReactNode } from 'react'

type tagWidth = 'auto' | 'full'

export const TAG_VARIANTS = {
	red: 'red',
	gray: 'gray',
	white: 'white',
	shade: 'shade',
	blackGrey: 'blackGrey',
	chineseBlack: 'chineseBlack',
	fullWhite: 'fullWhite',
	transparent: 'transparent',
	shadeWhite: 'shadeWhite',
	transWhite: 'transWhite',
	whiteGrayStroke: 'whiteGrayStroke',
	blackStroke: 'blackStroke',
	lightBlue: 'lightBlue',
	lightGray: 'lightGray',
	whiteGray: 'whiteGray',
}

export type tagVariant = keyof typeof TAG_VARIANTS

type tagSizes =
	| 'medium'
	| 'tiny'
	| 'large'
	| 'small'
	| 'preLarge'
	| 'mini'
	| 'tiny-7px'
	| 'tiny-10px'
	| 'small-10px'
	| 'small-13px'

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
