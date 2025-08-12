import { ReactNode } from 'react'

type btnWidth = 'auto' | 'full'

export const MOBILE_BUTTON_VARIANTS = {
	whiteFilled: 'whiteFilled',
}

export type mobileBtnVariant = keyof typeof MOBILE_BUTTON_VARIANTS

type btnSizes = 'small'

interface MobileButtonProps {
	size?: btnSizes
	pre?: ReactNode
	post?: ReactNode
	children?: string
	variant?: mobileBtnVariant
	width?: btnWidth
	additionalClass?: string
	as?: 'button' | 'link'
}

export type ComponentProps = MobileButtonProps &
	(
		| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
				as?: 'button'
		})
		| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
				as: 'link'
		} & Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>)
	)

