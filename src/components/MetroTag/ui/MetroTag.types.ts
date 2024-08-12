type TagWidth = 'full' | 'auto'

export interface IMetroTagProps extends React.HTMLAttributes<HTMLDivElement> {
	metro: {
		name?: string
		color?: string
		routes?: {
			timeTo?: string
			iconName?: string
		}[]
	}
	variant?: 'default' | 'transparent'
	addClassName?: string
	addClassNameColor?: string
	isBetween?: boolean
	width?: TagWidth
}

