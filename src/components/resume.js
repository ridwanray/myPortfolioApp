import React from "react";
import axios from "axios";
import "../App.css";

import { Typography, Button } from "antd";

var fileDownload = require("js-file-download");

export default function Resume() {
  const { Paragraph } = Typography;
  const { Title } = Typography;

  const handleResumeDownload = () => {
    axios
      .get("https://farhansportfolioapp.herokuapp.com/download/", {
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
    <div>
      <Title level={3} className="section-title">My Resume</Title>
      <Paragraph
        className="paragraph-color"
        ellipsis={{
          rows: 5,
        }}
      >
        A resume does a much better job at showcasing one's skillset. Click
        below to grab mine!
      </Paragraph>
      <Button
        className="btn"
        onClick={() => handleResumeDownload()}
        type="primary"
      >
        Grab Resume!
      </Button>
    </div>
  );
}
