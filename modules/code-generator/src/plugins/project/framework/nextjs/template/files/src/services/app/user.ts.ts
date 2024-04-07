import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'user',
        'ts',
        `
import {post} from "../request";

const queryUserInfo = async () => {
    // return post({url: 'current_user', params: null});
    return Promise.resolve({
        "resultCode": "39500000",
        "resultMsg": null,
        "resultType": null,
        "data": {
            "loginId": "zhifu001",
            "role": [
                "chl_manager"
            ],
            "auth": [
                "monitor",
            ],
            "logoutUrl": "http://uat.sso.webank.com:8080/cas/logout?service=http://localhost:8000/counter/sys/login",
            "userName": "zhifu001"
        },
        "page": null,
        "total": 0
    })
}
export {
    queryUserInfo
}
    `,
    );

    return [['src', 'services', 'app'], file];
}
