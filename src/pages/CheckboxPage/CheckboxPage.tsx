import { useState } from 'react'
import { CheckBox } from '../../components/CheckBox'
import s from './CheckBoxPage.module.scss'

export const CheckBoxPage = () => {
    // Состояния для light варианта
    const [checkedLightMedium, setCheckedLightMedium] = useState(true)
    const [uncheckedLightMedium, setUncheckedLightMedium] = useState(false)
    const [checkedLightLarge, setCheckedLightLarge] = useState(true)
    const [uncheckedLightLarge, setUncheckedLightLarge] = useState(false)
    const [checkedLightSmall, setCheckedLightSmall] = useState(true)
    const [uncheckedLightSmall, setUncheckedLightSmall] = useState(false)

    const [uncheckedLightMediumError, setUncheckedLightMediumError] = useState(false)
    const [checkedLightMediumError, setCheckedLightMediumError] = useState(true)

    // Состояния для dark варианта
    const [checkedDarkMedium, setCheckedDarkMedium] = useState(true)
    const [uncheckedDarkMedium, setUncheckedDarkMedium] = useState(false)
    const [checkedDarkLarge, setCheckedDarkLarge] = useState(true)
    const [uncheckedDarkLarge, setUncheckedDarkLarge] = useState(false)
    const [checkedDarkSmall, setCheckedDarkSmall] = useState(true)
    const [uncheckedDarkSmall, setUncheckedDarkSmall] = useState(false)

    const [uncheckedDarkMediumError, setUncheckedDarkMediumError] = useState(false)
    const [checkedDarkMediumError, setCheckedDarkMediumError] = useState(true)

    return (
        <div className={s.root}>
            <div style={{ fontWeight: 'bold' }}>CheckBox variants:</div>
            <div className={s.wrapper}>
                <div className={s.lighContainer}>
                    <div style={{ fontWeight: 'bold', marginTop: 16 }}>Light variant:</div>
                    <CheckBox
                        isChecked={checkedLightLarge}
                        emitIsChecked={(val: boolean) => { setCheckedLightLarge(val); console.log('checked light large', val) }}
                        variant="light"
                        size_l
                    >light / large / checked</CheckBox>
                    <CheckBox
                        isChecked={uncheckedLightLarge}
                        emitIsChecked={(val: boolean) => { setUncheckedLightLarge(val); console.log('unchecked light large', val) }}
                        variant="light"
                        size_l
                    >light / large / unchecked</CheckBox>
                    <CheckBox
                        isChecked={checkedLightMedium}
                        emitIsChecked={(val: boolean) => { setCheckedLightMedium(val); console.log('checked light medium', val) }}
                        variant="light"
                        size_m
                    >light / medium / checked </CheckBox>
                    <CheckBox
                        isChecked={uncheckedLightMedium}
                        emitIsChecked={(val: boolean) => { setUncheckedLightMedium(val); console.log('unchecked light medium', val) }}
                        variant="light"
                        size_m
                    >light / medium / unchecked</CheckBox>
                    <CheckBox
                        isChecked={checkedLightSmall}
                        emitIsChecked={(val: boolean) => { setCheckedLightSmall(val); console.log('checked light small', val) }}
                        variant="light"
                        size_s
                    >light / small / checked</CheckBox>
                    <CheckBox
                        isChecked={uncheckedLightSmall}
                        emitIsChecked={(val: boolean) => { setUncheckedLightSmall(val); console.log('unchecked light small', val) }}
                        variant="light"
                        size_s
                    >light / small / unchecked</CheckBox>

                    <CheckBox
                        isChecked={uncheckedLightMediumError}
                        emitIsChecked={(val: boolean) => { setUncheckedLightMediumError(val); console.log('unchecked light medium', val) }}
                        variant="light"
                        error
                        size_m
                    >light / medium / unchecked / error</CheckBox>
                     <CheckBox
                        isChecked={checkedLightMediumError}
                        emitIsChecked={(val: boolean) => { setCheckedLightMediumError(val); console.log('unchecked light medium', val) }}
                        variant="light"
                        error
                        size_m
                    >light / medium / unchecked / error</CheckBox>

                </div>
                <div className={s.darkContainer}>
                    <div style={{ fontWeight: 'bold', marginTop: 16 }}>Dark variant:</div>
                    <CheckBox
                        isChecked={checkedDarkLarge}
                        emitIsChecked={(val: boolean) => { setCheckedDarkLarge(val); console.log('checked dark large', val) }}
                        variant="dark"
                        size_l
                    >dark / large / checked</CheckBox>
                    <CheckBox
                        isChecked={uncheckedDarkLarge}
                        emitIsChecked={(val: boolean) => { setUncheckedDarkLarge(val); console.log('unchecked dark large', val) }}
                        variant="dark"
                        size_l
                    >dark / large / unchecked</CheckBox>
                    <CheckBox
                        isChecked={checkedDarkMedium}
                        emitIsChecked={(val: boolean) => { setCheckedDarkMedium(val); console.log('checked dark medium', val) }}
                        variant="dark"
                        size_m
                    >dark / medium / checked</CheckBox>
                    <CheckBox
                        isChecked={uncheckedDarkMedium}
                        emitIsChecked={(val: boolean) => { setUncheckedDarkMedium(val); console.log('unchecked dark medium', val) }}
                        variant="dark"
                        size_m
                    >dark / medium / unchecked</CheckBox>
                    <CheckBox
                        isChecked={checkedDarkSmall}
                        emitIsChecked={(val: boolean) => { setCheckedDarkSmall(val); console.log('checked dark small', val) }}
                        variant="dark"
                        size_s
                    >dark / small / checked</CheckBox>
                    <CheckBox
                        isChecked={uncheckedDarkSmall}
                        emitIsChecked={(val: boolean) => { setUncheckedDarkSmall(val); console.log('unchecked dark small', val) }}
                        variant="dark"
                        size_s
                    >dark / small / unchecked</CheckBox>

                    <CheckBox
                        isChecked={uncheckedDarkMediumError}
                        emitIsChecked={(val: boolean) => { setUncheckedDarkMediumError(val); console.log('unchecked dark medium', val) }}
                        variant="dark"
                        size_m
                        error
                    >dark / medium / unchecked / error</CheckBox>

<CheckBox
                        isChecked={checkedDarkMediumError}
                        emitIsChecked={(val: boolean) => { setCheckedDarkMediumError(val); console.log('unchecked dark medium', val) }}
                        variant="dark"
                        size_m
                        error
                    >dark / medium / checked / error</CheckBox>
                </div>
            </div>
        </div>
    )
}
