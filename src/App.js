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
      <div className="container">
        <Background />
        <section id="profile-picture" className="section">
          <ProfilePicture userData={userData} />
        </section>
        <section id="animated-text" className="section">
          <AnimateText userData={userData} />
        </section>
        <section id="social-links" className="section">
          <SocialLinks />
        </section>
        <section id="about-me" className="section">
          <AboutMe />
        </section>
        <section id="tech" className="section">
          <TechIUse />
        </section>
        <section id="recent-projects" className="section">
          <RecentProjects />
        </section>
        <section id="blog" className="section">
          <MyBlog />
        </section>
        <section id="github" className="section">
          <GitHubRepos />
        </section>
        <section id="hobbies" className="section">
          <MyHobbies />
        </section>
        <section id="resume" className="section">
          <Resume />
        </section>
        <section id="contact" className="section">
          <ContactMe />
        </section>
      </div>
  );
}

export default App;
