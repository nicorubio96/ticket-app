import React from 'react'
import {Card, Col, Row, Tag, Typography,List, Divider} from 'antd'
import { useHide } from '../hooks/useHide';

const {Title,Text}= Typography;


const data = [
    {
        ticketNo: 33,
        escritorio: 3,
        agente: 'Nicolás Rubio'
    },
    {
        ticketNo: 34,
        escritorio: 4,
        agente: 'Juan Reyes'
    },
    {
        ticketNo: 35,
        escritorio: 5,
        agente: 'Leticia Zamorano'
    },
    {
        ticketNo: 36,
        escritorio: 3,
        agente: 'Hugo Allende'
    },
    {
        ticketNo: 37,
        escritorio: 3,
        agente: 'Karen Aliaga'
    },
    {
        ticketNo: 38,
        escritorio: 2,
        agente: 'Valentina Sandoval'
    },
    {
        ticketNo: 39,
        escritorio: 5,
        agente: 'Carlos Lara'
    },
];

export const Cola = () => {
    useHide(true)
    return (
        <>
            <Title level={1}>Atendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={data}
                        renderItem={
                            item=>(
                                <List.Item>
                                    <Card
                                        style={{width:300,marginTop:16}}
                                        actions={[
                                            <Tag color="volcano">{item.agente}</Tag>,
                                            <Tag color="magenta"> Escritorio: {item.escritorio}</Tag>
                                        ]}
                                    >

                                        <Title> N° {item.ticketNo}</Title>


                                    </Card>
                                </List.Item>
                            )
                        }
                    
                    
                    />
                 
                </Col>

                <Col span={12}>
                    <Divider>Historial</Divider>

                    <List
                        dataSource={data}
                        renderItem={item =>(
                            <List.Item>
                                <List.Item.Meta
                                    title={ `N° Ticket ${item.ticketNo}`}
                                    description={
                                        <>
                                            <Text type="secondary">En el escritorio:</Text>
                                            <Tag color="magenta">{item.ticketNo}</Tag>
                                            <Text type="secondary">Agente:</Text>
                                            <Tag color="volcano">{item.agente}</Tag>
                                        </>
                                    }
                                />

                            </List.Item>
                        )}
                    />
                
                </Col>
            </Row>
            
        </>
    )
}

