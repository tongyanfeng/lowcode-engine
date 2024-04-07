import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'README',
        'md',
        `
## 全局 Store 管理            
    `,
    );

    return [['src', 'models'], file];
}

