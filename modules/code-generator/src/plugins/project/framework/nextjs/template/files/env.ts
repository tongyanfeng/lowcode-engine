import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.env',
    '',
    `
BUILD_OUTPUT='standalone'
    `,
  );

  return [[], file];
}

