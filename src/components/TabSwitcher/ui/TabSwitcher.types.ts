import { ReactNode } from 'react'

const TAB_SWITCHER_VARIANTS = {
	whiteRow: 'whiteRow',
	grayRow: 'grayRow',
}

type TabSizes = 'medium' | 'small | large'

export interface ITabSwitcherItem extends React.InputHTMLAttributes<HTMLInputElement> {
	addItemClassName?: string
	addTextClass?: string
	index: number
	isDisabled?: boolean
	itemsLength: number
	width?: string
	width_m?: string
	mini?: boolean
	width_l?: string
	children?: ReactNode
	isLongOn?: boolean
	size_s?: TabSizes
	size_m?: TabSizes
	size_l?: TabSizes
}

export interface TabSwitcherProps {
	variant?: TABS_VARIANTS
	addClassName?: string
	isApart?: boolean
	col?: boolean
	children: React.ReactElement[]
}

export type TABS_VARIANTS = keyof typeof TAB_SWITCHER_VARIANTS
