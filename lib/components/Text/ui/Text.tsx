import classNames from 'classnames'
import s from './Text.module.scss'
import { ITextProps } from './Text.types'

const cx = classNames.bind(s)

export const Text = ({ children, className, additionalClass = '', html, ...rest }: ITextProps) => {
	if (!html) {
		return (
			<div
				className={cx(s.root, className, additionalClass)}
				{...rest}>
				{children}
			</div>
		)
	}

	return (
		<div
			className={cx(s.root, className, additionalClass)}
			{...rest}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
}
