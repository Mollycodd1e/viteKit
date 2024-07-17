import s from './GroupedInputs.module.scss'
import classNames from 'classnames'
import { RangeInputsProps } from './GroupedInputs.types'

const cx = classNames.bind(s)

export const GroupedInputs = ({ children, addClassName }: RangeInputsProps) => {
	return <div className={cx(s.root, addClassName)}>{children}</div>
}

