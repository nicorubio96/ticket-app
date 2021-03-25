import React from 'react'
import { Form, Input, Button, Checkbox,InputNumber,Typography } from 'antd';
import { useHistory } from 'react-router';
import { useHide } from '../hooks/useHide';

const {Title}=Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};



export const Ingresar = () => {
    useHide(false)

    const history= useHistory()

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push('/escritorio')
      };

        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };





    return (


        <>

            <Title level={2}>Ingresar</Title>


                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Nombre del personal"
                        name="username"
                        rules={[{ required: true, message: 'Por favor ingrese su nombre!' }]}
                        >
                        <Input />
                        </Form.Item>
                                    
                    <Form.Item
                        label="Escritorio"
                        name="desktop"
                        rules={[{ required: true, message: 'Igrese el numero de escritorio!' }]}
                        >
                        <InputNumber min={1} max={99}/>
                    </Form.Item>
                                    
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Ingresar
                        </Button>
                    </Form.Item>
                </Form>
        </>
                    
    )



}
