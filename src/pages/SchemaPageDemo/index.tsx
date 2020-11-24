import React from 'react';
import { Button } from 'antd';
import SchemaPage from 'schema-page';
import { RenderOperationButton } from 'schema-page/dist/components/SchemaTable/RenderOperation';

import tableSchema from './tableSchema';
import formSchema from './formSchema';

const SchemaPageDemo: React.FC = () => {
  return (
    <SchemaPage
      schema={tableSchema}
      expressionScope={{
        formProps: {
          schema: formSchema,
        },
        //#region 操作列
        viewWeChatFriends: ((record: any) => (
          <Button
            style={{ margin: 0, padding: 0 }}
            size="small"
            type="link"
            key={record.WeixinID}
            onClick={() => {}}
          >
            查看微信好友
          </Button>
        )) as RenderOperationButton<{}>,
      }}
    />
  );
};
export default SchemaPageDemo;
