import { ResultFile } from '@alilc/lowcode-types';

export default function getFile(): [string[], ResultFile] {
  return [
    [],
    {
      name: 'package',
      ext: 'json',
      content: `
{
  "name": "counter-web",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "next dev -p 8000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "dev:proxy": "node proxy.js"
  },
  "dependencies": {
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
    "redux-persist": "^6.0.0"
  },
  "devDependencies": {
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
  }
}      
    `,
    },
  ];
}



