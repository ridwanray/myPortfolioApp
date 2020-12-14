import React from "react";
import "./App.css";

import Background from "./components/background";
import AnimateText from "./components/animateText";
import SocialLinks from "./components/socialLinks";
import AboutMe from "./components/aboutMe";
import MyHobbies from "./components/myHobbies";
import TechIUse from "./components/tech";
import RecentProjects from "./components/recentProjects";
import Resume from "./components/resume";
import ContactMe from "./components/contactMe";
import GitHubRepos from "./components/githubRepos";
import LeetCodeProgress from "./components/leetcodeProgress";

function App() {
  return (
    <div>
      <Background />
      <div className="app-div">
        <AnimateText />
        <SocialLinks />
        <div className="flex-container flex-center">
          <AboutMe />
          <MyHobbies />
          <TechIUse />
        </div>
        <div className="flex-container flex-center">
          <LeetCodeProgress />
        </div>
        <div className="flex-container flex-center">
          <RecentProjects />
        </div>
        <div className="flex-container flex-center">
          <GitHubRepos />
        </div>
        <div className="flex-container flex-center">
          <Resume />
        </div>
        <div className="flex-container flex-center">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
