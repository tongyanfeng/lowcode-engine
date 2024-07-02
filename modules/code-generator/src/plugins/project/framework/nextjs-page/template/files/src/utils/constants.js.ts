import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'constants',
      'js',
      `
export const DAY_TYPE = {
  workday: '工作日',
  holiday: '节假日'
}
    `,
  );

  return [['src', 'utils'], file];
}
