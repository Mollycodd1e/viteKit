import { jsx as _jsx } from "react/jsx-runtime";
import s from './Flex.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(s);
export const Flex = ({ className, children, jc = 'start', ai = 'center', gap, fd = 'row', w = 'nowrap', additionalClass = '', ...rest }) => {
    return (_jsx("div", { className: cx(s.root, className, s[`w-${w}`], s[`jc-${jc}`], s[`ai-${ai}`], s[`gap-${gap}`], s[`fd-${fd}`], additionalClass), ...rest, children: children }));
};
