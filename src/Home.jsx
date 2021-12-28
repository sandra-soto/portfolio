import './App.scss';
import React from 'react';
import ResModal from './ResModal';

import {Linkedin, Github, EnvelopeFill, FilePersonFill} from 'react-bootstrap-icons';
import { Button } from 'antd';
import { Space, Typography, Divider, Tag } from 'antd';

import Wave from 'react-wavify'
import { SmileOutlined } from '@ant-design/icons';


class Home extends React.Component {
    render() {
        return (
          <>
            <div className="fullWidth">
               <div className={"d-flex flex-row justify-content-center align-items-center " + this.props.className} id="home">
                    <div style={{textAlign: 'center'}}>
                         <h1>Sandra Soto</h1>
                         <h6>fullstack webdeveloper</h6>
                         <div className="spacerSmall"></div>
                         <div id="socials" className="d-flex flex-column justify-content-center align-items-center">
                              <div className="d-flex flex-row flex-wrap flex-start" >
                                   <a href="https://www.linkedin.com/in/sandra-soto/" target="_blank" >
                                        <Tag icon={<Linkedin/>} color="blue">
                                           &nbsp; linkedin
                                         </Tag>     
                                   </a>
                                   <a href="https://github.com/sandra-soto" target="_blank" >
                                        <Tag icon={<Github/>} color="magenta">
                                           &nbsp; github
                                        </Tag>     
                                   </a>
                                   <a href="mailto:ssotodia@uci.edu" target="_blank" >
                                        <Tag icon={<EnvelopeFill/>} color="green">
                                           &nbsp; email
                                        </Tag>     
                                   </a>
                            {/*       <a href="/Sandra_Soto_Resume.pdf" download>
                                        <Tag icon={<FilePersonFill/>} color="red">
                                           &nbsp; Resume
                                        </Tag>     
                                   </a>*/}
                                   <Tag icon={<FilePersonFill/>} color="red">
                                        <ResModal text="&nbsp;resume"></ResModal>
                                   </Tag>     
                                   
                              </div> 
                         </div> 
                                     
                    </div>
                    <div id="smileWrapper" className="d-none d-lg-block">
                         <SmileOutlined id="smiley"></SmileOutlined>
                         <div className="blush" id="blush1"/>
                         <div className="blush" id="blush2"/>
                    </div>
               </div>
                                 <div className="fullWidth">
                 <Wave 
                      fill='#59A1FF'
                        paused={false}
                        options={{
                          height: 20,
                          amplitude: 20,
                          speed: 0.15,
                          points: 3
                        }}
                  ></Wave>

                </div>
              </div>

               </>

            
        );
    }

}


export default Home;