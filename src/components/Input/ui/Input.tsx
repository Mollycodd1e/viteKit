// @ts-nocheck
import React, {forwardRef} from 'react'
import classNames from 'classnames'
import {ComponentProps} from './Input.types'
import s from './Input.module.scss'
import {IMaskInput} from "react-imask";

const cx = classNames.bind(s)

export const Input = forwardRef<HTMLInputElement, React.PropsWithChildren<ComponentProps>>(
    (
        {
            size_s = 'large',
            size_m,
            size_l,
            pre = false,
            post = false,
            variant = 'light',
            width = 'auto',
            error,
            type,
            isPhoneIMask = false,
            additionalClass = '',
            ...props
        },
        ref
    ) => {
        // const [value, setValue] = useState('');
        //
        // const handleAccept = (value: string) => {
        //     setValue(value);
        // };


        if (isPhoneIMask) {
            return <div
                className={cx(
                    s.inputWrapper,
                    s[`${size_s}-size_s`],
                    s[`${size_m}-size_m`],
                    s[`${size_l}-size_l`],
                    s[`${variant}`],
                    {[s.inputWrapperPre]: pre},
                    {[s.inputWrapperPost]: post},
                    s[`${width}-width`],
                    {[s.inputWrapperError]: error && variant === 'light'},
                    {[s.inputWrapperErrorWithoutBorder]: error && variant === 'gray'},
                    {[s.inputWrapperErrorDark]: error && variant === 'dark'},
                    additionalClass
                )}>
                <IMaskInput
                    ref={ref}
                    mask="+7 (000) 000-00-00"
                    definitions={{'0': /[0-9]/}}
                    placeholder="+7 (___) ___-__-__"
                    {...props}
                />
            </div>
        } else return (
            <>
                {type !== 'checkbox' && (
                    <div
                        className={cx(
                            s.inputWrapper,
                            s[`${size_s}-size_s`],
                            s[`${size_m}-size_m`],
                            s[`${size_l}-size_l`],
                            s[`${variant}`],
                            {[s.inputWrapperPre]: pre},
                            {[s.inputWrapperPost]: post},
                            s[`${width}-width`],
                            {[s.inputWrapperError]: error && variant === 'light'},
                            {[s.inputWrapperErrorWithoutBorder]: error && variant === 'gray'},
                            {[s.inputWrapperErrorDark]: error && variant === 'dark'},
                            additionalClass
                        )}>
                        {pre && <div>{pre}</div>}
                        <input
                            ref={ref}
                            type={type}
                            {...props}></input>
                        {post && <div>{post}</div>}
                    </div>
                )}

                {type === 'checkbox' && (
                    <input
                        className={cx(s.checkBox)}
                        ref={ref}
                        type={type}
                        {...props}
                    />
                )}
            </>
        )
    }
)

Input.displayName = 'Input'
