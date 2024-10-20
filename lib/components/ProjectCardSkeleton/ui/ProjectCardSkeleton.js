import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LotCardSkeleton } from '../../LotCardSkeleton';
import s from './ProjectCardSkeleton.module.scss';
export const ProjectCardSkeleton = () => {
    const skeletonElements = [1, 2, 3, 4, 5];
    return (_jsxs("div", { className: s.root, children: [_jsxs("div", { className: s.projectHeader, children: [_jsxs("div", { className: s.titleWrapper, children: [_jsx("div", { className: s.projectTitle }), _jsx("div", { className: s.projectYear })] }), _jsxs("div", { className: s.metroWrapper, children: [_jsx("div", {}), _jsx("div", {})] }), _jsxs("div", { className: s.filterBtnWrapper, children: [_jsx("div", {}), _jsx("div", {})] })] }), skeletonElements.map((m) => {
                return _jsx(LotCardSkeleton, {}, m);
            })] }));
};
