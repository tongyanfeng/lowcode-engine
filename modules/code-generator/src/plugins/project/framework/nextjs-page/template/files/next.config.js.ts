import { ResultFile } from '@alilc/lowcode-types';

export default function getFile(): [string[], ResultFile] {
  return [
    [],
    {
      name: 'next.config',
      ext: 'js',
      content: `
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_OUTPUT,
  distDir: "esscweb",
  assetPrefix: "/esscweb",
  basePath: "/esscweb",
  trailingSlash: true,
  typescript: {
    // 禁用类型检查
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig;      
`
    },
  ];
}
