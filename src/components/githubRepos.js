import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Card, Carousel, Button } from "antd";

import PythonLogo from "../images/python_icon.png";
import JavaLogo from "../images/java_icon.png";
import JSLogo from "../images/javascript_icon.png";
import CLogo from "../images/C_icon.webp";
import JNLogo from "../images/JN_icon.png";
import SQLLogo from "../images/sql_icon.png";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([
    {
      repo_name: "Test repo",
      repo_url: "Test URL",
    },
  ]);

  const [PLogo, setPLogo] = useState(CLogo);

  useEffect(() => {
    axios.get("http://localhost:8000/github/").then((res) => {
      setRepos(JSON.parse(res.data));
    });
  }, []);

  const getLogo = (index) => {
    console.log(repos[index].repo_lang);
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
                  background: "linear-gradient(to right, #1f1c2c, #928dab)",
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
                <div className="centered-text">
                  <br></br>
                  <p>Written in: </p>
                  {repo.repo_lang ? (
                    <img
                      style={{ display: "inline-block" }}
                      width="64"
                      height="64"
                      src={PLogo}
                    ></img>
                  ) : null}
                </div>
              </Card>
            </div>
          );
        })
      ) : null}
    </Carousel>
  );
}
