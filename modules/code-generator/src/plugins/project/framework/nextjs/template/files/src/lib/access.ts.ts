import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'access',
        'ts',
        `
import { authFilter } from "@/layout/utils";

export default function accessFactory({ userInfo }: any): any {
    return authFilter([
        "monitor",
        "monitor_renhang",
        "monitor_super",
        "monitor_super_fund",
        "monitor_super_info",
        "monitor_super_mgt",
        "monitor_super_check",
        "imasa_det",
        "async_auth",
        "dashboard",
        "sys",
        "sys_role"
    ], userInfo.auth);
    }        
    `,
    );

    return [['src', 'lib'], file];
}

