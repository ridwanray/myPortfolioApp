import React from "react";
import "../App.css";
import SC from "../images/soundcloud.png";
import { Button } from "antd";
import { Typography } from "antd";


import {
  GithubFilled,
  InstagramOutlined,
  LinkedinFilled,
  FacebookFilled,
  MediumOutlined,
} from "@ant-design/icons";

export default function SocialLinks() {
  const { Title } = Typography;
  return (
    <>
      <Title
          level={3}
          className="component-header"
          style={{ color: "white"}}
        >
          Socials
        </Title>
      <div className="centered-text">
        <Button
          className="button"
          onClick={() =>
            window.open("https://github.com/farhanghazi97", "_blank")
          }
          icon={<GithubFilled />}
        ></Button>
        <Button
          className="button"
          onClick={() =>
            window.open("https://www.instagram.com/farhan.ghazi97/", "_blank")
          }
          icon={<InstagramOutlined />}
        ></Button>
        <Button
          className="button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/farhan-ghazi-901b69177/",
              "_blank"
            )
          }
          icon={<LinkedinFilled />}
        ></Button>
        <Button
          className="button"
          onClick={() =>
            window.open("https://medium.com/@farhanghazi17", "_blank")
          }
          icon={<MediumOutlined />}
        ></Button>
        <Button
          className="button"
          onClick={() =>
            window.open("https://www.facebook.com/farhanghazi97", "_blank")
          }
          icon={<FacebookFilled />}
        ></Button>
        <Button
          className="button"
          onClick={() =>
            window.open("https://soundcloud.com/farhan-ghazi", "_blank")
          }
          icon={
            <img
              alt="soundcloud_logo"
              style={{
                position: "relative",
                bottom: 2,
                width: 30,
                height: 30,
              }}
              src={SC}
            />
          }
        ></Button>
      </div>
    </>
  );
}
