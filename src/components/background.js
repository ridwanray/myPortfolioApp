import React, { useState } from "react";
import Particles from "react-particles-js";
import "../App.css";
import * as Backgrounds from "../Background";

import { Switch } from "antd";

export default function Background() {
  const [toggleBackground, setToggleBackground] = useState(false);

  const handleBackgroundChange = () => {
    setToggleBackground(!toggleBackground);
  };
  return (
    <div>
      <div>
        <Particles
          className={toggleBackground ? "custom-bubbles" : "custom-particles"}
          params={{
            particles: toggleBackground
              ? Backgrounds.Bubbles
              : Backgrounds.Particles,
            interactivity: Backgrounds.Interactivity,
          }}
        />
        <div>
            <Switch
              className="switch"
              unCheckedChildren="Try Me!"
              checkedChildren="Try Me!"
              onClick={() => handleBackgroundChange()}
            />
        </div>
      </div>
    </div>
  );
}
