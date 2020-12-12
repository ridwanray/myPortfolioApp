import React, { useState } from "react";
import Logo from "../images/OP_Logo_White.png";
import "../App.css";

import { Card, Typography, Button } from "antd";

export default function RecentProjects() {
  const { Title } = Typography;
  return (
    <>
      <div style={{ paddingTop: 20 }}>
        <Title
          level={3}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            fontSize: 25,
            textAlign: "center",
            textDecoration: "underline",
            fontFamily: `Do Hyeon', sans-serif`,
          }}
        >
          Recent Projects
        </Title>
        <div
          className="centered-text"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            title="OrdinaryPlaylists"
            extra={
              <Button
                type="primary"
                href="https://www.ordinaryplaylists.com/"
                target="_blank"
              >
                View
              </Button>
            }
            cover={<img src={Logo} style={{ padding: 20 }}></img>}
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
            A "content-discovery" platform where aspiring artists (such as
            writers, musicians, graphic art designers etc) can contribute their
            work to get recognition on my client's social media platforms.
            Moderators of the platform primarly use this platform to put
            together work from different artists into a single piece of "art".
          </Card>
        </div>
      </div>
    </>
  );
}
