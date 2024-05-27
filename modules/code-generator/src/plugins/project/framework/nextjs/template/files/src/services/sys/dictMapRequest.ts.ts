import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'dictMapRequest',
        'ts',
        `
import { post } from '../request';

/**
 * 字典列表（下拉框）
 * @param {*} data
 */
export async function dictItemList(params:any) {
    return post({
    url: "dict_item_select",
    params
    }).then((res:any) => {
    return res.data;
    }).catch((error) => {
    return [];
    })
}
    `,
    );

    return [['src', 'services', 'sys'], file];
}
