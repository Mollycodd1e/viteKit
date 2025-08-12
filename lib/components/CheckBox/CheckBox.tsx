import { forwardRef } from 'react';
import s from './s.module.scss';
import { NewIcon } from '../NewIcon';
import { CheckBoxProps, CheckBoxComponent } from './CheckBox.types';

export const CheckBox: CheckBoxComponent = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      children,
      isChecked = false,
      error = false,
      modifierClassesStyle = [''],
      emitIsChecked,
      onClick,
      variant = 'light',
      size_s,
      size_m,
      size_l,
      ...rest
    },
    ref
  ) => {
    const modifierClasses = modifierClassesStyle
      .map((key) => s[key])
      .filter(Boolean)
      .join(' ');

    let sizeClass = '';
    let iconSize = '20';
    if (size_l) {
      sizeClass = s['large-size'] || '';
      iconSize = '20';
    } else if (size_s) {
      sizeClass = s['small-size'] || '';
      iconSize = '12';
    } else if (size_m) {
      sizeClass = s['medium-size'] || '';
      iconSize = '16';
    } else {
      sizeClass = s['medium-size'] || '';
      iconSize = '16';
    }

    return (
      <label
        className={`
          ${s.checkbox}
          ${modifierClasses}
          ${isChecked ? s.isChecked : ''}
          ${error ? s.error : ''}
          ${s[variant] || ''}
          ${sizeClass}
        `}
        onClick={() => {
          onClick && onClick();
        }}
      >
        <input
          type="checkbox"
          ref={ref}
          checked={!!isChecked}
          onChange={() => emitIsChecked && emitIsChecked(!isChecked)}
          {...rest}
        />
        <span className={s.checkbox__elem}>
          {isChecked && (
            <NewIcon
              name={'check'}
              size={iconSize}
            />
          )}
          {!isChecked && (
            <NewIcon
              name={'check'}
              size={iconSize}
              additionalClass={s.checkbox__hoverIcon}
            />
          )}
        </span>
        {children}
      </label>
    );
  }
);
