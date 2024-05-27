import { ResultFile } from '@alilc/lowcode-types';

export default function getFile(): [string[], ResultFile] {
  return [
    [],
    {
      name: 'proxy',
      ext: 'js',
      content: `
const express = require('express')
const next = require('next')
const createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;
  
const hostname = '0.0.0.0'
const port = 8000
const dev = process.env.NODE_ENV !== 'production' //只在开发环境使用
const app = next({
  dev,
  hostname,
  port
})
const handle = app.getRequestHandler()
  
app.prepare()
  .then(() => {
    const server = express()
    //写在这里可以获取环境变量
    const devProxy = {
      '/essc-cs': {
        target: 'http://localhost:23627',
        changeOrigin: true,
        pathRewrite: {
          '^': '',
        },
        onProxyReq(proxyReq){
          proxyReq.removeHeader('origin')
        }
      }
      // [process.env.NEXT_PUBLIC_BASE_API]: {
      //   target: 'http://xxxx', // 外网测试环境
      //   changeOrigin: true,
      //   pathRewrite: { '^/api': '' },
      // },
      // [process.env.NEXT_PUBLIC_WEBSOCKET_PUSH_API]: {
      //   target: 'ws://xxxx', // 外网ws测试环境
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: { '^/wsapi': '' },
      // },
    }
    if (dev && devProxy) {
      Object.keys(devProxy).forEach((context) => {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }
  
    server.all('*', (req, res) => {
      handle(req, res)
    })
  
    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(\`http://0.0.0.0:\${port}\`)
      console.log(\`> Ready on http://localhost:\${port}\`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
    `,
    },
  ];
}


