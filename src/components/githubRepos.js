import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Card, Carousel, Button, Typography } from "antd";

import PythonLogo from "../images/python_icon.png";
import JavaLogo from "../images/java_icon.png";
import JSLogo from "../images/javascript_icon.png";
import CLogo from "../images/C_icon.webp";
import JNLogo from "../images/JN_icon.png";
import SQLLogo from "../images/sql_icon.png";

export default function GitHubRepos() {
  const { Title } = Typography;
  const [repos, setRepos] = useState([
    {
      repo_name: "Test repo",
      repo_url: "Test URL",
    },
  ]);

  const [PLogo, setPLogo] = useState(CLogo);

  useEffect(() => {
    axios
      .get("https://farhansportfolioapp.herokuapp.com/github/")
      .then((res) => {
        setRepos(JSON.parse(res.data));
      });
  }, []);

  const getLogo = (index) => {
    if (repos[index].repo_lang === "Python") {
      setPLogo(PythonLogo);
    } else if (repos[index].repo_lang === "Java") {
      setPLogo(JavaLogo);
    } else if (repos[index].repo_lang === "JavaScript") {
      setPLogo(JSLogo);
    } else if (repos[index].repo_lang === "C") {
      setPLogo(CLogo);
    } else if (repos[index].repo_lang === "Jupyter Notebook") {
      setPLogo(JNLogo);
    } else if (repos[index].repo_lang === "PLpgSQL") {
      setPLogo(SQLLogo);
    } else {
      setPLogo("");
    }
  };

  return (
    <div>
      <Title
        level={3}
        className="component-header"
        style={{ color: "white", paddingTop: 20 }}
      >
        Personal Projects
      </Title>
      <Carousel
        autoplay
        effect="fade"
        dotPosition="top"
        dots={false}
        className="custom-center"
        afterChange={(index) => getLogo(index)}
      >
        {<Spin /> ? (
          repos.map((repo) => {
            return (
              <div>
                <Card
                  className="centered-text"
                  style={{
                    height: 380,
                    width: 400,
                    borderRadius: 10,
                    color: "white",
                    background:
                      "linear-gradient(180deg, rgba(31, 31, 31, 0.33) 0%, rgba(31, 31, 31, 0.41) 75%, #1F1F1F 100%)",
                  }}
                  title={repo.repo_name}
                  headStyle={{
                    color: "white",
                    background: "black",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    border: "none",
                  }}
                  bordered={false}
                  extra={
                    <Button type="primary" href={repo.repo_url} target="_blank">
                      View Repo
                    </Button>
                  }
                >
                  {repo.repo_desc}
                  <div>
                    <br></br>
                    <p>Written in: </p>
                    {repo.repo_lang ? (
                      <img
                        style={{ display: "inline-block" }}
                        width="64"
                        height="64"
                        src={PLogo}
                        alt="logo"
                      ></img>
                    ) : null}
                  </div>
                </Card>
              </div>
            );
          })
        ) : null}
      </Carousel>
    </div>
  );
}
