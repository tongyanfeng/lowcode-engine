import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'page',
        'tsx',
        `
"use client";
import React from 'react';

const RootLayout = ({children}: React.PropsWithChildren) => {
    return (
        <div>manage page</div>
    )
}

export default RootLayout;
    `,
    );

    return [['src', 'app', 'manage'], file];
}
