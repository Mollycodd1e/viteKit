import {ReactNode} from "react";

const TAB_SWITCHER_VARIANTS = {
	whiteRow: 'whiteRow',
	grayRow: 'grayRow',
}

type BaseInputProps = JSX.IntrinsicElements['input']

export interface ITabSwitcherItem extends BaseInputProps {
	addItemClassName?: string
	index: number
	isDisabled?: boolean
	itemsLength: number
	width?: string
	width_m?: string
	width_l?: string
	children?: ReactNode
}

export interface TabSwitcherProps {
	variant?: TABS_VARIANTS
	addClassName?: string
	isApart?: boolean
	col?: boolean
	children: React.ReactElement[]
}

export type TABS_VARIANTS = keyof typeof TAB_SWITCHER_VARIANTS

