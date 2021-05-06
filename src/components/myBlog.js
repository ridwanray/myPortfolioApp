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
    <div>
      <Title level={3} className="section-title">
        Blog
      </Title>
      <Paragraph 
        className="section-title"
        ellipsis={{
          rows: 5,
        }}
      >
        I also write about technology from time to time...
      </Paragraph>
      <div>
        <Timeline className="timeline-article">
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
                    <p>{article.title}</p>
                  </Timeline.Item>
                );
              })
            : null}
        </Timeline>
      </div>
    </div>
  );
}
