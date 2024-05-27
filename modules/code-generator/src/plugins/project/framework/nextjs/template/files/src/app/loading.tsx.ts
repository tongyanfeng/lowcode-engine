import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'loading',
        'tsx',
        `
"use client";
import React from 'react';
import { Spin } from 'antd';

const Loading: React.FC = () => (
  <Spin />
);

export default Loading;
    `,
    );

    return [['src', 'app'], file];
}
