import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'page',
        'tsx',
        `
import React from "react";
const Page = ({children}: React.PropsWithChildren) => {
    return (
        <div>Welcome</div>
    )
}
export default Page;
    `,
    );

    return [['src', 'app'], file];
}
