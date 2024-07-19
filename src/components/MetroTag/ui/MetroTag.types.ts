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
	addClassName?: string
	width?: TagWidth
}

