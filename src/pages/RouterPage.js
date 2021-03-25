import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import {

  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Cola } from './Cola';
import { Ingresar } from './Ingresar';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';


const { Sider, Content } = Layout;
export const RouterPage = () => {

  const {ocultarMenu}= useContext(UiContext)
    return (

      <Router>
           <Layout>
        <Sider  
            collapsedWidth="0"
            breakpoint="md"
            hidden={ocultarMenu} 
        
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/ingresar">
                  Inresar
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cola">
                Cola de tickets
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear">
                Crear
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/ingresar" component={Ingresar}/>
              <Route path="/cola" component={Cola}/>
              <Route path="/crear" component={CrearTicket}/>
              <Route path="/escritorio" component={Escritorio}/>
              
            </Switch>
            
          </Content>
        </Layout>
      </Layout>
      </Router>
    )
}
