/* eslint-disable no-multi-str */
import React, { useState } from "react";
import Logo from "../images/OP_Logo_White.png";
import SFLogo from "../images/secretflow.png";
import "../App.css";

import { Card, Typography, Button, Carousel, Spin } from "antd";

export default function RecentProjects() {
  const { Title } = Typography;
  const [projects, setProjects] = useState([
    {
      name: "OrdinaryPlaylists",
      link: "https://www.ordinaryplaylists.com/",
      logo: Logo,
      img_width: "100",
      img_height: "256",
      desc:
        "A content-discovery platform where aspiring artists (such as \
        writers, musicians, graphic art designers etc) can contribute their \
        work to get recognition on my client's social media platforms. \
        Moderators of the platform primarly use this platform to put \
        together work from different artists into a single piece of art",
    },
    {
      name: "SecretFlow",
      link: "https://www.secretflow.io/",
      logo: SFLogo,
      img_width: "100",
      img_height: "250",
      desc:
        "A realtime smart money tracker currently under development! This idea \
        was conceived by my dear friend Gilbert and I have recently onboarded as \
        the lead backend developer for the project. Our platform tracks unusual \
        activities in the options market. SecretFlow is still in its infancy stage \
        and we are working hard to bring it to life! Stay tuned! ",
    },
  ]);

  return (
    <>
      <div className="centered-text">
        <Title
          level={3}
          className="component-header"
          style={{ color: "white" }}
        >
          Freelance Projects
        </Title>
        <Carousel
          autoplay
          effect="fade"
          dotPosition="top"
          dots={false}
          className="custom-center"
        >
          {<Spin /> ? (
            projects.map((project) => {
              return (
                <div>
                  <Card
                    title={project.name}
                    extra={
                      <Button
                        type="primary"
                        href={project.link}
                        target="_blank"
                      >
                        View
                      </Button>
                    }
                    cover={
                      <img
                        alt="logo"
                        src={project.logo}
                        style={{ padding: 20 }}
                        width={project.img_width}
                        height={project.img_height}
                      ></img>
                    }
                    bordered={false}
                    headStyle={{
                      background: "black",
                      color: "white",
                      width: 400,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      border: "none",
                    }}
                    style={{
                      width: 400,
                      borderRadius: 10,
                      color: "white",
                      background:
                        "linear-gradient(180deg, rgba(31, 31, 31, 0.33) 0%, rgba(31, 31, 31, 0.41) 75%, #1F1F1F 100%)",
                    }}
                  >
                    {project.desc}
                  </Card>
                </div>
              );
            })
          ) : null}
        </Carousel>
      </div>
    </>
  );
}
