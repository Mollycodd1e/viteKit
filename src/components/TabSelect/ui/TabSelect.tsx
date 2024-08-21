'use client'
import {Children, cloneElement, forwardRef} from 'react'
import s from './TabSelect.module.scss'
import classNames from 'classnames'
import {Text} from '../../Text'
import {useClientWidth} from "../../../shared/useClientWidth.ts";

const cx = classNames.bind(s)

type TBtn = {
    isLong?: boolean
    additionalClassName?: string
    additionalLabelClass?: string
    withPadding?: boolean
    width?: string
    width_m?: string
    width_l?: string
}

type BaseInputProps = JSX.IntrinsicElements['input'] & TBtn

interface ITabSelect {
    children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[]
    variant?: SwitcherVariant
    classname?: string
    isRound?: boolean
}

export const TAB_SELECT_VARIANTS = {
    whiteFill: 'whiteFill',
    whiteStroke: 'whiteStroke'
}

export type SwitcherVariant = keyof typeof TAB_SELECT_VARIANTS

const TabSelect = ({variant = 'whiteFill', classname, children}: ITabSelect) => {
    if (!children || !Array.isArray(children)) return null

    //TODO предлогаю засунуть в жопу Children, cloneElement т.к это легаси хуйня
    return (
        <div className={cx(s.root, s[`${variant}`], classname)}>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    className: cx(s.item),
                })
            })}
        </div>
    )
}

const TabSelectItem = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
    const {isTablet, isDesktop} = useClientWidth()

    const getWidth = (isTablet: boolean, isDesktop: boolean) => {
        if (isTablet && width_m) return width_m
        else if (isDesktop && width_l) return width_l
        else return width
    }

    const {
        children,
        className,
        additionalClassName,
        additionalLabelClass,
        //TODO предлогаю засунуть в жопу isLong
        isLong,
        checked,
        withPadding = false,
        width,
        width_m,
        width_l,
        ...rest
    } = props
    //isLong атрибут убирает ограничения в width, height 48px

    return (
        <label className={cx(additionalLabelClass, {[s.withPadding]: withPadding})}>
            <input ref={ref} type='checkbox' checked={checked} {...rest}/>
            <div className={cx(className, additionalClassName, {isLong})}
                 style={{width: getWidth(isTablet, isDesktop)}}>
                <Text className={cx(s.text)}>{children}</Text>
            </div>
        </label>
    )
})

TabSelectItem.displayName = 'TabSelectItem'

const TabSelectNamespace = Object.assign(TabSelect, {Item: TabSelectItem})

export {TabSelectNamespace as TabSelect}
