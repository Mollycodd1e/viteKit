type TagWidth = 'full' | 'auto'

export interface IMetroTagProps extends React.HTMLAttributes<HTMLDivElement> {
	metro:
		| {
				name?: string
				station?: string
				color?: string
				timeTo?: number
				mode?: string
				icon?: string
		  }
		| {
				name?: string
				station?: string
				color?: string
				timeTo?: number
				mode?: string
				icon?: string
		  }[]
	variant?: 'default' | 'transparent'
	addClassName?: string
	addClassNameColor?: string
	addClassNameTimeTo?: string
	isBetween?: boolean
	width?: TagWidth
	withBg?: boolean
}
