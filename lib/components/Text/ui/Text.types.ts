
export interface ITextProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: React.ReactNode | 'string'
	className?: string
	html?: string
}