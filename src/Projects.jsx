import React from 'react';
import { Divider, Empty, Card, Tag } from 'antd';
import  {Container, Row, Col} from 'react-bootstrap';


import CustomTag from './CustomTag';

class Projects extends React.Component {
    
    render() {
        return (
            // <div style={divStyle}>
            //     and i oop
            // </div>
            <div id="projects">
                <Divider orientation="left">
                    <h2 className={this.props.className}>projects</h2>
                </Divider>
                <Card>
                    Here's a small collection of both personal projects and school projects!
                </Card>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4} className="project">
                        <a href="https://github.com/sandra-soto/riddle-me-this" target="_blank">
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="rmt.png"
                              />
                            }>
                            <Divider orientation="center">Riddle Me This!</Divider>
                            <p>
                                an online multiplayer game, in which players race against the clock to answer riddles
                            </p>
                            <div className="d-flex flex-wrap">
                                <CustomTag type="node"/>
                                <CustomTag type="jquery"/>
                                <CustomTag type="html"/>
                                <CustomTag type="mongodb"/>
                                <CustomTag type="socketio"/>
                            </div>
                          </Card>  
                        </a>                      
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="project">
                        <a href="https://web.archive.org/web/20200528191514/https://www.ics.uci.edu/~thornton/ics46/TournamentResults.html">
                              <Card
                                hoverable
                                cover={
                                  <img
                                    alt="example"
                                    src="Othello_AI.png"
                                  />
                                }>
                                <Divider orientation="center">Trash Trash AI</Divider>
                                <p>
                                    traditional AI which utilizes recursive backtracking and gamestate decision trees to select the best outcome in a game of Othello/Reversi
                                </p>
                                <div className="d-flex flex-wrap">
                                    <CustomTag type="cpp"/>
                                </div>
                              </Card>    
                        </a>                    
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="project">
                      <Card
                        hoverable
                        style={{cursor: 'none'}}
                        cover={
                          <img
                            alt="example"
                            src="ics_search.png"
                          />
                        }>
                        <Divider orientation="center">ICS Search</Divider>
                        <p>
                            mini-search engine with web GUI for the ICS UCI domains that returns results for 50k+ webpages using an inverted index and tf-idf ranking
                        </p>
                        <div className="d-flex flex-wrap">
                            <CustomTag type="python"/>
                            <CustomTag type="flask"/>
                            <CustomTag type="nltk"/>
                            <CustomTag type="d3"/>
                            <CustomTag type="html"/>
                        </div>
                      </Card>                 
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="project">
                        <a href="https://github.com/kati-tran/astera">
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="astera.png"
                              />
                            }>
                            <Divider orientation="center">Astera</Divider>
                            <p>
                                low poly 2D platformer in which the player controls a black cat who is lost in the woods and must find their way back home
                            </p>
                            <div className="d-flex flex-wrap">
                                <CustomTag type="cpp"/>
                                <CustomTag type="unity"/>
                            </div>
                          </Card> 
                        </a>                       
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="project">
                        <a href="https://devpost.com/software/qwertunes">
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="qwertunes.png"
                              />
                            }>
                            <Divider orientation="center">QwerTunes</Divider>
                            <p>
                                webapp which uses the Spotify API to recommend music that a user might be interested in, based on genre
                            </p>
                            <div className="d-flex flex-wrap">
                                <CustomTag type="node"/>
                                <CustomTag type="spotify"/>
                                <CustomTag type="handlebars"/>
                                <CustomTag type="jquery"/>
                                <CustomTag type="html"/>
                            </div>
                          </Card>
                        </a>                        
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="project">
                        <a href="https://github.com/codepath-FKS/codepath-project">
                            <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="todo.png"
                              />
                            }>
                                <Divider orientation="center">Todo</Divider>
                                <p>
                                    gamified To-Do list Android app in which you take care of a virtual pet named Todo as you complete goals and support the community
                                </p>
                                <div className="d-flex flex-wrap">
                                    <CustomTag type="java"/>
                                    <CustomTag type="android"/>
                                    <CustomTag type="parse"/>
                                </div>
                            </Card> 
                        </a>                       
                    </Col>
                  </Row>
            </div>
        )
    }
}



export default Projects;