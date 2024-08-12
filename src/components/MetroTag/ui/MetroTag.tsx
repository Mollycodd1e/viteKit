import classNames from 'classnames'
import s from './MetroTag.module.scss'
import {IMetroTagProps} from './MetroTag.types'
import {NewIcon} from '../../NewIcon'

const cx = classNames.bind(s)

export const MetroTag = ({
                             addClassName,
                             addClassNameColor,
                             metro,
                             width = 'auto',
                             variant = 'default',
                             isBetween = false,
                             ...rest
                         }: IMetroTagProps) => {
    const possibleIcons = ['car', 'walk']
    return (
        <div
            className={cx(s.root, s[variant], s[isBetween ? 'long' : ''], addClassName, s[width])}
            {...rest}>
            <div className={cx(s.metroColor, addClassNameColor)}>
                {metro?.color && <span style={{background: metro?.color ?? ''}}></span>}
                {metro.name}
            </div>
            {metro.routes &&
                metro.routes.map((m, i) => {
                    return (
                        <div
                            key={i}
                            className={s.route}>
                            {m.iconName && possibleIcons.includes(m.iconName) && (
                                <NewIcon
                                    size='20'
                                    name={m.iconName}
                                    color='#777E90'
                                />
                            )}
                            {m.timeTo + ' ' + 'мин'}
                        </div>
                    )
                })}
        </div>
    )
}

