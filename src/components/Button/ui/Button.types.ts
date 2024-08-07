import { ReactNode } from 'react'

export type btnWidth = 'auto' | 'full'

export const BUTTON_VARIANTS = {
	blue: 'blue',
	gray: 'gray',
	whiteStroke: 'whiteStroke',
	sokolniki: 'sokolniki',
	black: 'black',
	whiteFilled: 'whiteFilled',
	shade: 'shade',
	volodiyaLight: 'volodiyaLight',
}

export type btnVariant = keyof typeof BUTTON_VARIANTS

type btnSizes = 'large' | 'medium' | 'small' | 'tiny'

interface ButtonProps {
	size?: btnSizes
	size_m?: btnSizes
	size_l?: btnSizes
	pre?: ReactNode
	post?: ReactNode
	children?: string | ReactNode
	variant?: btnVariant
	width?: btnWidth
	additionalClass?: string
	isLoading?: boolean
	as: 'button' | 'link'
}

export type ComponentProps = ButtonProps &
	(
		| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
				as: 'button'
		})
		| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
				as: 'link'
		} & Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>)
	)
