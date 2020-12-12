import React from "react";
import "../App.css";

import { Button, Popover } from "antd";

export default function MyHobbies() {
  return (
    <div style={{ marginRight: 10 }}>
      <Popover
        content={
          <div>
            <p>
              - Coding (DUH!) 👨‍💻<br></br>- Piano Covers 🎹<br></br>- Soccer ⚽
              <br></br>- Anime Art 🎨<br></br>- Gaming 🎮<br></br>
            </p>
          </div>
        }
        title="My Hobbies"
        placement="bottom"
      >
        <Button type="primary" style={{ border: "1px solid black" }}>
          My Hobbies
        </Button>
      </Popover>
    </div>
  );
}
