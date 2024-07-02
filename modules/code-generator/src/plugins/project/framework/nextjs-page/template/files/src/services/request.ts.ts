import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'request',
        'ts',
        `
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { message } from "antd";
// 客户端渲染时，才存在 window
// 若是服务段渲染界面，请使用原生 nextjs 模式；
let myWindow = { location: { host: "" }};
if (typeof window !== "undefined") {
    myWindow = window;
} else {
    myWindow = { location: { host: "" }}
}
let base = myWindow.location.host ? "http://" + myWindow.location.host + '/counter' : "/counter";
export const requestUrl = base + '/sys/';
/**
 * 自定义封装axios实例
 */
const request = axios.create({
    baseURL: requestUrl, // 设置基础URL
    timeout: 5000, // 超时时间
    withCredentials: true, // 跨域请求时需要使用凭证 or 携带 cookies
    headers: {
        'Content-Type': 'application/json',
    },
    maxRedirects: 0
});

//请求枚举
export enum MethodEnum {
    Get = "GET",
    Post = "POST",
}

//返回结果
export interface ResponseResultInterface<Body> {
    Header: {}
    Body: Body
}

//请求参数
export interface RequestInterface<params> {
    url: string
    params?: params
    method?: MethodEnum
}

// 添加请求拦截器
request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
request.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status && response.status == 200 && response.data.status == 'error') {
            message.error(response.data.msg);
            return;
        }
        return response;
    },
    error => {
        const { response } = error;
        if (!response) {
            axios({
                method: "POST",
                url: \`\${base}\` + "/get/public/properties",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: '',
            }).then((res) => {
                window.location.href = res.data.logoutUrl;
            })
        } else {
            message.error('请求异常');
        }
        return response;
    }
)

const baseRequest = async <params, responseData>(requestPar: RequestInterface<params>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: requestPar.method || MethodEnum.Post,
        url: requestPar.url,
        data: requestPar.params,
    })
    return requestResult.data as responseData
}

const post = async <data, responseData>(requestPar: RequestInterface<data>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: MethodEnum.Post,
        url: requestPar.url,
        data: requestPar.params,
    })
    return requestResult.data as responseData
}

const get = async <data, responseData>(requestPar: RequestInterface<data>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: MethodEnum.Get,
        url: requestPar.url,
        data: requestPar.params,
    })
    return requestResult.data as responseData
}

const postBigFile = async <data, responseData>(requestPar: RequestInterface<data>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: MethodEnum.Post,
        url: requestPar.url,
        data: requestPar.params,
        headers: {
            'Transfer-Encoding': 'chunked'
        }
    })
    return requestResult.data as responseData
}
export {
    baseRequest,
    post,
    get,
    postBigFile
}
        
    `,
    );

    return [['src', 'services'], file];
}

