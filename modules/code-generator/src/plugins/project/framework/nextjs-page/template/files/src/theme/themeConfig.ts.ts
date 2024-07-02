import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'themeConfig',
      'ts',
      `
// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    // colorPrimary: '#52c41a',
  },
};

export default theme;
    `,
  );

  return [['src', 'theme'], file];
}
