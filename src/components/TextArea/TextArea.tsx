import React, {forwardRef} from 'react'
import classNames from 'classnames'
import s from './styles.module.scss'
import {ComponentProps} from "./TextArea.types.ts";

const cx = classNames.bind(s)

export const TextArea = forwardRef<HTMLTextAreaElement, React.PropsWithChildren<ComponentProps>>(
    (
        {
            width = 'auto',
            error,
            additionalClass = '',
            children='',
            ...props
        },
        ref
    ) => {
        return (
            <textarea className={cx(s.root, s[`${width}-width`], additionalClass)} ref={ref} {...props}>{children}</textarea>
        )
    }
)

TextArea.displayName = 'TextArea'
