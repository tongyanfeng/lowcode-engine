import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'interface',
        'ts',
        `
// Define the global interface
// exapmle
export interface ApiResult {
    resultCode: "39500000"; // systemId
    resultMsg: "string";
    data?: any;
    total?:number
} 
export interface pageResult {
    data: Array<any>;
    total: number;
} 
    `,
    );

    return [['src', 'lib'], file];
}

