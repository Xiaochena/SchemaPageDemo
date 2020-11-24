import { ISchema } from 'schema-page';

const formSchema: ISchema = {
  'x-component-props': {
    size: 'medium',
    labelAlign: 'right',
    labelCol: 4,
    wrapperCol: 19,
  },
  type: 'object',
  properties: {
    AdminName: {
      title: '运营人员',
      'x-component': 'input',
      'x-rules': [{ required: true, message: '请输入运营人员名称' }],
      'x-component-props': {
        placeholder: '请输入运营人员名称',
      },
    },
  },
};

export default formSchema;
