import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'error',
        'tsx',
        `
"use client";
import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="error"
    title="Error"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default App;
  `,
    );

    return [['src', 'app'], file];
}

