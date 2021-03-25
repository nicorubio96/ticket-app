import React from 'react'
import {Button, Col,Row, Typography,} from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useHide } from '../hooks/useHide'
const {Title,Text}=Typography
export const CrearTicket = () => {

    useHide(true)//tiene oculto el menu 

    const nuevoTicket=()=>{
        console.log('nuevoooo')
    }
    return (
        <>
        <Row>
            <Col span={14} offset={6} align="center">
                <Title>
                    Presione el boton para obtener un nuevo ticket
                    
                </Title>

                <Button
                    type="primary"
                    shape="round"
                    icon={<DownloadOutlined/>}
                    size="large"
                    onClick={nuevoTicket}
                >
                    Nuevo Ticket

                </Button>
            </Col>

        </Row>

        <Row style={{marginTop:100}}>
            <Col span={14} offset={6} align="center">
                <Text level={2}>
                    Su numero

                </Text>
                <br/>
                <Text type="success" style={{fontSize:55}}>
                    100
                </Text>
            </Col>

        </Row>
            
        </>
    )
}
