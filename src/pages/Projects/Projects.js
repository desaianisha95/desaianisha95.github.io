import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import react from "../../assests/skills/react.svg"
import redux from "../../assests/skills/redux.svg"
import bootstrap from "../../assests/skills/bootstrap.svg";
import Image from "react-bootstrap/Image";
import "./Projects.style.css";


import RoboFriends from "/Users/swetashah/portfolio/src/assests/projects/robo.webp"
import LiveWeather from "/Users/swetashah/portfolio/src/assests/projects/weather.webp"
import Models from "/Users/swetashah/portfolio/src/assests/projects/Models.webp"

const TimeLine = () => {
    return (
      <div id="projects">
        <div className="fontdetails">PROJECTS</div>
        <Timeline>
          <Events>
          <ImageEvent date="20/06/2020" className="text-center" text="RoboFriends" src={RoboFriends} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to search through robots fetched in real-time with users.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search through Robots</li>
                          <li>Users and Robots being fetched via API call</li>
                          <li>Usage of Redux store</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={react} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={redux} alt="Redux" rounded className="image-style m-1"></Image> Redux
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/desaianisha95/RoboFriends" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent date="22/07/2020" className="text-center" text="LiveWeather" src={LiveWeather} alt="LiveWeather">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A weather application which fetches real-time forecast weather data using Open Weather API. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search for real-time Weather via API call</li>
                          <li>Shows Min and Max Tempurature of the searched city</li>
                          <li>Shows description of the weather</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={react} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={bootstrap} alt="Bootstrap" rounded className="image-style m-1"></Image> Bootstrap
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/desaianisha95/Live_Weather" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          <ImageEvent date="12/03/2020" className="text-center" text="Models" src={Models} alt="Models">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>An Artificial Intelligence model for time series forecasting of stock price, based on the data of past 7 days. 
                        <hr />
                        <strong>Implementation</strong>
                        <ul className="list-styles pt-1">
                          <li>Implemented Convolutional Neural Network</li>
                          <li>Implemented Long Short Term Memory Model</li>
                          <li>Implemented Fully Connected Neural Network</li>
                        </ul>
                        <hr />
                        <strong>Models used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                               Convolutional Neural Network
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Long Short Term Memory Model
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                            Fully Connected Neural Network
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/desaianisha95/Projects" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
              


          </Events>
        </Timeline>
        </div> 
    );
};

export default TimeLine;