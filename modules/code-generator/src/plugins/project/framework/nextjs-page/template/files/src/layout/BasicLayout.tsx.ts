import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'BasicLayout',
        'tsx',
        `
"use client";
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import type { ProSettings } from '@ant-design/pro-components';
import { Result, Button, Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import '@/app/globals.css';
import defaultProps from '@/lib/_defaultProps';
import accessFactory from "@/lib/access";
import routes from "@/lib/routes";

import { isMatchPath, matchRouter } from './utils';
import { useAppDispatch } from '@/lib/store/hooks';
import { __setUserInfoState } from '@/models/_sysInfoSlice';
const ProLayout = dynamic(
    () => import("@ant-design/pro-components").then((com) => com.ProLayout),
    { ssr: false }
);

const noMatch = (
    <Result
        status={403}
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
            <Button type="primary">
                <Link href="/">Back to home</Link>
            </Button>
        }
    />
);
const BasicLayout = (props: any) => {
    const {
        children,
        initialState
    } = props;
    useAppDispatch()(__setUserInfoState(initialState.userInfo));
    const pathname = usePathname();
    const [pathnameProp, setPathnameProp] = useState('/');
    const [logoImg, setLogoImg] = useState("/esscweb/menu_logo.svg");
    const [collapsed, setCollapsed] = useState(true);
    const router = useRouter()
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        colorPrimary: '#1890ff',
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
        menu: { locale: true },
    });
    useEffect(() => {
        setPathnameProp(pathname);
    }, [pathname])
    const access = accessFactory(initialState);
    // 路由权限过滤
    let newRoutes = matchRouter(access, routes);
    const renderContent = useCallback(() => {
        const matchPath = isMatchPath(pathname, newRoutes);
        if (matchPath) {
            return children
        }
        return noMatch
    }, [pathname])
    const handleMenuCollapse = (payload) => {
        setCollapsed(payload);
        payload ? setLogoImg("/esscweb/user-empty.svg") : setLogoImg("/esscweb/menu_logo.svg")
    };
    return (
        <ProLayout
            logo={() => <img src={logoImg} alt="logoImg" />}
            collapsed={collapsed}
            onCollapse={handleMenuCollapse}
            siderWidth={216}
            {...defaultProps}
            route={newRoutes[0]}
            location={{
                pathname: pathnameProp,
            }}
            avatarProps={{
                src: '/web/user-empty.svg',
                title: initialState.userInfo.userName || '柜员',
                size: 'small',
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'logout',
                                        icon: <LogoutOutlined />,
                                        label: '退出登录',
                                    },
                                ],
                                onClick: ({ key }) => {
                                    // message.info(\`Click on item \${key}\`);
                                    if (key === "logout") {
                                        window.location.href = initialState.userInfo.logoutUrl;
                                    }
                                }
                            }}
                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                return [];
            }}
            onMenuHeaderClick={() => {
                setPathnameProp('/');
                router.push('/');
            }}
            menuItemRender={(item, dom) => (
                <div
                    onClick={() => {
                        router.push(item.path || '/');
                    }}>
                    {dom}
                </div>
            )}
            {...settings}
        >
            <PageContainer>
                {renderContent()}
            </PageContainer>
        </ProLayout>
    );
};
export default BasicLayout;
    `,
    );

    return [['src', 'layout'], file];
}

