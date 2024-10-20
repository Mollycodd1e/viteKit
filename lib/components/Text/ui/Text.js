import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import s from './Text.module.scss';
import { useClientWidth } from "../../../shared/useClientWidth.ts";
const cx = classNames.bind(s);
export const Text = ({ children, className, additionalClass = '', html, html_l, html_m, html_s, ...rest }) => {
    const { isMobile, isTablet, isDesktop } = useClientWidth();
    if (!html) {
        return (_jsx("div", { className: cx(s.root, className, additionalClass), ...rest, children: children }));
    }
    const getInnerHtml = () => {
        if (isMobile && html_s)
            return html_s;
        if (isTablet && html_m)
            return html_m;
        if (isDesktop && html_l)
            return html_l;
        else
            return html;
    };
    return (_jsx("div", { className: cx(s.root, className, additionalClass), ...rest, dangerouslySetInnerHTML: { __html: getInnerHtml() } }));
};
