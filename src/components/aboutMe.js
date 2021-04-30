import React from "react";
import "../App.css";
import { Typography } from "antd";

export default function AboutMe() {
  const { Title } = Typography;
  return (
    <div className="centered-text">
      <Title
          level={3}
          className="component-header"
          style={{ color: "white"}}
        >
          A Little About Me!
        </Title>
        <div class="fade-in">
          <p class="centered-text">
            Hey there! I'm Farhan! I am a full-stack software developer with a 
            B.Sc in Computer Science from UNSW. Currently, I'm working primarily 
            with the Django-React tech stack. At university, I was the designated 
            technical lead for our final year capstone project. I enjoy working in 
            both team-oriented and self-directed environments and offer great 
            communication skills and work ethic. This portfolio provides an overview
            of my projects and highlights my skillset. Feel free to get in touch
            with me using the form below! Happy coding!
        </p>
      </div>
    </div>
  );
}
