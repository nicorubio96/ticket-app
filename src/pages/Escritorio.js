
import React from 'react'
import { Row,Col,Typography, Button, Divider } from 'antd'
import { useHistory } from 'react-router';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useHide } from '../hooks/useHide';
const {Title,Text}=Typography;


export const Escritorio = () => {
    useHide(false)

    const siguienteTicket=()=>{
        console.log('siguienteee')
    }
    const history = useHistory()

    const salir =()=>{
        history.goBack()
        
    }

  
    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Nicolás</Title>
                    <Text>Usted está en el escritorio: </Text>
                    <Text type="success">4</Text>
                
                </Col>

                <Col>
                    <Button
                        shape="round"
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined/>
                            Salir

                    </Button>
                </Col>
            </Row>

            <Divider/>


            <Row>
                <Col>
                    <Text>Está atendiendo el ticket numero:</Text>
                    <Text
                        style={{fontSize:36}}
                        type="danger" 
                    
                    >
                        55
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        onClick={siguienteTicket}
                    >
                        siguienteee
                    </Button>

                </Col>
            </Row>
            

        
        </>
    )
}
