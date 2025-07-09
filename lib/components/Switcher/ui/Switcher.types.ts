export interface ISwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
	isActive?: boolean
	onClick?: () => void
}
