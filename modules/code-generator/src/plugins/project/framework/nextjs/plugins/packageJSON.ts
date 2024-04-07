import { PackageJSON } from '@alilc/lowcode-types';

import { COMMON_CHUNK_NAME } from '../../../../../const/generator';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IProjectInfo,
} from '../../../../../types';
import { buildDataSourceDependencies } from '../../../../../utils/dataSource';

interface INextJsPackageJSON extends PackageJSON {

}

export type NextJsPackageJsonPluginConfig = {
  /**
   * 数据源配置
   */
  datasourceConfig?: {
    /** 数据源引擎的版本 */
    engineVersion?: string;
    /** 数据源引擎的包名 */
    enginePackage?: string;
    /** 数据源 handlers 的版本 */
    handlersVersion?: {
      [key: string]: string;
    };
    /** 数据源 handlers 的包名 */
    handlersPackages?: {
      [key: string]: string;
    };
  };
  /** 包名 */
  packageName?: string;
  /** 版本 */
  packageVersion?: string;
};

const pluginFactory: BuilderComponentPluginFactory<NextJsPackageJsonPluginConfig> = (cfg) => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IProjectInfo;

    const packageJson: INextJsPackageJSON = {
      name: cfg?.packageName || 'counter-demo',
      version: cfg?.packageVersion || '0.0.1',
      description: '轻量级模板，使用 JavaScript，仅包含基础的 Layout。',
      dependencies: {
        "@ant-design/cssinjs": "^1.18.2",
        "@ant-design/icons": "^5.2.6",
        "@ant-design/nextjs-registry": "^1.0.0",
        "@ant-design/pro-components": "^2.6.43",
        "@emotion/css": "^11.11.2",
        "@reduxjs/toolkit": "^2.2.1",
        "@webank/watermark": "^1.0.9",
        "antd": "^5.12.7",
        "axios": "^1.6.5",
        "moment": "^2.30.1",
        "next-auth": "^4.24.5",
        "react": "^18",
        "react-dom": "^18",
        "react-redux": "^9.1.0",
        "redux-persist": "^6.0.0",

        // 数据源相关的依赖:
        ...buildDataSourceDependencies(ir, cfg?.datasourceConfig),
      },
      devDependencies: {
        "@types/crypto-js": "^4.2.2",
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "autoprefixer": "^10.0.1",
        "crypto-js": "^4.2.0",
        "eslint": "^8",
        "eslint-config-next": "14.0.4",
        "express": "^4.18.2",
        "http-proxy-middleware": "^2.0.6",
        "next": "^14.1.0",
        "next-env": "^1.0.0",
        "postcss": "^8",
        "tailwindcss": "^3.3.0",
        "typescript": "^5"
      },
      scripts: {
        "dev": "next dev -p 8000",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "dev:proxy": "node proxy.js"
      },
      private: true,
    };

    ir.packages.forEach((packageInfo) => {
      packageJson.dependencies[packageInfo.package] = packageInfo.version;
    });

    next.chunks.push({
      type: ChunkType.JSON,
      fileType: FileType.JSON,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: [],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
