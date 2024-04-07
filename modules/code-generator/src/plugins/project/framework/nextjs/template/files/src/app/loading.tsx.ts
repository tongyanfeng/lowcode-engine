import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'loading',
        'tsx',
        `
export default () => {
    return (
      <div>loading</div>
    );
  };
    `,
    );

    return [['src', 'app'], file];
}
