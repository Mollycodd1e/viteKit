import React from 'react';

const logoTypes: Record<string, React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>> = {
    black: React.lazy(() => import('../icons/LogoBlack')),
    white: React.lazy(() => import('../icons/LogoWhite')),
    value: React.lazy(() => import('../icons/LogoValue')),
    dom: React.lazy(() => import('../icons/LogoDom')),
    office: React.lazy(() => import('../icons/LogoOffice')),
    newOffice: React.lazy(() => import('../icons/LogoNewOffice')),
    newDom: React.lazy(() => import('../icons/LogoNewDom')),
};

export default logoTypes; 