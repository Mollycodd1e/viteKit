import classNames from 'classnames'
import s from './MetroLabel.module.scss'
import { NewIcon } from '../../NewIcon'
import {IMetroLabelProps} from "./MetroLabel.types.ts";

const cx = classNames.bind(s)

export const MetroLabel = ({ addClassName, metro, width = 'full', justifyContent = 'flex-start', colorIcon = '#777E90', ...rest }: IMetroLabelProps) => {
    return (
        <div style={{justifyContent: `${justifyContent}`}}
            className={cx(s.root, addClassName, s[width])}
            {...rest}>
            <div className={s.metroColor}>
                {metro?.color && <span style={{ background: metro?.color ?? '' }}></span>}
                {metro.name}
            </div>
            {metro.routes &&
                metro.routes.map((m, i) => {
                    return (
                        <div
                            key={i}
                            className={s.route}>
                            {m.iconName && (
                                <NewIcon
                                    size='20'
                                    name={m.iconName}
                                    color={colorIcon}
                                />
                            )}
                            {m.timeTo + ' ' + 'мин'}
                        </div>
                    )
                })}
        </div>
    )
}

