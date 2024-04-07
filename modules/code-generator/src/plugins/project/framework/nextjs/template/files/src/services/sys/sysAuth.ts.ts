import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'sysAuth',
        'ts',
        `
// @ts-ignore

/* eslint-disable */
import { requestSubmit, pageRequest } from '../hooks';
import { post } from "../request";
import { message } from 'antd'

/**
 * 角色查询
 * @param {*} params 
 * @param {*} options 
 */
export async function sysRole(data: any) {
    return pageRequest('role', data)
}

export async function resTreeSelect(data: any) {
    return post({url: 'res/tree', params: data}).then((res) => {
    if (res.resultCode === '39500000') {
        return res.data;
    } else {
        message.error(res.resultMsg);
        return {treeList: [], treeList: []};
    }
    }).catch((error) => {
    message.error('系统正忙，请稍后再试');
    return {treeList: [], treeList: []};
    })
}

export async function resConfig(data: any) {
    return requestSubmit('res/config', data)
}
    `,
    );

    return [['src', 'services', 'app', 'sys'], file];
}
