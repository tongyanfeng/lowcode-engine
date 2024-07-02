import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'not-found',
        'tsx',
        `
import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

const App: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary"><Link href="/">Back to home</Link></Button>}
    />

);

export default App;
    `,
    );

    return [['src', 'app'], file];
}
