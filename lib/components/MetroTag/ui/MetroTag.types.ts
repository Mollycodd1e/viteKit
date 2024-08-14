type TagWidth = 'full' | 'auto'

export interface IMetroTagProps extends React.HTMLAttributes<HTMLDivElement> {
	metro: {
		name?: string
		station?: string
		color?: string
		timeTo?: number
		mode?: string
	}
	variant?: 'default' | 'transparent'
	addClassName?: string
	addClassNameColor?: string
	isBetween?: boolean
	width?: TagWidth
	withBg?: boolean
}
