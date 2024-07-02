import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'routes',
        'tsx',
        `
/**
 * 路由
 */
import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
} from '@ant-design/icons';

const routes = [
    {
        path: '/',
        routes: [
            {
                path: '/',
                icon: <SmileFilled />,
                routes: [
                    {
                        path: '/Test/',
                        name: '管理页',
                        icon: <CrownFilled />,
                        access: 'monitor', // access 可选属性，不配置默认展示
                    },
                    {
                        path: '/TableDetail/',
                        name: '列表查询',
                        icon: <ChromeFilled />,
                        access: 'imasa_det',
                    },
                    {
                        path: "/sys/",
                        icon: <TabletFilled />,
                        name: "系统配置",
                        routes: [
                            {
                                path: "/sys/sysRole/",
                                name: "角色配置"
                            }
                        ]
                    },
                ]
            },
        ],
    }
];

export default routes;
    `,
    );

    return [['src', 'lib'], file];
}

