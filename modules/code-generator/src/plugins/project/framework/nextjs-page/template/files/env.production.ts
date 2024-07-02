import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.env.production',
    '',
    `
BUILD_OUTPUT='export'
    `,
  );

  return [[], file];
}

