import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Progress, Typography } from "antd";
import LeetcodeLogo from "../images/leetcode_icon.png";

export default function LeetCodeProgress() {
  const { Title } = Typography;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://farhansportfolioapp.herokuapp.com/leetcode/")
      .then((res) => {
        setData(JSON.parse(res.data));
      });
  }, []);

  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <img width="64" height="64" src={LeetcodeLogo}></img>
        <Title
          level={3}
          className="component-header"
          style={{ color: "white", float: "right", marginTop: 7 }}
        >
          Leetcode Progress Tracker
        </Title>
      </div>
      <div className="centered-text">
        {data ? (
          <Progress
            style={{
              color: "white",
              marginRight: 10,
            }}
            width={80}
            strokeColor="green"
            className="flex-item"
            type="circle"
            percent={(data.easy_solved / data.total_easy).toFixed(2)}
            format={() => (
              <p style={{ marginTop: 20, color: "white" }}>
                {data.easy_solved} Easy
              </p>
            )}
          />
        ) : null}
        {data ? (
          <Progress
            style={{
              color: "white",
              marginRight: 10,
            }}
            width={80}
            strokeColor="orange"
            className="flex-item"
            type="circle"
            percent={(data.medium_solved / data.total_medium).toFixed(2)}
            format={() => (
              <p style={{ marginTop: 20, color: "white" }}>
                {data.medium_solved} Medium
              </p>
            )}
          />
        ) : null}
        {data ? (
          <Progress
            style={{
              color: "white",
            }}
            width={80}
            strokeColor="red"
            className="flex-item"
            type="circle"
            percent={(data.hard_solved / data.total_hard).toFixed(2)}
            format={() => (
              <p style={{ marginTop: 20, color: "white" }}>
                {data.hard_solved} Hard
              </p>
            )}
          />
        ) : null}
      </div>
    </div>
  );
}
