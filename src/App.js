import './App.scss';
import React from 'react';
import About from './About';
import Home from './Home';
// import {Navbar, Nav, Button} from 'react-bootstrap';
import resume from './sandra-soto-resume.pdf';

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;







class App extends React.Component {
  render() {
      return (
       <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              theme="dark"
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  home
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  about
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  projects
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                  resume
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                  more
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
              <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  content
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}> gt; S lt;  portfolio ©2021 Sandra Soto</Footer>
            </Layout>
          </Layout>
            );
  }
}

export default App;