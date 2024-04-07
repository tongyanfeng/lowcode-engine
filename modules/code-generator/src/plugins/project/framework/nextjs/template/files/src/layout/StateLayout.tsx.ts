import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'StateLayout',
        'tsx',
        `
"use client";
import React, { useEffect, useState } from "react";
import { __setUserInfoState } from "@/models/_sysInfoSlice";
import { setStorage } from "@/lib/storage/hooks";
import { getInitialState } from "@/lib/getInitialState";
import { StoreProvider } from '@/lib/store/StoreProvider';
import { Spin } from "antd";
let watermark = undefined;
if (typeof document !== "undefined") {
    watermark = require('@webank/watermark');
}

export default ({ children }: any) => {
    const [state, setState] = useState(null);
    useEffect(() => {
    const init = async () => {
        let initialState = await getInitialState();
        setState(initialState);
        setStorage("userInfo", initialState.userInfo);
        // 支持配置的属性
        if (typeof document !== "undefined") {
        watermark.init({
            id: "",  // 指定水印计算的dom 默认当前的页面body
            waterMaskBoxId: "root", // 水印容器的id
            frontX: "", // 水印开始的横坐标 默认以body标签来计算
            frontY: "", // 水印开始的纵坐标 默认以body标签来计算
            frontRows: "", // 水印的行数 默认以body标签来计算
            frontCols: "", // 水印的列数 默认以body标签来计算
            maskTxt: initialState.userInfo.loginId,  // 水印的内容
            color: "#000000", // 字体颜色
            width: 150, // 宽度
            height: 50, // 高度
            fontSize: "16px", // 字体大小
            frontFont: "微软雅黑", // 字体
            frontBackgroundAlpha: 0, // 背景透明比例
            frontTxtAlpha: 0.1, // 文字透明比例
            angle: 15, // 旋转角度
            frontXSpace: 15, // 水印横向间隙
            frontYSpace: 15, // 水印纵向间隙
            backgroundColor: "#000000", // 背景颜色
            resizeable: true, // 支持resize重新计算水印
            addTime: true, // 支持水印内容后面新增时间
            setIntervalTime: "60000", // 支持设置更新水印时间的等待时间
            dateFormatter: "YYYY-MM-DD hh:mm", // 支持设置水印时间的格式
        });
        }
    }
    init();
    }, [])
    if (state != null) {
    return <StoreProvider>{React.cloneElement(children, { initialState: state })}</StoreProvider>;
    } else {
    return <Spin fullscreen></Spin>
    }
} 
    `,
    );

    return [['src', 'layout'], file];
}

