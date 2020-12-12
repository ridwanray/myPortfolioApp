import React from "react";
import "../App.css";

import { Typography } from "antd";

import Fade from "react-reveal/Fade";

var ReactRotatingText = require("react-rotating-text");

export default function AnimateText() {
  const { Title } = Typography;
  return (
    <div>
      <Fade cascade>
        <Title
          level={3}
          style={{
            float: "topLeft",
            color: "white",
            fontSize: 50,
            textAlign: "center",
            fontFamily: `Do Hyeon', sans-serif`,
          }}
        >
          <ReactRotatingText
            items={[
              "Hey there! 😊",
              "I'm Farhan! ",
              "I like to code and build stuff 🛠️ ",
              "This is my personal portfolio 📜",
              `It's still a work in progress! 👨‍💻`,
              `You can learn a little bit more about me below 🧐!`,
              "Also, feel free to grab a copy of my resume from below!",
            ]}
          />
        </Title>
      </Fade>
    </div>
  );
}
