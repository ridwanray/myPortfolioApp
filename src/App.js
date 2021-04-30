import React, { useState, useEffect } from "react";
import axios from "axios";
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
// import LeetCodeProgress from "./components/leetcodeProgress";
import MyBlog from "./components/myBlog";
import ProfilePicture from './components/profilePicture';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://farhansportfolioapp.herokuapp.com/gituser/")
      .then((res) => {
        setUserData(res.data);
      });
  }, []);

  return (
    <div>
      <Background />
      <div className="app-div">
        <div className="flex-center">
          <ProfilePicture userData={userData} />
          <AnimateText userData={userData} />
          <SocialLinks />
          <AboutMe />
          <TechIUse />
          <RecentProjects />
          <MyBlog />
          <GitHubRepos />
          <MyHobbies />
          <Resume />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
