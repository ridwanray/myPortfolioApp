import React from "react";
import "../App.css";
import { Typography } from "antd";

export default function AboutMe() {
  const { Title } = Typography;
  return (
    <div style={{ marginTop: 20}}>
      <Title
          level={3}
          className="component-header"
          style={{ color: "white"}}
        >
          A Little About Me!
        </Title>
        <div class="fade-in">
          <p class="centered-text">
            Hey! I'm Farhan! I'm a highly-enthusiastic individual whose
            currently pursuing a B.Sc in Computer Science at UNSW. I
            am a full-stack software developer, working primarily with the
            Django-React stack. At university, I was the designated technical 
            lead for our capstone project. I enjoy working in both
            team-oriented and self-directed environments and offer great
            communication skills and work ethic. My work experience includes a 
            summer internship at Macrovue, a FinTech company formerly based in 
            Circular Quay (now located at Pitt Street)
        </p>
      </div>
    </div>
  );
}
