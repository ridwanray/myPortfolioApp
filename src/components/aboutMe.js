import React from "react";
import "../App.css";

import { Button, Popover } from "antd";

export default function AboutMe() {
  return (
    <div className="flex-item">
      <Popover
        content={
          <div>
            <p>
              Hey! I'm Farhan! I'm a highly-enthusiastic individual whose
              currently pursuing a B.Sc in Computer<br></br>Science at UNSW. I
              am a full-stack software developer, working primarily with the
              Django-React stack.<br></br>
              At university, I was the designated technical lead for our
              capstone project. I enjoy working in both<br></br>
              team-oriented and self-directed environments and offer great
              communication skills and work ethic.<br></br>
              My work experience includes a summer internship at Macrovue, a
              FinTech company formerly based<br></br>in Circular Quay (now
              located at Pitt Street)
            </p>
          </div>
        }
        title="About Me"
        placement="bottom"
      >
        <Button type="primary" style={{ border: "1px solid black" }}>
          About Me
        </Button>
      </Popover>
    </div>
  );
}
