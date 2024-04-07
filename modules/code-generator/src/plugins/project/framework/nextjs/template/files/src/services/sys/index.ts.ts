import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'index',
        'ts',
        `
export { dictItemList } from './dictMapRequest';
export { sysRole, resTreeSelect, resConfig } from './sysAuth';
    `,
    );

    return [['src', 'services', 'app', 'sys'], file];
}
