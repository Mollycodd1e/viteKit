'use client'
import { forwardRef } from 'react'
import s from './TabSwitcher.module.scss'
import { Text } from '../../Text'
import classNames from 'classnames'
import { ITabSwitcherItem, TabSwitcherProps } from './TabSwitcher.types'
import { useClientWidth } from '../../../main.ts'

const cx = classNames.bind(s)

const TabSwitcher = ({
	children,
	variant = 'whiteRow',
	isApart = false,
	addClassName = '',
	col = false,
}: TabSwitcherProps) => {
	return (
		<div className={cx(s.root, s[variant], { [s.rootCol]: col, [s.apart]: isApart }, addClassName)}>
			{children}
		</div>
	)
}

const TabSwitcherItem = forwardRef<HTMLInputElement, ITabSwitcherItem>((props, ref) => {
	const { isTablet, isDesktop } = useClientWidth()
	const {
		index,
		children,
		addItemClassName,
		addLabelClassname,
		addTextClass,
		size_s = 'large',
		size_m,
		size_l,
		disabled = false,
		itemsLength = 0,
		isLongOn = true,
		width,
		width_m,
		width_l,
		mini = false,

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
		<label className={cx(s.labelItem, { [s.isLong]: isLong }, addLabelClassname)}>
			<input
				ref={ref}
				type='checkbox'
				{...rest}
				disabled={disabled}
			/>
			<div
				style={{ width: getWidth(isTablet, isDesktop) }}
				className={cx(
					cx(
						s.item,
						{ [s.firstItem]: index === 0 },
						{ [s.lastItem]: index === itemsLength - 1 },
						{ [s.isDisabled]: disabled },
						{ [s.autoWidth]: isAutoWidth },
						s[`${size_s}-size`],
						s[`${size_m}-size_m`],
						s[`${size_l}-size_l`],
						{ [s.mini]: mini }
					),
					addItemClassName
				)}>
				<Text
					className={cx(
						s.text,
						s[`text-${size_s}-size`],
						s[`text-${size_m}-size_m`],
						s[`text-${size_l}-size_l`],
						{ [s.textMini]: mini },
						addTextClass
					)}>
					{children}
				</Text>
			</div>
		</label>
	)
})

TabSwitcherItem.displayName = 'TabSwitcherItem'

const SwitcherNamespace = Object.assign(TabSwitcher, { Item: TabSwitcherItem })

export { SwitcherNamespace as TabSwitcher }
