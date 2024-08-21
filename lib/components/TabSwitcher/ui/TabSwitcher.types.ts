const TAB_SWITCHER_VARIANTS = {
	whiteRow: 'whiteRow',
	whiteRow_apart: 'whiteRow_apart',
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
}

export interface TabSwitcherProps {
	variant?: TABS_VARIANTS
	addClassName?: string
	col?: boolean
	children: React.ReactElement[]
}

export type TABS_VARIANTS = keyof typeof TAB_SWITCHER_VARIANTS

