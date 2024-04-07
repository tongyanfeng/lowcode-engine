import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'README',
        'md',
        `
## 接口请求管理

request.ts   自定义封装axios实例
services.ts  进一步封装公共请求方法            
    `,
    );

    return [['src', 'services'], file];
}

