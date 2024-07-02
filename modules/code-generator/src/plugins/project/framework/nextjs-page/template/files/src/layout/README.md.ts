import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'README',
        'md',
        `
## 默认基础布局         
    `,
    );

    return [['src', 'layout'], file];
}

