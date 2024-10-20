import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import s from './MobileButton.module.scss';
const cx = classNames.bind(s);
export const MobileButton = ({ size = 'small', pre = false, children = '', post = false, variant = 'whiteFilled', width = 'auto', additionalClass = '', ...props }) => {
    if (props.as === 'link') {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { as, ...rest } = props;
        return (_jsxs("a", { className: cx(s.btnCommon, s[`${size}-size`], s[`${variant}`], { [s.btnCommonInline]: pre || post }, s[`${width}-width`], additionalClass), ...rest, children: [pre && _jsx("span", { children: pre }), children, post && _jsx("span", { children: post })] }));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props;
    return (_jsxs("button", { className: cx(s.btnCommon, s[`${size}-size`], s[`${variant}`], { [s.btnCommonInline]: pre || post }, s[`${width}-width`], additionalClass), ...rest, children: [pre && _jsx("span", { children: pre }), children, post && _jsx("span", { children: post })] }));
};
