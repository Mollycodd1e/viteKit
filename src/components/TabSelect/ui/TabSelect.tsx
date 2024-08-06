import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import s from './TabSelect.module.scss'
import classNames from 'classnames'
import { Text } from '../../Text'

const cx = classNames.bind(s)

type TBtnWhiteFill = {
	isLong?: boolean
	additionalClassName?: string
}

type BaseInputProps = JSX.IntrinsicElements['input'] & TBtnWhiteFill

interface ITabSelect {
	children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[]
	variant?: SwitcherVariant
	classname?: string
	isRound?: boolean
}

export const TABSELECT_VARIANTS = {
	whiteFill: 'whiteFill',
}

export type SwitcherVariant = keyof typeof TABSELECT_VARIANTS

const TabSelect = ({ variant = 'whiteFill', classname, children }: ITabSelect) => {
	if (!children || !Array.isArray(children)) return null

	return (
		<div className={cx(s.root, s[`${variant}`], classname)}>
			{Children.map(children, (child) => {
				if (isValidElement(child) && children)
					return cloneElement(child, {
						className: cx(s.item),
					})

				return child
			})}
		</div>
	)
}

const TabSelectItem = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
	const { children, className, additionalClassName, isLong, checked, ...rest } = props
	//isLong атрибут убирает ограничения в width, height 48px

	return (
		<label>
			<input
				ref={ref}
				type='checkbox'
				checked={checked}
				{...rest}
			/>
			<div className={cx(className, additionalClassName, { isLong })}>
				<Text className={cx(s.text, { [s.textChecked]: checked })}>{children}</Text>
			</div>
		</label>
	)
})

TabSelectItem.displayName = 'TabSelectItem'

const TabSelectNamespace = Object.assign(TabSelect, { Item: TabSelectItem })

export { TabSelectNamespace as TabSelect }
