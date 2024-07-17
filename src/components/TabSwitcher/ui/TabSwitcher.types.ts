const TAB_SWITCHER_VARIANTS = {
	whiteRow: 'whiteRow',
}

type BaseInputProps = JSX.IntrinsicElements['input']

export interface ITabSwitcherItem extends BaseInputProps {
	addItemClassName?: string
}

export interface TabSwitcherProps {
	children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[]
	variant?: TABS_VARIANTS
	addClassName?: string
	col?: boolean
}

export type TABS_VARIANTS = keyof typeof TAB_SWITCHER_VARIANTS

