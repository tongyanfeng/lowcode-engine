import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'getInitialState',
        'ts',
        `
/**
 * 初始 state 获取 userInfo/dict/ ...
 */
import { queryUserInfo } from "../services/app/user";
export async function getInitialState() {
    let userInfo = {};
    const getUserInfo = async () => {
        const { data } = await queryUserInfo();
        userInfo = data;
    }
    await getUserInfo();
    return {
        userInfo
    };
}
    `,
    );

    return [['src', 'lib'], file];
}

