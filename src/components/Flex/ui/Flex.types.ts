type IFlex =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| '13'
	| '14'
	| '15'
	| '16'

type IJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
type IAlignItems = 'start' | 'end' | 'center' | 'stretch'
type IFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type IFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	jc?: IJustifyContent
	ai?: IAlignItems
	gap?: IFlex
	fd?: IFlexDirection
	w?: IFlexWrap
}
