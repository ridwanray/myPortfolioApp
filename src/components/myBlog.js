import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import { Typography, Timeline } from "antd";

export default function MyBlog() {
  const { Title } = Typography;
  const { Paragraph } = Typography;

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axios
      .get("https://farhansportfolioapp.herokuapp.com/medium/")
      .then((res) => {
        setArticles(JSON.parse(res.data));
      });
  }, []);

  return (
    <div className="centered-text">
      <Title level={3} className="component-header" style={{ color: "white" }}>
        Blog
      </Title>
      <Paragraph
        className="centered-text"
        style={{
          color: "white",
        }}
        ellipsis={{
          rows: 5,
        }}
      >
        I also write about technology from time to time...
      </Paragraph>
      <Timeline style={{ color: "white" }}>
        {articles
          ? articles.map((article) => {
              return (
                <Timeline.Item
                  label={
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  }
                  position="right"
                  color="black"
                >
                  <p style={{ width: "100%"}}>{article.title}</p>
                </Timeline.Item>
              );
            })
          : null}
      </Timeline>
    </div>
  );
}
