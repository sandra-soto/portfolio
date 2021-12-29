import './App.scss';
import React from 'react';
import About from './About';
import ResModal from './ResModal';
import Home from './Home';
import More from './More';
import Projects from './Projects';
import {Navbar, Nav, Container } from 'react-bootstrap';

import { Layout, Menu, Divider, Button, Anchor} from 'antd';
import { HeartFill, FilePersonFill } from 'react-bootstrap-icons';

import { UploadOutlined, UserOutlined, VideoCameraOutlined, HeartFilled, HomeOutlined,
          QuestionCircleOutlined, SnippetsOutlined, FileTextOutlined, SmileOutlined, 

} from '@ant-design/icons';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Link } = Anchor;




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       currentItem: "1",
    };
    this.setCurrentItem = this.setCurrentItem.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll

 
    const menuSections = ["home", "about", "projects", "more"];
    for (let i = 0; i < menuSections.length; i++){
      let obj = document.querySelector(`#${menuSections[i]}`).getBoundingClientRect();
      if (obj.y <= 150 && obj.bottom >= 50){
           this.setState({
            currentItem: `${i+1}`,
        })
        break;
      }
    }


  }

  setCurrentItem = (num) => {
      this.setState({
            currentItem: `${num}`,
        })
    }

  render() {
      return (

         <Layout>

    <Sider
      className="d-none d-sm-block"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
         <Menu theme="dark" mode="inline" selectable={false}>
           <Menu.Item key="1" icon={<HomeOutlined />} className={this.state.currentItem =="1"? "ant-menu-item-selected": "unselected"}>
             <Nav.Link href="#home" className="menuItemStyle">home</Nav.Link>
           </Menu.Item>
           <Menu.Item  key="2" icon={<QuestionCircleOutlined />} className={this.state.currentItem =="2"? "ant-menu-item-selected": "unselected"}>
             <Nav.Link href="#about" className="menuItemStyle">about</Nav.Link>
           </Menu.Item>
           <Menu.Item key="3" icon={<SnippetsOutlined />} className={this.state.currentItem =="3"? "ant-menu-item-selected": "unselected"}>
             <Nav.Link href="#projects" className="menuItemStyle">projects</Nav.Link>
           </Menu.Item>
           <Menu.Item key="4" icon={<SmileOutlined />} className={this.state.currentItem =="4"? "ant-menu-item-selected": "unselected"}>
             <Nav.Link href="#more" className="menuItemStyle">more</Nav.Link>
           </Menu.Item>      
          </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
     <Navbar bg="light" expand="lg" className="d-block d-sm-none">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">home</Nav.Link>
                <Nav.Link href="#about">about</Nav.Link>
                <Nav.Link href="#projects">projects</Nav.Link>
                <Nav.Link href="#projects">more</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
{/*      <Header>
      </Header>*/}
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: '2rem'}}>
                <Home className={this.state.currentItem =="1"? "popInLong": "opaque"}></Home>
                <br/> <br/>
                <About className={this.state.currentItem =="2"? "popIn": "opaque"}></About>
                <br/>

                <Projects className={this.state.currentItem =="3"? "popIn": "opaque"}></Projects>
               
                <More className={this.state.currentItem =="4"? "popIn": "opaque"}/>
                <br/>
{/*                <Button type="primary" size={"default"} icon={ <FilePersonFill/>} className="d-flex align-items-center">
                 
                   <ResModal text="&nbsp;resume"></ResModal>
                </Button>*/}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Made with <HeartFill /> and ReactJS </Footer>
    </Layout>
  </Layout>
            );
  }
}

export default App;