import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    color: rgb(102, 252, 241);

    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;

    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <strong>Hi, I am</strong>
          <br />
          <span>
            <strong>Anisha Desai</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Software Development", "Web Development", "Full Stack Development"],
              autoStart: true,
              loop: true,
              delay: 40
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;