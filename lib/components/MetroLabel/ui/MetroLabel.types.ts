type TagWidth = 'full' | 'auto'

type JustifyContent =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

export interface IMetroLabelProps extends React.HTMLAttributes<HTMLDivElement> {
    metro: {
        name?: string
        color?: string
        routes?: {
            timeTo?: string
            iconName?: string
        }[]
    }
    justifyContent?: JustifyContent
    colorIcon?: string
    addClassName?: string
    width?: TagWidth
}

