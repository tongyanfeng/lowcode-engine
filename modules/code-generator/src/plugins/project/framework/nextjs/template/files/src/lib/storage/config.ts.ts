import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'config',
      'ts',
      `
interface globalConfig {
  type: 'localStorage' | 'sessionStorage';
  prefix: string;
  expire: number;
  isEncrypt: boolean;
}

export const config: globalConfig = {
  type: 'localStorage',              //存储类型，localStorage | sessionStorage
  prefix: 'counter_systemId_0.0.1',     //版本号
  expire: 24 * 60,                   //过期时间，默认为一天，单位为分钟
  isEncrypt: true,                   //支持加密、解密数据处理
};        
    `,
  );

  return [['src', 'lib', 'storage'], file];
}
