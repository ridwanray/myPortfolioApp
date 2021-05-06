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
      <Title className="section-title" level={3}>Socials</Title>
      <Button
        className="social-icon"
        onClick={() =>
          window.open("https://github.com/farhanghazi97", "_blank")
        }
        icon={<GithubFilled />}
      ></Button>
      <Button
        className="social-icon"
        onClick={() =>
          window.open("https://www.instagram.com/farhan.ghazi97/", "_blank")
        }
        icon={<InstagramOutlined />}
      ></Button>
      <Button
        className="social-icon"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/farhan-ghazi-901b69177/",
            "_blank"
          )
        }
        icon={<LinkedinFilled />}
      ></Button>
      <Button
        className="social-icon"
        onClick={() =>
          window.open("https://medium.com/@farhanghazi17", "_blank")
        }
        icon={<MediumOutlined />}
      ></Button>
      <Button
        className="social-icon"
        onClick={() =>
          window.open("https://www.facebook.com/farhanghazi97", "_blank")
        }
        icon={<FacebookFilled />}
      ></Button>
      <Button
        className="social-icon"
        onClick={() =>
          window.open("https://soundcloud.com/farhan-ghazi", "_blank")
        }
        icon={
          <img
            className="soundcloud-logo"
            alt="soundcloud_logo"
            src={SC}
          />
        }
      ></Button>
    </>
  );
}
