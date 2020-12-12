import React, { useState } from "react";
import Particles from "react-particles-js";
import "./App.css";
import * as Backgrounds from "./Background";

import AnimateText from "./components/animateText";
import SocialLinks from "./components/socialLinks";
import AboutMe from "./components/aboutMe";
import MyHobbies from "./components/myHobbies";
import TechIUse from "./components/tech";
import RecentProjects from "./components/recentProjects";
import Resume from "./components/resume";
import ContactMe from "./components/contactMe";

import { Switch } from "antd";

function App() {
  const [toggleBackground, setToggleBackground] = useState(false);

  const handleBackgroundChange = () => {
    setToggleBackground(!toggleBackground);
  };

  return (
    <div>
      <Switch
        className="rightSwitch"
        unCheckedChildren="Try Me!"
        checkedChildren="Try Me!"
        onClick={() => handleBackgroundChange()}
      />
      <Particles
        className={toggleBackground ? "custom-bubbles" : "custom-particles"}
        params={{
          particles: toggleBackground
            ? Backgrounds.Bubbles
            : Backgrounds.Particles,
          interactivity: Backgrounds.Interactivity,
        }}
      />
      <div className="app-div">
        <AnimateText />
        <SocialLinks />
        <div className="flex-container flex-center">
          <AboutMe />
          <MyHobbies />
          <TechIUse />
        </div>
        <RecentProjects />
        <Resume />
        <div className="flex-container flex-center">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
