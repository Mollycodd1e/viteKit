type TagWidth = 'full' | 'auto'

export interface IMetroTagProps extends React.HTMLAttributes<HTMLDivElement> {
	metro: {
		name?: string
		color?: string
		routes?: {
			text?: string
			icon?: string
		}[]
	}
	addClassName?: string
	width?: TagWidth
}

