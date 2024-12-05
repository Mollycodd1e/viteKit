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
	separatorColor?: string
	variant?: 'default' | 'transparent' | 'mini'
	addClassName?: string
	addClassNameColor?: string
	addClassNameTimeTo?: string
	isBetween?: boolean
	width?: TagWidth
	withBg?: boolean
	withWhiteBg?: boolean
}
