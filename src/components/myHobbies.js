import React from "react";
import "../App.css";

import { Typography } from "antd";

export default function MyHobbies() {
  const { Title } = Typography;
  return (
    <div className="centered-text">
      <Title
          level={3}
          className="component-header"
          style={{ color: "white"}}
        >
          My Hobbies
        </Title>
        <div className="centered-text">
          <p>
            - Coding (DUH!) 👨‍💻<br></br>- Piano Covers 🎹<br></br>- Soccer ⚽
            <br></br>- Anime Art 🎨<br></br>- Gaming 🎮<br></br>
          </p>
        </div>
    </div>
  );
}
