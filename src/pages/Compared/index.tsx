import React from 'react';
import { Card } from 'antd';

import SchemaFormDemo from './SchemaFormDemo';
import AntdDemo from './AntdDemo';

const Compared: React.FC = () => {
  return (
    <>
      <Card>
        <SchemaFormDemo />
      </Card>
      <Card style={{ marginTop: '20px' }}>
        <AntdDemo />
      </Card>
    </>
  );
};

export default Compared;
