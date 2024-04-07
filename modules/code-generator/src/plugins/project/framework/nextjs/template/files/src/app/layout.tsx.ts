import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'layout',
        'tsx',
        `
import React from 'react';
// import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import BasicLayout from '@/layout/BasicLayout';
import '@/app/globals.css';
import StateLayout from '@/layout/StateLayout';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: '柜面',
	description: '柜面描述',
};
const RootLayout = async (props: React.PropsWithChildren) => {
	const {
		children
	} = props;
	return (
		<html lang="en">
			<body >
				<AntdRegistry>
					<StateLayout id="root">
						<BasicLayout >
							{children}
						</BasicLayout>
					</StateLayout>
				</AntdRegistry>
			</body>
		</html>
	);
};
export default RootLayout;
    `,
    );

    return [['src', 'app'], file];
}
