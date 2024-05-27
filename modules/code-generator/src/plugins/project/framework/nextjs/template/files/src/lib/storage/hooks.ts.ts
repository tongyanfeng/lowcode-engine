import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'hooks',
      'ts',
      `
"use client";
import { config } from './config';
import { encrypt, decrypt } from './encrypt';
const setStorage = (key: string, value: any, expire: number = 24 * 60): boolean => {
  //设定值
  if (value === '' || value === null || value === undefined) {
    //空值重置
    value = null;
  }
  if (isNaN(expire) || expire < 0) {
    //过期时间值合理性判断
    throw new Error('Expire must be a number');
  }
  const data = {
    value, //存储值
    time: Date.now(), //存储日期
    expire: Date.now() + 1000 * 60 * expire, //过期时间
  };
  //是否需要加密，判断装载加密数据或原数据
  window[config.type].setItem(
    autoAddPreFix(key),
    config.isEncrypt ? encrypt(JSON.stringify(data)) : JSON.stringify(data),
  );
  return true;
};

const getStorageFromKey = (key: string) => {
  //获取指定值
  if (config.prefix) {
    key = autoAddPreFix(key);
  }
  if (!window[config.type].getItem(key)) {
    //不存在判断
    return null;
  }
  const storageVal = config.isEncrypt
    ? JSON.parse(decrypt(window[config.type].getItem(key) as string))
    : JSON.parse(window[config.type].getItem(key) as string);
  const now = Date.now();
  if (now >= storageVal.expire) {
    //过期销毁
    removeStorageFromKey(key);
    return null;
    //不过期回值
  } else {
    return storageVal.value;
  }
};

const getAllStorage = () => {
  //获取所有值
  const storageList: any = {};
  const keys = Object.keys(window[config.type]);
  keys.forEach((key) => {
    const value = getStorageFromKey(key);
    if (value !== null) {
      //如果值没有过期，加入到列表中
      storageList[key] = value;
    }
  });
  return storageList;
};

const getStorageLength = () => {
  //获取值列表长度
  return window[config.type].length;
};

const removeStorageFromKey = (key: string) => {
  //删除值
  if (config.prefix) {
    key = autoAddPreFix(key);
  }
  window[config.type].removeItem(key);
};

const clearStorage = () => {
  window[config.type].clear();
};

const autoAddPreFix = (key: string) => {
  //添加前缀，保持浏览器Application视图唯一性
  const prefix = config.prefix || '';
  return \`\${prefix}_\${key}\`;
};

/** eg: 
setStorage('name', 'fx', 1)
setStorage('age', { now: 18 }, 100000)
setStorage('history', [1, 2, 3], 100000)
console.log('getStorageFromKey:name', getStorageFromKey('name'))
console.log('getStorageFromKey:name', getStorageFromKey('history'))
console.log('getStorageLength', getStorageLength());
console.log('getAllStorage', getAllStorage());
clearStorage();
*/ 

export {
  setStorage,
  getStorageFromKey,
  getAllStorage,
  getStorageLength,
  removeStorageFromKey,
  clearStorage,
};    
    `,
  );

  return [['src', 'lib', 'storage'], file];
}
