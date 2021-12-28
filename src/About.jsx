import React from 'react';
import CustomTag from './CustomTag';
import { Divider, Tabs, Tag, Card } from 'antd';
import  { Container, Row, Col } from 'react-bootstrap';
const { TabPane } = Tabs;



const divStyle = {
    color:'black'
};
const style = {};

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
    };
     this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
      window.addEventListener("resize", null);
    }
    handleResize(WindowSize, event) {
        this.setState({mode: window.innerWidth > 768 ? "left" : "top"});

    }


  render() {
    const { mode } = this.state;
    return (

      <Card>

        <Tabs defaultActiveKey="1" tabPosition={ this.state.mode} style={{ minHeight: 200, height: 'fit-content' }}>
            <TabPane tab={"Fugu Corp"} key={1}>
               <div className="d-flex  flex-column justify-content-between">
                 <Row>
                    <Col xs={12} sm={12} md={3} lg={12} >
                        <label> <strong>Fullstack Programmer Intern, </strong><em>Aug 2021 - Oct 2021 </em></label>
                        <br/>
                        
                  
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={12} >
                        <ul>
                            <li>Programmed in C#, ASP.NET and SQL to maintain and add features to various e-learning websites</li>
                            <li>Architectured and implemented both frontend and backend for an administrator refund feature with Authorize.net API and PayPal API</li>
                            <li>Implemented frontend changes with HTML, CSS, and Telerik and regularly performed blackbox testing on pages with heavy traffic</li>
                        
                        </ul>
                         
                    </Col>
                </Row>
                <div className="spacer30"></div>
                <div className="d-flex flex-wrap" >
                    <CustomTag type="asp"/>
                    <CustomTag type="cpp"/>
                    <CustomTag type="sql"/>
                    <CustomTag type="html"/>
                    <CustomTag type="javascript"/>
                    <CustomTag type="authorize"/>
                    <CustomTag type="paypal"/>
                </div>
              </div>
            </TabPane>

        
            <TabPane tab={"Juni Learning"} key={2}>
                <div className="d-flex  flex-column justify-content-between">
                 <Row>
                    <Col xs={12} sm={12} md={3} lg={12} >
                        <label> <strong>Computer Science Instructor, </strong><em>June 2021 - present </em></label>
                        <br/>
                        
                  
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={12} >
                        <ul>
                            <li>Teaching Computer Science curriculum in Python, Java, and JavaScript to students ages 8-18</li>
                            <li>Adapting to student needs and interests, as well as assessing understanding and skill level through the completion of modules and projects</li>
                            <li>Maintaining records for multiple students and communicating with parents regularly</li>
                        
                        </ul>
                         
                    </Col>
                </Row>
                <div className="spacer30"></div>
                <div className="d-flex flex-wrap" >
                    <CustomTag type="javascript"/>
                    <CustomTag type="java"/>
                    <CustomTag type="python"/>
                    <CustomTag type="html"/>
                </div>
              </div>
            </TabPane>

            <TabPane tab={"Live Good"} key={3}>
                <div className="d-flex  flex-column justify-content-between">
                 <Row>
                    <Col xs={12} sm={12} md={3} lg={12} >
                        <label> <strong>Web Developer Intern, </strong><em>Oct 2021 - present </em></label>
                        <br/>
                        
                  
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={12} >
                        <ul>
                            <li>Implementing custom web pages with HTML, CSS and JavaScript and following theme/branding standards throughout the Live Good retail website</li>
                            <li>Designing graphics for gift cards, Live Good Newsletter, and promotional company events</li>
                            <li>Managing WordPress plugins and maintaining website dependencies</li>
                        
                        </ul>
                         
                    </Col>
                </Row>
                <div className="spacer30"></div>
                <div className="d-flex flex-wrap" >
                    <CustomTag type="html"/>
                    <CustomTag type="javascript"/>
                    <CustomTag type="wordpress"/>
                    <CustomTag type="woocommerce"/>
                </div>
              </div>
                   
            </TabPane>
        </Tabs>
      </Card>
    );
  }
}


class VolunteerExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
    };
     this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
      window.addEventListener("resize", null);
    }
    handleResize(WindowSize, event) {
        this.setState({mode: window.innerWidth > 768 ? "left" : "top"});

    }


  render() {
    const { mode } = this.state;
    return (

      <Card>

        <Tabs defaultActiveKey="1" tabPosition={ this.state.mode} style={{ minHeight: 200, height: 'fit-content' }}>
            <TabPane tab={"WICS"} key={1}>
               <div className="d-flex  flex-column justify-content-between">
                 <Row>
                    <Col xs={12} sm={12} md={3} lg={12} >
                        <label> <strong>Graphic Designer for WICS (Women in Information & Computer Sciences), </strong><em>Sep 2019 - June 2021 </em></label>
                        <br/>
                        
                  
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={12} >
                        <ul>
                            <li>Worked with marketing team to design and digital graphics for club events</li>
                            <li>Utilized Asana for task-tracking and prompt delivery of materials</li>
                            <li>Designed WICS '21 yearbook and WICS sponsorship deck viewed by dozens of industry professionals</li>
                        
                        </ul>
                         
                    </Col>
                </Row>
              </div>
            </TabPane>

        
            <TabPane tab={"ZotHacks"} key={2}>
                <div className="d-flex  flex-column justify-content-between">
                 <Row>
                    <Col xs={12} sm={12} md={3} lg={12} >
                        <label> <strong>ZotHacks, </strong><em>Nov 2020 </em></label>
                        <br/>
                        
                  
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={12} >
                        <ul>
                            <li> Mentored a team of 4 students in creating a webapp at UCI's 30-hour beginner Hackthon, ZotHacks</li>
                            <li> Provided debugging assistance and advice to other beginner hackers during the event</li>
                        </ul>
                         
                    </Col>
                </Row>
              </div>
            </TabPane>
        </Tabs>
      </Card>
    );
  }
}

class About extends React.Component {
    
    render() {
        return (
            <div id="about">
                <Divider orientation="left"  id="about">
                  <h2 className={this.props.className}>about</h2>
                </Divider>
                <Card>
                    <div style={{margin:'0px 27px'}}>
                        
                        <p> 
                            Hey there! 
                            <br/><br/>
                            I recently graduated from the University of California, Irvine with a B.S. in computer science and a minor in linguistics. 
                            I've always loved artsy things like writing & drawing, and programming is another of the creative outlets I enjoy.
                            I'm currently working part-time as a web developer and a computer science instructor, but I'm now looking for a full-time role in fullstack webdev and/or QA testing.

                            In my free time, I like to read Webtoons and watch k-dramas!
                            <br/><br/>
                            Thanks for stopping by  (:

                        </p>
                    </div>
                </Card>
                <Divider orientation="left"><h5> work experience </h5></Divider>
                <WorkExperience mode="left"/>
                <Divider orientation="left"><h5> volunteer experience </h5></Divider>
                <VolunteerExperience mode="left"/>
            </div>
        )
    }
}



export default About;