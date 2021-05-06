import React from "react";
import "../App.css";

import { Typography } from "antd";

export default function MyHobbies() {
  const { Title } = Typography;
  return (
    <div>
      <Title level={3} className="section-title">My Hobbies</Title>
      <div className="hobbies-list">
          - Coding (DUH!) <span role="img" aria-label="emoji">👨‍💻</span>
          <br></br>
          - Piano Covers <span role="img" aria-label="emoji">🎹</span>
          <br></br>
          - Soccer <span role="img" aria-label="emoji">⚽</span> 
          <br></br>
          - Anime Art <span role="img" aria-label="emoji">🎨</span>
          <br></br>
          - Gaming <span role="img" aria-label="emoji">🎮</span> 
          <br></br>
      </div>
    </div>
  );
}
