import { CheckBox } from '../../components/CheckBox/CheckBox'
import { CheckBoxOld } from '../../components/CheckBoxOld/CheckBoxOld'
import s from './CheckboxPage.module.scss'

export const CheckboxPage = () => {

    // доделаю вместе с рефактором checkbox

	return (
		<div className={s.root}>
			<div>
            <CheckBoxOld flex isChecked={true} emitIsChecked={() => console.log('emitIsChecked')} isBlackCheck>
                <div>CheckBoxOld isBlackCheck flex</div>
            </CheckBoxOld>
            <CheckBoxOld isChecked={true} emitIsChecked={() => console.log('emitIsChecked')} isLightCheck>
                <div>CheckBoxOld isLightCheck</div>
            </CheckBoxOld>
			<CheckBox isChecked={true} error><div>CheckBox error</div></CheckBox>
            <CheckBox isChecked={false} error={false}><div>CheckBox</div></CheckBox>
			</div>
		</div>
	)
}
