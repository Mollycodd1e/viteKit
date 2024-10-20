import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '../../Text';
import s from './Logo.module.scss';
import classNames from 'classnames';
import { logoVariant } from './Logo.types';
export const Logo = ({ uk = false, variant = 'black', between = false, addClassName, }) => {
    const cx = classNames.bind(s);
    return (_jsxs("div", { className: cx(s.wrapper, { [s.wrapperBetween]: between }, addClassName), children: [_jsx("img", { src: logoVariant[variant], alt: '\u041B\u043E\u0433\u043E', className: cx(s.logo, { [s.logoValue]: variant === 'value' }) }), uk && (_jsx(Text, { className: cx(s.uk, s[`uk_${variant}`]), html: '\u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F<br/>\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F' }))] }));
};
