'use client'
import {forwardRef} from 'react'
import s from './TabSwitcher.module.scss'
import {Text} from '../../Text'
import classNames from 'classnames'
import {ITabSwitcherItem, TabSwitcherProps} from './TabSwitcher.types'
import {useClientWidth} from "../../../main.ts";

const cx = classNames.bind(s)

const TabSwitcher = ({
                         children,
                         variant = 'whiteRow',
                         isApart = false,
                         addClassName = '',
                         col = false,
                     }: TabSwitcherProps) => {

    return (
        <div className={cx(s.root, s[variant], addClassName, {[s.rootCol]: col, [s.apart]: isApart})}>
            {children}
        </div>
    )

}

const TabSwitcherItem = forwardRef<HTMLInputElement, ITabSwitcherItem>((props, ref) => {
    const {isTablet, isDesktop} = useClientWidth()
    const {
        index, children, addItemClassName, disabled = false, itemsLength = 0,
        isLongOn = true,
        width,
        width_m,
        width_l,
        ...rest
    } = props
    const isLong = (children?.toString().length ? children?.toString().length > 2 : false) && isLongOn

    const getWidth = (isTablet: boolean, isDesktop: boolean) => {
        if (isTablet && width_m) return width_m
        else if (isDesktop && width_l) return width_l
        else return width
    }

    const isAutoWidth = !width && !width_m && !width_l && isLong

    return (
        <label className={cx({[s.isLong]: isLong})}>
            <input ref={ref}
                   type='checkbox'
                   {...rest} disabled={disabled}/>
            <div style={{width: getWidth(isTablet, isDesktop)}}
                 className={cx(cx(s.item, {[s.firstItem]: index === 0},
                     {[s.lastItem]: index === itemsLength - 1},
                     {[s.isDisabled]: disabled},
                     {[s.autoWidth]: isAutoWidth}
                 ), addItemClassName)}>
                <Text className={s.text}>{children}</Text>
            </div>
        </label>
    )
})

TabSwitcherItem.displayName = 'TabSwitcherItem'

const SwitcherNamespace = Object.assign(TabSwitcher, {Item: TabSwitcherItem})

export {SwitcherNamespace as TabSwitcher}

