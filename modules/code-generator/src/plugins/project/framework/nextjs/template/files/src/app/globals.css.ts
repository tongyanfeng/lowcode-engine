import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
  'globals',
  'css',
  `
/* @tailwind base;
@tailwind components;
@tailwind utilities; */

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

body {}
  
  `,
);

return [['src', 'app'], file];
}

