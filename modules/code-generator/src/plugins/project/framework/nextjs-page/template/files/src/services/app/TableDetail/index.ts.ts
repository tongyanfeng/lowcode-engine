import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'index',
        'ts',
        `
export * from './api';     
    `,
    );

    return [['src', 'services', 'app', 'TableDetail'], file];
}
