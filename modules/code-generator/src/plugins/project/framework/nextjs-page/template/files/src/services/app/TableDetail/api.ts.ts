import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'api',
        'ts',
        `
import { pageRequest } from "../../hooks";
/**
 * 监控配置查询
 * @param {*} params 
 * @param {*} options 
 */
export async function imaDetailQry(data: any) {
  return pageRequest('imasa_detail_qry', data);
}        
    `,
    );

    return [['src', 'services', 'app', 'TableDetail'], file];
}
