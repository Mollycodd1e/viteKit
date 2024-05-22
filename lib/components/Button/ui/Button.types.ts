import { ReactNode } from 'react'

type btnWidth = 'auto' | 'full'

export const BUTTON_VARIANTS = {
	blue: 'blue',
	gray: 'gray',
	whiteStroke: 'whiteStroke',
	sokolniki: 'sokolniki',
	black: 'black',
	whiteFilled: 'whiteFilled',
}

export type btnVariant = keyof typeof BUTTON_VARIANTS

interface ButtonProps {
	size?: string
	pre?: ReactNode
	post?: ReactNode
	children?: string
	variant?: btnVariant
	width?: btnWidth
	additionalClass?: string
	as?: 'button' | 'link'
}

export type ComponentProps = ButtonProps &
	(
		| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
				as?: 'button'
		})
		| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
				as: 'link'
		} & Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>)
	)

