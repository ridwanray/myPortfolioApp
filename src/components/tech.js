import React, { useState } from "react";
import "../App.css";

import { Button, Popover } from "antd";

export default function TechIUse() {
  const [btnPos, setbtnPos] = useState(false);
  const toggleBtnPos = () => {
    setbtnPos(!btnPos);
  };
  return (
    <div>
      <Popover
        content={
          <div>
            <p>
              Favourite Editor: VSCode<br></br>
              Languages: C, Python, JS, Java<br></br>
              Backend: Django, NodeJS<br></br>
              Frontend: React, Vue, Angular<br></br>
              RDBMS: PostgreSQL, MySQL<br></br>
              <b>and learning a ton more...</b>
            </p>
          </div>
        }
        title="Technologies I Use"
        placement="bottom"
      >
        <Button
          onMouseEnter={() => toggleBtnPos()}
          onMouseLeave={() => toggleBtnPos()}
          type="primary"
          style={{ border: "1px solid black" }}
        >
          Tech I Use
        </Button>
      </Popover>
    </div>
  );
}
