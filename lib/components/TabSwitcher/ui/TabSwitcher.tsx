import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import s from './TabSwitcher.module.scss'
import { Text } from '../../Text'
import classNames from 'classnames'
import { ITabSwitcherItem, TabSwitcherProps } from './TabSwitcher.types'

const cx = classNames.bind(s)

const TabSwitcher = ({
	children,
	variant = 'whiteRow',
	addClassName = '',
	col = false,
}: TabSwitcherProps) => {
	if (!children || !Array.isArray(children)) return null

	return (
		<div className={cx(s.root, s[variant], addClassName, { [s.rootCol]: col })}>
			{Children.map(children, (child, index) => {
				if (isValidElement(child) && children)
					return cloneElement(child, {
						className: cx(
							s.item,
							{ [s.firstItem]: index === 0 },
							{ [s.lastItem]: index === children.length - 1 },
							{ [s.isDisabled]: child.props.disabled }
						),
					})

				return child
			})}
		</div>
	)
}

const TabSwitcherItem = forwardRef<HTMLInputElement, ITabSwitcherItem>((props, ref) => {
	const { children, className, addItemClassName, ...rest } = props

	return (
		<label>
			<input
				ref={ref}
				type='checkbox'
				{...rest}
			/>
			<div className={cx(className, addItemClassName)}>
				<Text className={s.text}>{children}</Text>
			</div>
		</label>
	)
})

TabSwitcherItem.displayName = 'TabSwitcherItem'

const SwitcherNamespace = Object.assign(TabSwitcher, { Item: TabSwitcherItem })

export { SwitcherNamespace as TabSwitcher }

