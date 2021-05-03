import React from "react";
import "../App.css";

import { Typography } from "antd";

import Fade from "react-reveal/Fade";

var ReactRotatingText = require("react-rotating-text");

export default function AnimateText(props) {
  const { Title } = Typography;
  return (
    <div className="centered-text">
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
          {props.userData ? (
            <ReactRotatingText
              items={[
                "Hey there! 😊",
                "I'm Farhan! ",
                "I love writing code to solve problems! 🛠️ ",
                `I'm currently based in ${props.userData.location.slice(0,7)} 🇦🇺`,
                "This is my personal portfolio 📜",
                `It's still a work in progress! 👨‍💻`,
                `You can learn a little bit more about me below 🧐!`,
                "Also, feel free to grab a copy of my resume!",
              ]}
            />
          ) : null}
        </Title>
      </Fade>
    </div>
  );
}
