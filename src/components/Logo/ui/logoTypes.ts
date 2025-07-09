import React from 'react';

const logoTypes: Record<string, React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>> = {
    black: React.lazy(() => import('../assets/LogoBlack.svg?react')),
    white: React.lazy(() => import('../assets/LogoWhite.svg?react')),
    value: React.lazy(() => import('../assets/LogoValue.svg?react')),
    dom: React.lazy(() => import('../assets/LogoDom.svg?react')),
    office: React.lazy(() => import('../assets/LogoOffice.svg?react')),
    newOffice: React.lazy(() => import('../assets/LogoNewOffice.svg?react')),
    newDom: React.lazy(() => import('../assets/LogoNewDom.svg?react')),
};

export default logoTypes; 