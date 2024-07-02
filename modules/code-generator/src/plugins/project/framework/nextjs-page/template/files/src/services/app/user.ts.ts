import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'user',
        'ts',
        `
import {post} from "../request";

const queryUserInfo = async () => {
    return post({url: 'sys/current_user', params: null});
    // return Promise.resolve({
    //     "resultCode": "39500000",
    //     "resultMsg": null,
    //     "resultType": null,
    //     "data": {
    //         "loginId": "zhifu001",
    //         "role": [
    //             "3950_imasa_chl_manager"
    //         ],
    //         "auth": [
    //             "debit_collect",
    //             "monitor_super_clear",
    //             "monitor_renhang",
    //             "async_auth_b",
    //             "ibps",
    //             "async_auth",
    //             "chart",
    //             "fund",
    //             "view_config_trigger",
    //             "monitor_super_mgt",
    //             "monitor_super",
    //             "dashboard",
    //             "view_config",
    //             "monitor_super_fund",
    //             "imasa_det",
    //             "monitor_super_check",
    //             "credit_payment",
    //             "debit_payment",
    //             "monitor_super_info",
    //             "monitor",
    //             "credit_collect",
    //             "async_auth_q"
    //         ],
    //         "logoutUrl": "http://uat.sso.webank.com:8080/cas/logout?service=http://localhost:8000/counter/sys/login",
    //         "userName": "zhifu001"
    //     },
    //     "page": null,
    //     "total": 0
    // })
}
export {
    queryUserInfo
}
    `,
    );

    return [['src', 'services', 'app'], file];
}
