import {Input} from "../Input";
import classNames from "classnames";
import {forwardRef} from "react";

import s from './s.module.scss'
import {NewIcon} from "../NewIcon";

const cx = classNames.bind(s)

interface Props {
    text?: string;
    error: boolean
    isChecked?: boolean
    children?: React.ReactNode
}

export type Ref = HTMLInputElement;


export const CheckBox = forwardRef<Ref, Props>(({
                                                    text,
                                                    isChecked,
                                                    error,
                                                    children,
                                                    ...props
                                                },
                                                ref) => {
    return (
        <label className={cx(s.checkboxLabel, {[s.error]: error})}>
            <Input type="checkbox" {...props} ref={ref}/>

            {isChecked && <NewIcon additionalClass={s.checkIcon}
                                   color={'white'} strokeWidth={'3'}
                                   name={'check'}
                                   size='16'/>}

            <div className={cx(s.labelText, {[s.error]: error})}
                 dangerouslySetInnerHTML={text ? {__html: text} : undefined}
            >{children}</div>
        </label>)
})