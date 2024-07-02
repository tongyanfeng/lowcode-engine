import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'hooks',
        'ts',
        `
import dynamic from 'next/dynamic';
import { pageResult } from "@/lib/interface";
import { post } from "./request";
import { message } from 'antd';

/**
 * 分页列表
 * @param {*} url
 * @param {*} params
 */
export async function pageRequest(url:string, params:any):Promise<pageResult> {
    return post({
    url,
    params
    }).then((res:any) => {
    let list = [];
    if (res.resultCode === '39500000') {
        list = res.data === undefined ? [] : res.data;
    } else {
        message.error(res.resultMsg);
    }
    return { data: list, total: res.total };
    }).catch((error) => {
    message.error('系统正忙，请稍后再试');
    return { data: [], total: 0 };
    })
}

/**
 * 一般提交使用，比如新增、修改，只需要成功有否，成功需要有提示
 * @param {*} url
 * @param {*} data
 */
export async function requestSubmit(url: string, params: any) {
    return post({url, params}).then((res) => {
    if (res.resultCode === '39500000') {
        message.success('提交成功');
        return true;
    } else {
        message.error(res.resultMsg);
        return false;
    }
    }).catch((error) => {
    message.error('系统正忙，请稍后再试');
    return false;
    })
}    
    `,
    );

    return [['src', 'services'], file];
}

