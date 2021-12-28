import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Card, Tabs, Carousel, Divider } from 'antd';
import  { Row, Col } from 'react-bootstrap';
const { TabPane } = Tabs;



class GraphicDesign extends React.Component {
    render() {
        return (
          <div class="graphicDesign">
          <Row gutter={[8, 8]}>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"/img/intel.png"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"mentorship_mixer.png"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"first_general_meeting.png"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"mock_technicals.png"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"ghc.png"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"trivia_night.png"}
                          />
                        }>
            
              </Card>
            </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"sponsor_tiers.png"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"mock_technicals_2.jpg"}
                          />
                        }>
            
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"ghc_2.jpg"}
                          />
                        }>
            
              </Card>
            </Col>
        </Row>
        </div>

          )
    }
}

class DigitalArt extends React.Component {
  render() {
    return (
        <div class="graphicDesign">
        <Row gutter={[8, 8]}>
            <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"ranier.jpg"}
                          />
                        }>
            
               </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"planet.jpg"}
                          />
                        }>
            
               </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"helen.jpg"}
                          />
                        }>
            
               </Card>
            </Col>


              <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"planet_2.jpg"}
                          />
                        }>
            
               </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"landscape_2.jpg"}
                          />
                        }>
            
               </Card>
            </Col>

            <Col xs={12} sm={3} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"landscape.jpg"}
                          />
                        }>
            
               </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"rose.jpg"}
                          />
                        }>
            
               </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
               <Card
                      className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                          <img
                            alt="example"
                            src={"gleam.png"}
                          />
                        }>
            
               </Card>
            </Col>

          </Row>
        </div>

      )
  }
}

class More extends React.Component {

  render() {

    return (
      <div id="more">
        <Divider orientation="left">
              <h2   className={this.props.className}>more</h2>
          </Divider>

      <Tabs defaultActiveKey="1" tabPosition={"top"} type="card" style={{ minHeight: 200, height: 'fit-content' }}>
        <TabPane tab={"graphic design"} key={1} forceRender={"true"}>
          <GraphicDesign/>
        </TabPane>
         <TabPane tab={"digital art"} key={2} forceRender={"true"}>
          <DigitalArt/>
        </TabPane>
         <TabPane tab={"3D art"} key={3} forceRender={"true"}>
          <Row class="graphicDesign">
           <Col xs={12} sm={12} md={6} lg={6}>
               <Card  className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                      <img alt="example" src={ "/img/3D-pig-Preview1.png"}/>
                  
                        }>
                  
                </Card>
                
              </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
               <Card  className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                      <img alt="example" src={ "/img/3D-pig-Preview2.png"}/>
                  
                        }>
                  
                </Card>
                
              </Col>
          </Row>
          <Row>
                    <Col xs={12} sm={12} md={6} lg={3}>
               <Card  className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                      <img alt="example" src={ "/img/3D-phone-Preview1.png"}/>
                  
                        }>
                  
                </Card>
                
              </Col>
                                  <Col xs={12} sm={12} md={6} lg={3}>
               <Card  className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                      <img alt="example" src={ "/img/3D-phone-Preview2.png"}/>
                  
                        }>
                  
                </Card>
                
              </Col>
                                  <Col xs={12} sm={12} md={6} lg={3}>
               <Card  className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                      <img alt="example" src={ "/img/3D-phone-Preview3.png"}/>
                  
                        }>
                  
                </Card>
                
              </Col>

                                  <Col xs={12} sm={12} md={6} lg={3}>
               <Card  className="project"
                        hoverable
                        style={{ cursor: 'default'}}
                        cover={
                      <img alt="example" src={ "/img/3D-phone-Preview4.png"}/>
                  
                        }>
                  
                </Card>
                
              </Col>
          </Row>
        </TabPane>
      </Tabs>





      </div>
    );
  }
}

export default More;