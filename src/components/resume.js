import React, { useState } from "react";
import axios from "axios";
import "../App.css";

import { Typography, Button } from "antd";

var fileDownload = require("js-file-download");

export default function Resume() {
  const { Paragraph } = Typography;
  const { Title } = Typography;

  const handleResumeDownload = () => {
    axios
      .get("http://farhansportfolioapp.herokuapp.com/download/", {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "Resume.pdf");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <Title
        level={3}
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          fontSize: 25,
          textDecoration: "underline",
          fontFamily: `Do Hyeon', sans-serif`,
        }}
      >
        My Resume
      </Title>
      <div className="centered-text">
        <Paragraph
          style={{
            color: "white",
          }}
          ellipsis={{
            rows: 5,
          }}
        >
          A resume does a much better job at showcasing one's skillset. Click
          below to grab mine!
        </Paragraph>
      </div>
      <div className="centered-text">
        <Button
          style={{ border: "1px solid black" }}
          onClick={() => handleResumeDownload()}
          type="primary"
        >
          Grab Resume!
        </Button>
      </div>
    </div>
  );
}
