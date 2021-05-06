import React from "react";
import "../App.css";
import { Typography } from "antd";

export default function TechIUse() {
  const { Title } = Typography;
  return (
    <div>
      <Title level={3} className="section-title">
        Technologies I Work With
      </Title>
      <div id="container">
        <div id="stage">
          <div id="shape" class="cube backfaces">
            <div class="plane one"><i>Django</i></div>
            <div class="plane two"><i>Javascript</i></div>
            <div class="plane three"><i>Typescript</i></div>
            <div class="plane four"><i>AWS</i></div>
            <div class="plane five"><i>Python</i></div>
            <div class="plane six"><i>React</i></div>
            <div class="plane seven"><i>PHP</i></div>
            <div class="plane eight"><i>PostgreSQL</i></div>
            <div class="plane nine"><i>MySQL</i></div>
            <div class="plane ten"><i>Heroku</i></div>
            <div class="plane eleven"><i>NodeJS</i></div>
            <div class="plane twelve"><i>Laravel</i></div>
          </div>
        </div>          
      </div>
    </div>
  );
}
