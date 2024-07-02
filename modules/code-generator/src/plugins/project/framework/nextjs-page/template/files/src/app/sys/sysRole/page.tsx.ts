import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'page',
        'tsx',
        `
"use client";
import { ProTable } from '@ant-design/pro-components';
import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { message, Tree } from 'antd';
import { sysRole, resTreeSelect, resConfig } from '@/services/sys';
import Modal from 'antd/lib/modal/Modal';

export default () => {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalVisit, setModalVisit] = useState(false);
    const actionRef = useRef();
    const formRef = useRef();
    const [treeData, setTreeData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [currentRow, setCurrentRow] = useState();

    const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
    };

    const columns = [
    {
        title: 'ID',
        search: false,
        dataIndex: 'id',
        valueType: 'text'
    },
    {
        title: '角色编码',
        dataIndex: 'roleCode',
        valueType: 'text',
        search: {
        transform: (value: any) => {
            return { roleCode: value.trim() };
        },
        },
    },
    {
        title: '角色名称',
        dataIndex: 'roleName',
        valueType: 'text',
        search: {
        transform: (value: any) => {
            return { roleName: value.trim() };
        },
        },
    },
    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        fixed: 'right',
        align: 'center',
        render: (_: any, record: any) => {
        let buttonList = [];
        //修改
        buttonList.push(
            <a key="id" onClick={async () => {
            setCurrentRow(record);
            let data = await resTreeSelect({ roleCode: record.roleCode });
            if (data.treeList) {
                setTreeData(data.treeList);
                setCheckedKeys(data.checkedKeys);
                setModalVisit(true);
            } else {
                message.warn("权限数据为空");
            }
            }}>绑定权限</a>
        );
        return buttonList;
        }
    }
    ];

    return (
    <>
        <ProTable
        actionRef={actionRef}
        formRef={formRef}
        rowKey="id"
        size="small"
        search={{
            defaultCollapsed: false
        }}
        pagination={{
            pageSize: 10
        }}
        request={sysRole}
        columns={columns}
        form={{
            ignoreRules: false,
            labelWidth: 110,
        }}
        dateFormatter="string"
        />

        <Modal
        open={modalVisit}
        title="权限配置"
        okText="提交"
        cancelText="关闭"
        confirmLoading={confirmLoading}
        onCancel={() => { setModalVisit(false) }}
        onOk={async () => {
            if (checkedKeys.length == 0) {
            message.warn("请先选择权限");
            return;
            }
            setConfirmLoading(true);
            let result = await resConfig({ checkedKeys: checkedKeys.toString(), roleCode: currentRow.roleCode });
            if (result) {
            setModalVisit(false);
            }
            setConfirmLoading(false);
        }}
        >
        <Tree
            checkable
            autoExpandParent={true}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            treeData={treeData}
        />
        </Modal>
    </>
    );
};
    `,
    );

    return [['src', 'app', 'sys', 'sysRole'], file];
}
