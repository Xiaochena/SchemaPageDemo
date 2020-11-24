/**
 * 建议指定每个column列宽，如不制定，则默认每列200，且带有tooltip
 */
import { TableSchemaType } from 'schema-page/dist/types';

export default {
  type: 'object',
  properties: {
    NO_NAME_FIELD_$0: {
      name: 'NO_NAME_FIELD_$0',
      type: 'object',
      'x-component': 'schemaTable',
      'x-component-props': {
        formType: 'schemaForm',
        pagination: { pageSize: 10 },
        formProps: '{{formProps}}',
        modalProps: {
          width: 500,
          title: '运营人员',
        },
        operationProps: {
          operations: ['{{viewWeChatFriends}}'],
          width: 70,
        },
        scroll: { x: 1000 },
        rowKey: 'FriendID',
        columns: [
          {
            title: '微信昵称',
            dataIndex: 'NickName',
            key: 'NickName',
            width: 200,
          },
          {
            title: '好友备注',
            dataIndex: 'Remark',
            key: 'Remark',
            width: 200,
          },
          {
            title: '微信号',
            dataIndex: 'WxAccount',
            key: 'WxAccount',
            width: 200,
          },
          {
            title: '标签',
            dataIndex: 'tags',
            key: 'tags',
            width: 200,
          },
          {
            title: '所属机器人',
            dataIndex: 'weixins',
            key: 'weixins',
            width: 200,
          },
        ],
      } as TableSchemaType,
    },
  },
};
